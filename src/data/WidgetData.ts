export enum WidgetType {
    STREAM = "STREAM",
    SLIDER = "SLIDER",
    DOUBLE_SLIDER = "DOUBLE_SLIDER"
}

export abstract class WidgetData {
    type: WidgetType;
    name: string;
}

export abstract class WidgetJSON {
    type: string;
    name: string;
}

