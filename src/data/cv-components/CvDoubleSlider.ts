import {CvComponent, CvComponentJSON} from "../CvComponent";

export class CvDoubleSlider extends CvComponent {
    lowerValue: number;
    upperValue: number;

    static fromJSON(json: CvDoubleSliderJSON | string): CvDoubleSlider {
        if (typeof json === 'string') {
            return JSON.parse(json, CvDoubleSlider.reviver);
        } else {
            let user = Object.create(CvDoubleSlider.prototype);
            return Object.assign(user, json, {});
        }
    }

    static reviver(key: string, value: any): any {
        return key === "" ? CvDoubleSlider.fromJSON(value) : value;
    }
}

class CvDoubleSliderJSON extends CvComponentJSON {
    lowerValue: number;
    upperValue: number;
}
