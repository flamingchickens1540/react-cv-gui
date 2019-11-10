import {Widget} from "../Widget";
import * as React from "react";

export class DoubleSlider extends Widget {
    lowerValue: number;
    upperValue: number;

    public renderComponent(handleChange: () => void) {
        return <div key={this.name}>
            <input
                type="number"
                defaultValue={this.lowerValue}
                onChange={(e) => {
                    if (e.target.value === '') return;
                    this.lowerValue = Number(e.target.value);
                    handleChange();
                }}
            />
            <input
                type="number"
                defaultValue={this.upperValue}
                onChange={(e) => {
                    if (e.target.value === '') return;
                    this.upperValue = Number(e.target.value);
                    handleChange();
                }}
            />
        </div>
    }
}
