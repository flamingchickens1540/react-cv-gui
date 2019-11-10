import {Widget, WidgetJSON} from "./Widget";
import {WidgetUtils} from "./WidgetUtils";

export class Pipeline {
    name: string;
    widgets: Array<Widget>;

    static fromJSON(json: PipelineJSON): Pipeline {
        return Object.assign(Object.create(Pipeline.prototype), json, {
            widgets: json.widgets.map((value: WidgetJSON) =>
                WidgetUtils.fromJSON(value)
            ),
        });
    }
}

class PipelineJSON {
    name: string;
    widgets: Array<any>;
}
