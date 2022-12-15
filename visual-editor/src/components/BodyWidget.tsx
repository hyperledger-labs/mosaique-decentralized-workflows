import React, { useEffect, useState } from "react";
import * as _ from "lodash";
import { TrayWidget } from "./TrayWidget";
import { Application } from "./Application";
import { TrayItemWidget } from "./TrayItemWidget";
import {
  DefaultNodeModel,
  DefaultPortModel,
  DefaultLinkModel,
} from "@projectstorm/react-diagrams";
import uuidv4 from "../utils";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { ViewCanvasWidget } from "./ViewCanvasWidget";
import styled from "@emotion/styled";
import { HStack, Modal, Text, VStack } from "native-base";
import RightPanel from "./RightPanel";
import TemplateSelectionModal from "./TemplateSelectionModel";
import { AdvancedPortModel } from "./Links/AdvancedPortModel";
import { AdvancedLinkFactory } from "./Links/AdvancedLinkFactory";
export interface BodyWidgetProps {
  app: Application;
}

namespace S {
  export const Body = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    min-height: 100%;
  `;

  export const Header = styled.div`
    display: flex;
    background: rgb(30, 30, 30);
    flex-grow: 0;
    flex-shrink: 0;
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    padding: 10px;
    align-items: center;
  `;

  export const Content = styled.div`
    display: flex;
    flex-grow: 1;
  `;

  export const Layer = styled.div`
    position: relative;
    flex-grow: 1;
  `;
}

export const BodyWidget = (props: BodyWidgetProps) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [update, setUpdate] = useState(false);
  const [xPos, setqXPos] = useState(0);
  const [yPos, setqYPos] = useState(0);
  const [showTransionModal, setShowTransionModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState<any>(null);
  const [nodeVals, setNodeVals] = useState<any>(null);
  const [nodeSel, setNodeSel] = useState<boolean>(false); 
  const [stateMachine, setStatemachine] = useState<any>([]);
  const [template, setTemplate] = useState<any>({});

  useEffect(() => {}, [
    props,
    update,
    modalVisible,
    selectedLink,
    showTransionModal,
  ]);
  useEffect(() => {
    setUpdate(!update);
  }, [nodeVals, nodeSel, stateMachine]);

  function dropAction(event: any) {
    props.app
      .getDiagramEngine()
      .getLinkFactories()
      .registerFactory(new AdvancedLinkFactory());
    var data = JSON.parse(event.dataTransfer.getData("storm-diagram-node"));
    console.log(data);
    var nodesCount = _.keys(
      props.app.getDiagramEngine().getModel().getNodes()
    ).length;
    var node: DefaultNodeModel | null = null;
    node = new DefaultNodeModel("Node " + (nodesCount + 1), "rgb(192,255,0)");
    //make new random id for node
    const id = uuidv4();
    node.getOptions().id = id;

    node.addInPort("In");
    props.app
      .getDiagramEngine()
      .getModel()
      .registerListener({
        linksUpdated: (e: any) => {
          //link added do something on new link

        },
        nodesUpdated: (event: any) => {
          //node state changed do something on node selection
          
          //console.log(event);
          // setNodeVals(event.node);
          // setNodeSel(true);
        },
        eventDidFire: (event: any) => {},
      });
    node.addPort(
      new AdvancedPortModel(false, "out-1", "Out thick")
    );
    node.addPort(
      new DefaultPortModel(false, "out-2", "Out default")
    );
    node.addOutPort("Out");
    var point = props.app.getDiagramEngine().getRelativeMousePoint(event);
    node.setPosition(point);
    props.app.getDiagramEngine().getModel().addNode(node);
    //change state to update canvas 
    setUpdate(!update);
  }
  function setTemplateOnEditor() {
    let machines = template.machines;
    let nodes = [];
    let links: DefaultLinkModel[] = [];
    let states = machines[0].states;
    let position = 1;
    for (const state in states) {
      let node = new DefaultNodeModel(state, "rgb(192,255,0)");
      node.addInPort("In");
      node.addOutPort("Out");
      node.setPosition(position * 100, 100);
      node.getOptions().name = states[state].stateName;
      node.getOptions().id = states[state].stateId;
      nodes.push(node);
      console.log(node);
      position++;
    }

    for (const node in nodes) {
      for (const state in states) {
        if (states[state].stateId === nodes[node].getOptions().id) {
          let transitions = states[state].transitions;
          for (const transition in transitions) {
            for (const conditions in transitions[transition].conditions) {
              let link = new DefaultLinkModel();
              link.setSourcePort(nodes[node].getPort("Out"));
              for (const targetNode in nodes) {
                if (
                  nodes[targetNode].getOptions().id ===
                  transitions[transition].conditions[conditions].newState
                ) {
                  link.setTargetPort(nodes[targetNode].getPort("In"));
                }
              }
              links.push(link);
            }
          }
        }
      }

      for (const node in nodes) {
        props.app.getDiagramEngine().getModel().addNode(nodes[node]);
      }

      for (const link in links) {
        props.app.getDiagramEngine().getModel().addLink(links[link]);
      }
      setUpdate(!update);
    }
  }

  useEffect(() => {
    if (!modalVisible) {
      setTemplateOnEditor();
    }
    console.log(template);
  }, [template]);

  return (
    <S.Body>
      <S.Header>
        <div className="title">Mosiac</div>
        <button
          onClick={() => {
            setModalVisible(true);
          }}
        >
          Add Data
        </button>
      </S.Header>
      <HStack w="100%" h="100%">
        <HStack w="80vw">
          <TrayWidget>
            <TrayItemWidget
              model={{ name: "nn" }}
              name="Node"
              color="rgb(192,255,0)"
            />
          </TrayWidget>
          <S.Layer
            onDrop={(event) => {
              dropAction(event);
            }}
            onDragOver={(event) => {
              event.preventDefault();
            }}
          >
            <ViewCanvasWidget>
              <CanvasWidget engine={props.app.getDiagramEngine()} />
            </ViewCanvasWidget>
          </S.Layer>
        </HStack>
        <RightPanel
          node={nodeVals}
          nodeSel={nodeSel}
          template={template}
          setTemplate={setTemplate}
        />
        <TemplateSelectionModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setTempate={setTemplate}
        />
      </HStack>
    </S.Body>
  );
};
