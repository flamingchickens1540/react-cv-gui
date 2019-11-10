import * as React from "react";

export interface DoubleSliderProps {
    lowerValue: number;
    upperValue: number;
    onChange: (value: number) => void
}

export class DoubleSlider extends React.Component<DoubleSliderProps, {}> {
    render() {
        return <div>
            <input
                type="number"
                value={this.props.lowerValue}
                onChange={(e) => this.props.onChange(Number(e.target.value))}/>
            <input
                type="number"
                value={this.props.upperValue}
                onChange={(e) => this.props.onChange(Number(e.target.value))}/>
        </div>
    }
}
