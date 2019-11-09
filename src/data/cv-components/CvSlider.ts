import {CvComponent, CvComponentJSON} from "../CvComponent";

export class CvSlider extends CvComponent {
    value: number;

    static fromJSON(json: CvComponentJSON | string): CvSlider {
        if (typeof json === 'string') {
            return JSON.parse(json, CvSlider.reviver);
        } else {
            let user = Object.create(CvSlider.prototype);
            return Object.assign(user, json, {});
        }
    }

    static reviver(key: string, value: any): any {
        return key === "" ? CvSlider.fromJSON(value) : value;
    }
}


class CvSliderJSON {
    value: number;
}
