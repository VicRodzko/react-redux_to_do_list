import React from 'react';
import { connect } from 'react-redux';

import { addTask } from './actions';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      title: ''
    }

    this.inputData  = this.inputData.bind(this); 
    this.addTask    = this.addTask.bind(this); 
  }

  inputData(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addTask(e) {
    e.preventDefault();
 
    let new_task = {
      title: this.state.title
    }

    this.props.addTask(new_task);

    this.resetForm();
  }

  resetForm() {
    this.setState({
      title: '',
      content: ''
    });
  }

  render() {
    return (
      <form className='mainInput' onSubmit={this.addTask}>
        <input value={this.state.title} name="title" className="form-control" placeholder="Что нужно сделать?" onChange={this.inputData} />
      </form>
    );
  }
}

export default connect(null, { addTask })(Form);