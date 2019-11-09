import {CvPipeline} from "./CvPipeline";

export class CvConfig {

    public pipelines: Array<CvPipeline>;

    static fromJSON(json: CvConfigJSON | string): CvConfig {
        if (typeof json === 'string') {
            return JSON.parse(json, CvConfig.reviver);
        } else {
            let user = Object.create(CvConfig.prototype);
            return Object.assign(user, json, {
                pipelines: json.pipelines.map((value: any) => {
                    CvPipeline.fromJSON(value)
                }),
            });
        }
    }

    static reviver(key: string, value: any): any {
        return key === "" ? CvConfig.fromJSON(value) : value;
    }
}

class CvConfigJSON {
    pipelines: any;
}
