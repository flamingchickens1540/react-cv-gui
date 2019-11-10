import {Pipeline} from "./Pipeline";

export class Config {
    public pipelines: Array<Pipeline>;
    public selectedPipelineIndex: number;

    static fromJSON(json: CvConfigJSON): Config {
        return Object.assign(Object.create(Config.prototype), json, {
            pipelines: json.pipelines.map((value: any) => Pipeline.fromJSON(value)),
        });
    }
}

class CvConfigJSON {
    pipelines: any;
}
