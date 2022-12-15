import { DefaultLinkFactory } from "@projectstorm/react-diagrams";
import { AdvancedLinkModel } from "./AdvancedLinkModel";
import { AdvancedLinkSegment } from "./AdvancedLinkSegment";

export class AdvancedLinkFactory extends DefaultLinkFactory {
    constructor() {
      super("advanced");
    }
  
    generateModel(): AdvancedLinkModel {
      return new AdvancedLinkModel();
    }
  
    generateLinkSegment(
      model: AdvancedLinkModel,
      selected: boolean,
      path: string
    ) {
      return (
        <g>
          <AdvancedLinkSegment model={model} path={path} />
        </g>
      );
    }
  }