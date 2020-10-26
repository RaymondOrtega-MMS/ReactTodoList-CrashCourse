import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class AddTodo extends Component {
    state = {
        title: ''
      }
      onChange = (e) => this.setState({ title: e.target.value });
      onSubmit = (e) => {
          e.preventDefault();
          this.props.addTodo(this.state.title);
          this.setState({title: ''});
      }
    render() {
        return (
            <form onSubmit= { this.onSubmit } style={{display:'flex'}}>
                <input 
                type='text'
                name='title'
                style = {{ flex:   '10', paddin: '5px' }}
                placeholder='add Todo!'
                value = {this.state.title}
                onChange= {this.onChange}
                />
                <input 
                type = 'submit'
                value = 'submit'
                className = 'btn'
                style = {{ flex: '1' }}
                />
            </form>
        )
    }
}
//PropTypes
AddTodo.propTypes = {
    AddTodo: PropTypes.func.isRequired
}
export default AddTodo
