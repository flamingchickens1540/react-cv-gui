import {CvComponent} from "./CvComponent";

export class CvPipeline {
    name: string;
    components: Array<CvComponent>;

    static fromJSON(json: PipelineJSON | string): CvPipeline {
        if (typeof json === 'string') {
            return JSON.parse(json, CvPipeline.reviver);
        } else {
            let user = Object.create(CvPipeline.prototype);
            return Object.assign(user, json, {
                pipelines: json.components.map((value: any) => {
                    CvComponent.fromJSON(value)
                }),
            });
        }
    }

    static reviver(key: string, value: any): any {
        return key === "" ? CvPipeline.fromJSON(value) : value;
    }
}

class PipelineJSON {
    name: string;
    components: Array<CvComponent>;
}
