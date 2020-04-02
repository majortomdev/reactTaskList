import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TaskItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.task.done? 'line-through': 'none'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.task.title}</p>
            </div>
        )
    }
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired
}

export default TaskItem
