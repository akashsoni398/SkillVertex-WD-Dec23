import React from "react";

class Header extends React.Component {

    render () {
        return (
            <div>
                {this.props.comment}
            </div>
        )
    }
}


export default Header;
