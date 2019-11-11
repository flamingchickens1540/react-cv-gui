import {Stream} from "./widgets/Stream";
import {CvSlider} from "./widgets/CvSlider";
import {CvDoubleSlider} from "./widgets/CvDoubleSlider";
import {Widget, WidgetJSON} from "./Widget";
import {Group} from "./widgets/Group";

export class WidgetUtils {
    private static widgetMap: { [index: string]: typeof Widget } = {
        "STREAM": Stream,
        "SLIDER": CvSlider,
        "DOUBLE_SLIDER": CvDoubleSlider,
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