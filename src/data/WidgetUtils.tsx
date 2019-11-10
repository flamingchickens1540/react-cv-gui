import {Stream} from "./widgets/Stream";
import {Slider} from "./widgets/Slider";
import {DoubleSlider} from "./widgets/DoubleSlider";
import {Widget, WidgetJSON} from "./Widget";
import {Group} from "./widgets/Group";

export class WidgetUtils {
    private static widgetMap: { [index: string]: typeof Widget } = {
        "STREAM": Stream,
        "SLIDER": Slider,
        "DOUBLE_SLIDER": DoubleSlider,
        "GROUP": Group,
        undefined: Group, // pipeline TODO: Remove
    };

    static fromJSON(json: WidgetJSON): Widget {
        let widgetMapElement = this.widgetMap[json.type];
        if (widgetMapElement === undefined) throw new Error("Unknown Widget Type!!");
        let targetWidget = Object.create(widgetMapElement.prototype) as Widget;
        return Object.assign(targetWidget, json, targetWidget.getJSONRules(json));
    }
}