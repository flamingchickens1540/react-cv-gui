import * as React from "react";

export interface NumberInputProps {
    value: number;
    onChange: (value: number) => void
}

export class Slider extends React.Component<NumberInputProps, {}> {
    render() {
        return <input
            type="number"
            value={this.props.value}
            onChange={(e) => this.props.onChange(Number(e.target.value))}/>
    }
}
