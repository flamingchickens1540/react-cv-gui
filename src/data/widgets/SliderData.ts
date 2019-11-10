import {WidgetData, WidgetJSON} from "../WidgetData";

export class SliderData extends WidgetData {
    value: number;

    static fromJSON(json: SliderJSON | string): SliderData {
        if (typeof json === 'string') {
            return JSON.parse(json, SliderData.reviver);
        } else {
            return Object.assign(Object.create(SliderData.prototype), json, {});
        }
    }

    static reviver(key: string, value: any): any {
        return key === "" ? SliderData.fromJSON(value) : value;
    }
}

class SliderJSON extends WidgetJSON {
    value: number;
}
