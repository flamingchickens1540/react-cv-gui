import {WidgetData, WidgetJSON} from "../WidgetData";

export class DoubleSliderData extends WidgetData {
    lowerValue: number;
    upperValue: number;

    static fromJSON(json: DoubleSliderJSON | string): DoubleSliderData {
        if (typeof json === 'string') {
            return JSON.parse(json, DoubleSliderData.reviver);
        } else {
            return Object.assign(Object.create(DoubleSliderData.prototype), json, {});
        }
    }

    static reviver(key: string, value: any): any {
        return key === "" ? DoubleSliderData.fromJSON(value) : value;
    }
}

class DoubleSliderJSON extends WidgetJSON {
    lowerValue: number;
    upperValue: number;
}
