import React from "react";
import { AdvancedLinkModel } from "./AdvancedLinkModel";

export class AdvancedLinkSegment extends React.Component<{
    model: AdvancedLinkModel;
    path: string;
  }> {
    path!: SVGPathElement;
    circle!: SVGCircleElement;
    callback: (() => any) | null = null;
    percent: number;
    handle: any;
    mounted: boolean = false;
  
    constructor(
      props:
        | { model: AdvancedLinkModel; path: string }
        | Readonly<{ model: AdvancedLinkModel; path: string }>
    ) {
      super(props);
      this.percent = 0;
    }
  
    componentDidMount() {
      this.mounted = true;
      this.callback = () => {
        if (!this.circle || !this.path) {
          return;
        }
  
        this.percent += 2;
        if (this.percent > 100) {
          this.percent = 0;
        }
  
        let point = this.path.getPointAtLength(
          this.path.getTotalLength() * (this.percent / 100.0)
        );
  
        this.circle.setAttribute("cx", "" + point.x);
        this.circle.setAttribute("cy", "" + point.y);
  
        if (this.mounted) {
          requestAnimationFrame(this.callback as any);
        }
      };
      requestAnimationFrame(this.callback);
    }
  
    componentWillUnmount() {
      this.mounted = false;
    }
  
    render() {
      return (
        <>
          <path
            fill="none"
            ref={(ref) => {
              this.path = ref as SVGPathElement;
            }}
            strokeWidth={this.props.model.getOptions().width}
            stroke="rgba(255,0,0,0.5)"
            d={this.props.path}
          />
          <circle
            ref={(ref) => {
              this.circle = ref as SVGCircleElement;
            }}
            r={10}
            fill="orange"
          />
        </>
      );
    }
  }