import * as React from "react";
import {Config} from "../data/Config";
import {Group} from "../data/widgets/Group";
import * as sampleConfig from "../sample-config.json"

export interface ConfigViewerProps {
}

export interface ConfigViewerState {
    config: Config;
}

export class ConfigViewer extends React.Component<ConfigViewerProps, ConfigViewerState> {

    constructor(props: ConfigViewerProps) {
        super(props);

        let newConfig = Config.fromJSON(sampleConfig);
        console.log(newConfig);
        this.state = {config: newConfig};
    }

    private handleConfigUpdates(jsonString: string) {
        this.setState({config: Config.fromJSON(JSON.parse(jsonString))});
    }

    private handlePipelineIndexChange = (e: { target: { selectedIndex: number; }; }) => {
        this.state.config.selectedPipelineIndex = e.target.selectedIndex;
        this.updateState();
    };

    private updateState = () => this.setState({config: this.state.config});

    render() {
        let pipelineToOption = (pipeline: Group, index: number) => <option value={index} key={pipeline.name}>{pipeline.name}</option>;
        let currentPipeline = this.state.config.pipelines[this.state.config.selectedPipelineIndex];

        return <div>
            {/*<Websocket url={'ws://' + location.hostname + ':8888/websocket'} onMessage={this.handleCvConfigUpdates}/>*/}
            <select value={this.state.config.selectedPipelineIndex}
                    onChange={this.handlePipelineIndexChange}>
                {this.state.config.pipelines.map(pipelineToOption)}
            </select>
            {currentPipeline.renderComponent(this.updateState)}
        </div>;
    }
}
