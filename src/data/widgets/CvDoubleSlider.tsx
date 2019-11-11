import {Widget} from "../Widget";
import * as React from "react";
import {Input, Slider} from "@material-ui/core";

export class CvDoubleSlider extends Widget {
    lowerValue: number;
    upperValue: number;
    min: number;
    max: number;

    public renderComponent(handleChange: () => void) {
        return <div key={this.name} className={"slider-container double"}>
            {/*<div className={"label"}>{this.name}</div>*/}
            <div className={"input first"}>
                <Input
                    value={this.lowerValue}
                    onChange={(e) => {
                        if (e.target.value === '') return;
                        this.lowerValue = Number(e.target.value);
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
                    value={[this.lowerValue, this.upperValue]}
                    onChange={((event, value: number[]) => {
                        this.lowerValue = value[0];
                        this.upperValue = value[1];
                        handleChange();
                    })}
                    min={this.min}
                    max={this.max}
                />
            </div>
            <div className={"input last"}>
                <Input
                    value={this.upperValue}
                    onChange={(e) => {
                        if (e.target.value === '') return;
                        this.upperValue = Number(e.target.value);
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
        </div>
    }
}
