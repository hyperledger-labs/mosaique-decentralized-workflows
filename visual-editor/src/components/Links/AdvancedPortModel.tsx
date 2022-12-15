import { DefaultPortModel } from "@projectstorm/react-diagrams";
import { AdvancedLinkModel } from "./AdvancedLinkModel";

export class AdvancedPortModel extends DefaultPortModel {
  createLinkModel(): AdvancedLinkModel {
    return new AdvancedLinkModel();
  }
}
