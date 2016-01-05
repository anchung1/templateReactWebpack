import React from "react";

export default React.createClass({
    render: function() {
        return (
            <div className="greeting">
            Hello12, {this.props.name}!
        </div>
        );
    },
});