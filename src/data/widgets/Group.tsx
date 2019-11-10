import {Widget, WidgetJSON} from "../Widget";
import * as React from "react";
import {WidgetUtils} from "../WidgetUtils";

export class Group extends Widget {
    widgets: Array<Widget>;

    public renderComponent(handleChange: () => void) {
        return <div key={this.name} style={{background: "blue"}}>
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

