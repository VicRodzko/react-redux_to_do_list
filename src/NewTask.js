import React from 'react';
import { connect } from 'react-redux';

import { deleteTask, activeTask } from './actions';
import './NewTask.css';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        answer: 'all'
    }

    this.inputData  = this.inputData.bind(this);
  }

  inputData(e) {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
        <div className='containerTasks'>
        
            {this.props.task_to_component.filter((task) => {
                if (this.state.answer == 'all') {
                    return task;
                } else if (this.state.answer == 'active') {
                    return task.active == false;
                } else return task.active == true;  
            }).map(task => {                    
                return (
                <div className='oneNewTask' key={task.id} onClick={ () => {this.props.activeTask(task.id)}}>
                    <p>{task.active == false ? task.title : <s>{task.title}</s>}</p>  
                    <div className='del' onClick={ () => {this.props.deleteTask(task.id)} }><p id='taskDel' ></p></div>       
                    <div className='act'>{ task.active ? <p id='actTask' ></p> : <p id='notActTask' ></p> }</div>
                </div>)
            })}
            
            <div>
                <div className="cntForBtn">
                    <input id="all" type='radio' name='answer' value='all' onChange={this.inputData} checked={this.state.answer == 'all'} />
                    <label htmlFor="all">Все</label>
                    <input id="active" type='radio' name='answer' value='active' onChange={this.inputData} checked={this.state.answer == 'active'} />
                    <label htmlFor="active">Активные</label>
                    <input id="notActive" type='radio' name='answer' value='notActive' onChange={this.inputData} checked={this.state.answer == 'notActive'} />
                    <label htmlFor="notActive">Завершенные</label>
                </div>
            </div> 
            
        </div>
        );
  }
}

function mapStateToProps(state) {
    return {
        task_to_component: state.task
    }
  }

export default connect(mapStateToProps, { deleteTask, activeTask })(NewTask);