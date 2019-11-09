import * as React from "react";
// @ts-ignore
import Websocket from 'react-websocket';
import {CvConfig} from "../data/CvConfig";
import {PipelineRenderer} from "./PipelineRenderer";

export interface CvViewControllerProps {
}

export interface CvViewControllerState {
    config: CvConfig;
    selectedPipelineIndex: number
}

export class CvViewController extends React.Component<CvViewControllerProps, CvViewControllerState> {

    handleCvConfigUpdates(jsonString: string) {
        this.setState({config: JSON.parse(jsonString, CvConfig.reviver)});
    }

    render() {

        return <div>
            <Websocket url={'ws://' + location.hostname + ':8888/websocket'} onMessage={this.handleCvConfigUpdates}/>
            <select value={this.state.selectedPipelineIndex}>
                {this.state.config.pipelines.map((pipeline, index) => <option value={index}>{pipeline.name}</option>)}
            </select>
            <PipelineRenderer pipeline={this.state.config.pipelines[this.state.selectedPipelineIndex]}/>
        </div>;
    }
}
