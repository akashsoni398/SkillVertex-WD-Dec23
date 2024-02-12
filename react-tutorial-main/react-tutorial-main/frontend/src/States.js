import React from "react";

class States extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "John Doe",
            time: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.setTime = this.setTime.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleClick(event) {
        console.log(event);
        let newName = document.getElementById('name-input').value;
        this.setState( {
            name: newName
        })
    }

    handleKeyPress(event) {
        console.log(event.key);
    }

    setTime() {
        let timeFn = new Date();
        let hours = timeFn.getHours();
        let minutes = timeFn.getMinutes();
        let seconds = timeFn.getSeconds();
        let time = hours+':'+minutes+':'+seconds;
        this.setState({time: time})
    }

    componentDidMount() {
        setInterval(()=>this.setTime(),1000)
    }
    render() {
        return (
            <div>
                <h3>Hi! Im {this.state.name}.</h3>
                <input type="text" id="name-input" onKeyPress={this.handleKeyPress} />
                <button onClick={this.handleClick}>Update Name</button>
                <div>{this.state.time}</div>
            </div>
        )
    }
}

export default States;
