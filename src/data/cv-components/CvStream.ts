import {CvComponent} from "../CvComponent";

export class CvStream extends CvComponent {
    url: string;

    static fromJSON(json: CvStreamJSON | string): CvStream {
        if (typeof json === 'string') {
            return JSON.parse(json, CvStream.reviver);
        } else {
            let user = Object.create(CvStream.prototype);
            return Object.assign(user, json, {});
        }
    }

    static reviver(key: string, value: any): any {
        return key === "" ? CvStream.fromJSON(value) : value;
    }
}

class CvStreamJSON {
    url: string;
}
