import * as React from "react";
// @ts-ignore
import {Config} from "../data/Config";
import {PipelineViewer} from "./PipelineViewer";

export interface ConfigViewerProps {
}

export interface ConfigViewerState {
    config: Config;
}

export class ConfigViewer extends React.Component<ConfigViewerProps, ConfigViewerState> {

    constructor(props: ConfigViewerProps) {
        super(props);

        let newConfig = JSON.parse(`
{
	"pipelines": [
	{
		"name": "myFirstPipeline",
		"widgets": [{
			"type": "STREAM",
			"name": "myFirstStream",
			"url": "google.com"
		}]
	},
	{
		"name": "two",
		"widgets": [
		{
			"type": "SLIDER",
			"name": "myFirstStream",
			"value": 2
		},
		{
			"type": "DOUBLE_SLIDER",
			"name": "dd",
			"lowerValue": 3,
			"upperValue": 5
		}
		]
	},
	{
		"name": "threeee",
		"widgets": [{
			"type": "DOUBLE_SLIDER",
			"name": "mySecondStream",
			"lowerValue": 3,
			"upperValue": 9
		}]
	}
	],
	"selectedPipelineIndex":2
}
        `, Config.reviver);
        console.log(newConfig);
        this.state = {config: newConfig};
        this.handlePipelineIndexChange = this.handlePipelineIndexChange.bind(this);
    }

    handleCvConfigUpdates(jsonString: string) {
        this.setState({config: JSON.parse(jsonString, Config.reviver)});
    }

    handlePipelineIndexChange(e: { target: { selectedIndex: number; }; }) {
        this.state.config.selectedPipelineIndex = e.target.selectedIndex;
        this.setState({config: this.state.config});
    }

    render() {
        return <div>
            {/*<Websocket url={'ws://' + location.hostname + ':8888/websocket'} onMessage={this.handleCvConfigUpdates}/>*/}
            <select value={this.state.config.selectedPipelineIndex}
                    onChange={this.handlePipelineIndexChange.bind(this)}>
                {this.state.config.pipelines.map((pipeline, index) => <option value={index}
                                                                              key={pipeline.name}>{pipeline.name}</option>)}
            </select>
            <PipelineViewer pipeline={this.state.config.pipelines[this.state.config.selectedPipelineIndex]}/>
        </div>;
    }
}
