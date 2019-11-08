import * as React from "react";
import * as ReactDOM from "react-dom";
import './global.scss'

import {Pipeline} from "./components/Pipeline";

ReactDOM.render(
    <Pipeline  pipelineJSON={'{"wow":3}'}/>,
    document.getElementById("example")
);