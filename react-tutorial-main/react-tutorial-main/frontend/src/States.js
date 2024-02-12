import React from "react";

class States extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "John Doe"
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let newName = document.getElementById('name-input').value;
        this.setState( {
            name: newName
        })
    }
    render() {
        return (
            <div>
                <h3>Hi! Im {this.state.name}</h3>
                <input type="text" id="name-input" />
                <button onClick={this.handleClick}>Update Name</button>;
            </div>
        )
    }
}

export default States;
