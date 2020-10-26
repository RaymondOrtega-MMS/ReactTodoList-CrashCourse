import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    getStyle = () => {
        console.log(this.props.todo.completed)
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

  render() {
    const {id, title} = this.props.todo;
    return (
      <div style = { this.getStyle() }>
          <input type = 'checkbox' onChange={ this.props.markComplete.bind
            (this, id) } />
            { title }
            <button onClick={this.props.delTodo.bind(this, id)}style={ btnStyle }>x</button>
      </div>
    );
  }
}
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodos: PropTypes.func.isRequired,
}
const btnStyle = {
    backgroundColor: '#ff0000',
    color: 'white',
    boder: 'none',
    padding: '5px 9px',
    borderRadius: '50%' ,
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
