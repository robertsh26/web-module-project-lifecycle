import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <>
        <form id='todoForm' onSubmit={this.props.onTodoFormSubmit}>
          <input 
            value={this.props.todoNameInput} 
            onChange={this.props.onChangeNameInput} 
            type='text' 
            placeholder='Type todo'>
          </input>
          <input 
            type='submit'>
          </input>
        </form>
        <button 
          onClick={this.props.toggleDisplay}
        >
          {this.props.displayComplete ? 'Hide' : 'Show' } Completed
        </button>
      </>
    )
  }
}
