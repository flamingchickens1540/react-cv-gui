import * as React from "react";
import * as ReactDOM from "react-dom";
import './global.scss'

import {ConfigViewer} from "./components/ConfigViewer";

ReactDOM.render(
    <ConfigViewer/>,
    document.getElementById("example")
);
