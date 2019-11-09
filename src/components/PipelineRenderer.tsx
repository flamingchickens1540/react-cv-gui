import * as React from "react";
import {CvPipeline} from "../data/CvPipeline";
import {ComponentTypes, CvComponent} from "../data/CvComponent";

export interface PipelineRendererProps {
    pipeline: CvPipeline
}

export class PipelineRenderer extends React.Component<PipelineRendererProps, {}> {
    render() {
        return <div>
            {this.props.pipeline.components.forEach(this.generateComponent)}
        </div>;
    }

    private generateComponent(component: CvComponent) {
        switch (component.type) {
            case ComponentTypes.STREAM:
                return <
        }
            }
            }
