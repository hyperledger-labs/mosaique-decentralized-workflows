import { HStack, Modal, Stack, Text, VStack, ZStack } from "native-base";
import { useEffect, useState } from "react";

const TransitionModel = ({
  modalVisible,
  setModalVisible,
  selectedLink,
  stateMachine,
  setStateMachine,
}: any) => {
  const [state, setState] = useState({ node1: "", node2: "", transition: "" });
  useEffect(() => {
    if (selectedLink) {
      setState({
        node1: selectedLink.sourcePort.getParent().options.name,
        node2: selectedLink.targetPort.getParent().options.name,
        transition: "",
      });
    }

    //console.log(selectedLink['sourcePort']['parent']['options']['name'])
  }, [selectedLink]);

  return (
    <Modal isOpen={modalVisible} onClose={setModalVisible} w="50vw"h="50vh" my="auto" mx="auto" backgroundColor={"black"}>
      <VStack >
        <Stack top="-40" mx="auto">
        <Text fontSize="4xl" color="white">Transition</Text>
        </Stack>
        <HStack w="50vw" ml="96">
          <Stack w="50%">
            <Text fontSize={"20"} color="white">
              {state.node1}
            </Text>
          </Stack>
          <Stack w="50%">
            <Text fontSize={"20"} color="white">
              {state.node2}
            </Text>
          </Stack>
        </HStack>
      </VStack>
    </Modal>
  );
};
export default TransitionModel;
