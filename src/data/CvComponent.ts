import {CvStream} from "./cv-components/CvStream";
import {CvSlider} from "./cv-components/CvSlider";
import {CvDoubleSlider} from "./cv-components/CvDoubleSlider";

export enum ComponentTypes {
    STREAM = "STREAM",
    SLIDER = "SLIDER",
    DOUBLE_SLIDER = "DOUBLE_SLIDER"
}

export abstract class CvComponent {
    type: ComponentTypes;
    key: string;

    static fromJSON(json: any | string): CvComponent {
        if (typeof json === 'string') {
            return JSON.parse(json, CvComponent.reviver);
        } else {
            switch (json.type) {
                case ComponentTypes.STREAM:
                    // @ts-ignore
                    return CvStream.fromJSON(json);
                case ComponentTypes.SLIDER:
                    // @ts-ignore
                    return CvSlider.fromJSON(json);
                case ComponentTypes.DOUBLE_SLIDER:
                    // @ts-ignore
                    return CvDoubleSlider.fromJSON(json);
            }
        }
        throw new Error("Invalid component type!")
    }

    static reviver(key: string, value: any): any {
        return key === "" ? CvComponent.fromJSON(value) : value;
    }
}

export class CvComponentJSON {
    type: string;
    key: string;
}
