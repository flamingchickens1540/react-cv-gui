import * as React from "react";
import {Pipeline} from "../data/Pipeline";
import {WidgetData, WidgetType} from "../data/WidgetData";
import {Stream} from "./widgets/Stream";
import {StreamData} from "../data/widgets/StreamData";
import {DoubleSlider} from "./widgets/DoubleSlider";
import {Slider} from "./widgets/Slider";
import {DoubleSliderData} from "../data/widgets/DoubleSliderData";
import {SliderData} from "../data/widgets/SliderData";

export interface PipelineViewerProps {
    pipeline: Pipeline
}

export class PipelineViewer extends React.Component<PipelineViewerProps, {}> {
    render() {
        return <div>
            {this.props.pipeline.widgets.map(PipelineViewer.generateWidget)}
        </div>;
    }

    private static generateWidget(component: WidgetData) {
        switch (component.type) {
            case WidgetType.STREAM:
                return <Stream url={(component as StreamData).url} key={component.name}/>;
            case WidgetType.SLIDER:
                let sliderData = component as SliderData;
                return <Slider value={sliderData.value} onChange={() => {
                }} key={component.name}/>;
            case WidgetType.DOUBLE_SLIDER:
                let doubleSliderData = component as DoubleSliderData;
                return <DoubleSlider lowerValue={doubleSliderData.lowerValue} upperValue={doubleSliderData.upperValue}
                                     onChange={() => {
                                     }} key={component.name}/>;
        }
        throw new Error("Invalid component type!")
    }
}
