import {Stream} from "./widgets/Stream";
import {Slider} from "./widgets/Slider";
import {DoubleSlider} from "./widgets/DoubleSlider";
import {Widget, WidgetJSON} from "./Widget";

export class WidgetUtils {
    private static widgetMap: { [index: string]: typeof Widget } = {
        "STREAM": Stream,
        "SLIDER": Slider,
        "DOUBLE_SLIDER": DoubleSlider,
    };

    static fromJSON(json: WidgetJSON): Widget {
        return Object.assign(Object.create(this.widgetMap[json.type].prototype), json, {});
    }
}