import {WidgetData, WidgetJSON} from "../WidgetData";

export class StreamData extends WidgetData {
    url: string;

    static fromJSON(json: StreamJSON | string): StreamData {
        if (typeof json === 'string') {
            return JSON.parse(json, StreamData.reviver);
        } else {
            return Object.assign(Object.create(StreamData.prototype), json, {});
        }
    }

    static reviver(key: string, value: any): any {
        return key === "" ? StreamData.fromJSON(value) : value;
    }
}

class StreamJSON extends WidgetJSON {
    url: string;
}
