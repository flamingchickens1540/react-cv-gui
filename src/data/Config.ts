import {Pipeline} from "./Pipeline";

export class Config {
    public pipelines: Array<Pipeline>;
    public selectedPipelineIndex: number;

    static fromJSON(json: CvConfigJSON | string): Config {
        if (typeof json === 'string') {
            return JSON.parse(json, Config.reviver);
        } else {
            return Object.assign(Object.create(Config.prototype), json, {
                pipelines: json.pipelines.map((value: any) => Pipeline.fromJSON(value)),
            });
        }
    }

    static reviver(key: string, value: any): any {
        return key === "" ? Config.fromJSON(value) : value;
    }
}

class CvConfigJSON {
    pipelines: any;
}
