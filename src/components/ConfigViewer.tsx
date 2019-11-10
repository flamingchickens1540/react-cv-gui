import * as React from "react";
// @ts-ignore
import {Config} from "../data/Config";
import {Group} from "../data/widgets/Group";

export interface ConfigViewerProps {
}

export interface ConfigViewerState {
    config: Config;
}

export class ConfigViewer extends React.Component<ConfigViewerProps, ConfigViewerState> {

    constructor(props: ConfigViewerProps) {
        super(props);

        let newConfig = Config.fromJSON(JSON.parse(`
{
	"pipelines": [
	{
		"name": "myFirstPipeline",
		"widgets": [{
			"type": "STREAM",
			"name": "myFirstStream",
			"url": "https://www.w3schools.com/html/pic_trulli.jpg"
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
			"type": "SLIDER",
			"name": "myFirstSt3ream",
			"value": 2
		},
		{
			"type": "SLIDER",
			"name": "myFirstSt4ream",
			"value": 2
		},
		{
			"type": "SLIDER",
			"name": "myFirstSt5ream",
			"value": 2
		},
		{
			"type": "GROUP",
			"name": "myFirstGroup",
			"widgets": [
					{
			"type": "SLIDER",
			"name": "myFirstS7tream",
			"value": 2
		},
		{
			"type": "SLIDER",
			"name": "myFir8stStream",
			"value": 2
		},
		{
			"type": "DOUBLE_SLIDER",
			"name": "dd",
			"lowerValue": 3,
			"upperValue": 5
		}]
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
        `));
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
        let pipelineToOption = (pipeline: Group, index: number) => <option value={index}
                                                                           key={pipeline.name}>{pipeline.name}</option>;
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
