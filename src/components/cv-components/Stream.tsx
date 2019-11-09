import * as React from "react";

export interface NumberInputProps {
    url: string
}

export class Stream extends React.Component<NumberInputProps, {}> {
    render() {
        return <img src={this.props.url}/>
    }
}
