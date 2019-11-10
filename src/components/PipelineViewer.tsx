import * as React from "react";
import {Pipeline} from "../data/Pipeline";

export interface PipelineViewerProps {
    pipeline: Pipeline;
    onChange: () => void;
}

export class PipelineViewer extends React.Component<PipelineViewerProps, {}> {
    render() {
        return <div>
            {this.props.pipeline.widgets.map(component => component.renderComponent(this.props.onChange))}
        </div>;
    }
}
