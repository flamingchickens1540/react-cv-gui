import * as React from "react";

export abstract class Widget {
    type: string;
    name: string;

    public abstract renderComponent(handleChange: () => void): React.ReactElement;

    public getJSONRules(json: object) {
        return {};
    }
}

export abstract class WidgetJSON {
    type: string;
    name: string;
}