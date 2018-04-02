import React from 'react';
import { Progress } from 'reactstrap';
import './progress.css'

class Percent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: ""
        }
    }
    checkPerSent() {
        if (this.props.SendPercent <= 25) {
            this.setState({ color: "success" })
        }
        else if (this.props.SendPercent <= 50) {
            this.setState({ color: "info" })
        }
        else if (this.props.SendPercent <= 75) {
            this.setState({ color: "warning" })
        }
        else if (this.props.SendPercent <= 99) {
            this.setState({ color: "danger" })
        }
    }
    render() {
        return (
            <div>
                <Progress animated color={this.state.color} value={this.props.SendPercent}>{this.props.SendPercent} %</Progress>
                {/* <Progress animated color="success" value="25" />
                <Progress animated color="info" value={50} />
                <Progress animated color="warning" value={75} />
                <Progress animated color="danger" value="100" /> */}
                {/* <Progress multi>
            <Progress animated bar value="10" />
            <Progress animated bar color="success" value="30" />
            <Progress animated bar color="warning" value="20" />
            <Progress animated bar color="danger" value="20" />
          </Progress> */}
            </div>
        );
    };
}


export default Percent;