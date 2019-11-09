import * as React from "react";
import * as ReactDOM from "react-dom";
import './global.scss'

import {PipelineRenderer} from "./components/PipelineRenderer";

ReactDOM.render(
    <PipelineRenderer pipelineJSON={`
    {
    "woaaaaw":3,
    "woaaaw":3,
    "woaaw":3,
    "woaw":3,
    "wow":3
    }
    `}/>,
    document.getElementById("example")
);
