import {Widget} from "../Widget";
import * as React from "react";

export class Stream extends Widget {
    url: string;

    public renderComponent(handleChange: () => void) {
        return <div key={this.name}>
            <img
                src={this.url}
                alt={this.name}
            />
        </div>
    }
}
