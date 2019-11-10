import {WidgetData} from "./WidgetData";
import {WidgetUtils} from "./WidgetUtils";

export class Pipeline {
    name: string;
    widgets: Array<WidgetData>;

    static fromJSON(json: PipelineJSON | string): Pipeline {
        if (typeof json === 'string') {
            return JSON.parse(json, Pipeline.reviver);
        } else {
            return Object.assign(Object.create(Pipeline.prototype), json, {
                widgets: json.widgets.map((value: any) =>
                    WidgetUtils.fromJSON(value)
                ),
            });
        }
    }

    static reviver(key: string, value: any): any {
        return key === "" ? Pipeline.fromJSON(value) : value;
    }
}

class PipelineJSON {
    name: string;
    widgets: Array<any>;
}
