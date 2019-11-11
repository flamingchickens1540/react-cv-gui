import {Widget, WidgetJSON} from "../Widget";
import * as React from "react";
import {WidgetUtils} from "../WidgetUtils";

function randomColor() {
    let rc = "#";
    for (let i = 0; i < 6; i++) {
        rc += Math.floor(Math.random() * 16).toString(16);
    }
    return rc;
}

export class Group extends Widget {
    widgets: Array<Widget>;

    public renderComponent(handleChange: () => void) {
        return <div key={this.name} style={{outline: "1px solid"}}>
            {this.widgets.map(component => component.renderComponent(handleChange))}
        </div>;
    }

    getJSONRules(json: object): {} {
        let groupJSON = json as GroupJSON;
        return {
            widgets: groupJSON.widgets.map((value: WidgetJSON) => WidgetUtils.fromJSON(value))
        };
    }
}

class GroupJSON extends WidgetJSON {
    widgets: Array<any>;
}

