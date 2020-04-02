import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TaskItem extends Component {
    getStyle = () => {
        if(this.props.task.done){
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
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
