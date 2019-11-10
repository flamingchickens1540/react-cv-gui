import {Widget} from "../Widget";
import * as React from "react";

export class DoubleSlider extends Widget {
    lowerValue: number;
    upperValue: number;

    public renderComponent(handleChange: () => void) {
        return <div key={this.name}>
            <input
                type="number"
                value={this.lowerValue}
                onChange={(e) => {
                    this.lowerValue = Number(e.target.value);
                    handleChange();
                }}
            />
            <input
                type="number"
                value={this.upperValue}
                onChange={(e) => {
                    this.upperValue = Number(e.target.value);
                    handleChange();
                }}
            />
        </div>
    }
}
