import * as React from "react";

export abstract class Widget {
    type: string;
    name: string;

    public abstract renderComponent(handleChange: () => void): JSX.Element;
}

export abstract class WidgetJSON {
    type: string;
    name: string;
}