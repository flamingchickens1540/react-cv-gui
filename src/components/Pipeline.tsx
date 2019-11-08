import * as React from "react";
import {NumberInput} from "./NumberInput";

export interface PipelineProps { pipelineJSON: string }

export class Pipeline extends React.Component<PipelineProps, {}> {
    render() {
        let parsedPipeline = JSON.parse(this.props.pipelineJSON);

        return <div>
            {Object.keys(parsedPipeline).map(key => <NumberInput key={key} initialValue={parsedPipeline[key]} onChange={newVal => alert('New value for ' + key + ' : ' + newVal)}/>)}
        </div>;
    }
}