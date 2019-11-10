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
    };

    static fromJSON(json: WidgetJSON): Widget {
        let targetWidget = Object.create(this.widgetMap[json.type].prototype) as Widget;
        return Object.assign(targetWidget, json, targetWidget.getJSONRules(json));
    }
}