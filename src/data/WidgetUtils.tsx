import {StreamData} from "./widgets/StreamData";
import {SliderData} from "./widgets/SliderData";
import {DoubleSliderData} from "./widgets/DoubleSliderData";
import {WidgetData, WidgetType} from "./WidgetData";

export class WidgetUtils {
    static fromJSON(json: any | string): WidgetData {
        if (typeof json === 'string') {
            return JSON.parse(json, WidgetUtils.reviver);
        } else {
            switch (json.type) {
                case WidgetType.STREAM:
                    // @ts-ignore
                    return StreamData.fromJSON(json);
                case WidgetType.SLIDER:
                    // @ts-ignore
                    return SliderData.fromJSON(json);
                case WidgetType.DOUBLE_SLIDER:
                    // @ts-ignore
                    return DoubleSliderData.fromJSON(json);
            }
        }
        throw new Error("Invalid component type!")
    }

    static reviver(key: string, value: any): any {
        return key === "" ? WidgetUtils.fromJSON(value) : value;
    }
}