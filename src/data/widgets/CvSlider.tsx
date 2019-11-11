import {Widget} from "../Widget";
import * as React from "react";
import {Input, Slider} from "@material-ui/core";

export class CvSlider extends Widget {
    value: number;
    min: number;
    max: number;

    public renderComponent(handleChange: () => void) {
        return <div key={this.name} className={"slider-container single"}>
            {/*<div className={"label"}>{this.name}</div>*/}
            <div className={"input first"}>
                <Input
                    value={this.value}
                    onChange={(e) => {
                        if (e.target.value === '') return;
                        this.value = Number(e.target.value);
                        handleChange();
                    }}
                    inputProps={{
                        min: this.min,
                        max: this.max,
                        type: 'number',
                    }}
                    margin="dense"
                    fullWidth={true}
                />
            </div>
            <div className={"slider"}>
                <Slider
                    value={this.value}
                    onChange={((event, newValue: number) => {
                        this.value = newValue;
                        handleChange();
                    })}
                    min={this.min}
                    max={this.max}
                    aria-labelledby="continuous-slider"
                    step={(this.max - this.min) < 10 ? 0.001 : 1}
                />
            </div>
        </div>
    }
}
