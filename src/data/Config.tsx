import {Group} from "./widgets/Group";
import {WidgetUtils} from "./WidgetUtils";

export class Config {
    public pipelines: Array<Group>;
    public selectedPipelineIndex: number;

    static fromJSON(json: CvConfigJSON): Config {
        return Object.assign(Object.create(Config.prototype), json, {
            pipelines: json.pipelines.map((value: any) => WidgetUtils.fromJSON(value)),
        });
    }
}

class CvConfigJSON {
    pipelines: any;
}
