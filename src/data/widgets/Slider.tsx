import {Widget} from "../Widget";
import * as React from "react";

export class Slider extends Widget {
    value: number;

    public renderComponent(handleChange: () => void) {
        return <div key={this.name}>
            <input
                type="number"
                defaultValue={this.value}
                onChange={(e) => {
                    if (e.target.value === '') return;
                    this.value = Number(e.target.value);
                    handleChange();
                }}
            />
        </div>
    }
}
