import * as React from "react";
import {Config} from "../data/Config";
import {Group} from "../data/widgets/Group";
import * as sampleConfig from "../sample-config.json"
import {MenuItem, Select} from "@material-ui/core";

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

    private handlePipelineIndexChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        this.state.config.selectedPipelineIndex = e.target.value as number;
        this.updateState();
    };

    private updateState = () => this.setState({config: this.state.config});

    render() {
        let pipelineToOption = (pipeline: Group, index: number) => <MenuItem value={index} key={pipeline.name}>{pipeline.name}</MenuItem>;
        let currentPipeline = this.state.config.pipelines[this.state.config.selectedPipelineIndex];

        return <div>
            {/*<Websocket url={'ws://' + location.hostname + ':8888/websocket'} onMessage={this.handleCvConfigUpdates}/>*/}
            <Select value={this.state.config.selectedPipelineIndex}
                    onChange={this.handlePipelineIndexChange}>
                {this.state.config.pipelines.map(pipelineToOption)}
            </Select>
            {currentPipeline.renderComponent(this.updateState)}
        </div>;
    }
}
