import '../assets/css/App.css'
import React from 'react'

class ToDo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks1: [],
      tasks2: [],
      tasks3: [],
      addTaskOne: false,
      addTaskTwo: false,
      addTaskThree: false
    }
  }

  addTask (num) {
    switch (num) {
      case 1: this.setState({ addTaskOne: true }); break
      case 2: this.setState({ addTaskTwo: true }); break
      case 3: this.setState({ addTaskThree: true }); break
    }
  }

  cancelTaskInput (num) {
    switch (num) {
      case 1: this.setState({ addTaskOne: false }); break
      case 2: this.setState({ addTaskTwo: false }); break
      case 3: this.setState({ addTaskThree: false }); break
    }
  }

  confirmTask (num, e) {
    if (e.key === 'Enter' || e.type === 'click') {
      switch (num) {
        case 1: this.setState(privEl => ({
          tasks1: [...privEl.tasks1, document.getElementById('input1').value],
          addTaskOne: false
        })); break
        case 2: this.setState(privEl => ({
          tasks2: [...privEl.tasks2, document.getElementById('input2').value],
          addTaskTwo: false
        })); break
        case 3: this.setState(privEl => ({
          tasks3: [...privEl.tasks3, document.getElementById('input3').value],
          addTaskThree: false
        })); break
      }
    }
  }

  removeTask (num, e) {
    const temp1 = [...this.state.tasks1]
    const temp2 = [...this.state.tasks2]
    const temp3 = [...this.state.tasks3]
    let promise = null
    switch (num) {
      case 1: temp1.splice(e.target.id, 1); promise = new Promise(resolve => { resolve(this.setState({ tasks1: temp1 })) }); promise.then(() => console.log(this.state.tasks1)); break
      case 2: temp2.splice(e.target.id, 1); promise = new Promise(resolve => { resolve(this.setState({ tasks2: temp2 })) }); promise.then(() => console.log(this.state.tasks2)); break
      case 3: temp3.splice(e.target.id, 1); promise = new Promise(resolve => { resolve(this.setState({ tasks3: temp3 })) }); promise.then(() => console.log(this.state.tasks3)); break
    }
  }

  render () {
    console.log(this.state.tasks)
    return (
      <div className='TitleDivTasks'>
        <button className='FirstTaskButton' onClick={this.addTask.bind(this, 1)}>Most Important Tasks of the Day</button>
        <br />
        {this.state.addTaskOne &&
          <div>
            <input className='input' id='input1' type='text' autoFocus onKeyDown={this.confirmTask.bind(this, 1)} />
            <button className='smallbuttons' id='addButton' onClick={this.confirmTask.bind(this, 1)} />
            <button onClick={this.cancelTaskInput.bind(this, 1)}>x</button>

          </div>}
        {this.state.tasks1.map((task, index) => {
          return <div className='displayTask' id={'displaytask' + index} key={index}><button id={index} onClick={this.removeTask.bind(this, 1)}>x</button>{(index + 1) + '.  ' + task}</div>
        }
        )}
        <button className='SecondTaskButton' onClick={this.addTask.bind(this, 2)}>Secondary Tasks of the Day</button>
        <br />
        {this.state.addTaskTwo &&
          <div>
            <input className='input' id='input2' type='text' autoFocus />
            <button className='smallbuttons' id='addButton' onClick={this.confirmTask.bind(this, 2)} />
            <button onClick={this.cancelTaskInput.bind(this, 2)}>x</button>
          </div>}
        {this.state.tasks2.map((task, index) => {
          return <div className='displayTask' id={'displaytask' + index} key={index}><button id={index} onClick={this.removeTask.bind(this, 2)}>x</button>{(index + 1) + '.  ' + task}</div>
        }
        )}
        <button className='ThirdTaskButton' onClick={this.addTask.bind(this, 3)}>Other Tasks of the Day</button>
        <br />
        {this.state.addTaskThree &&
          <div>
            <input className='input' id='input3' type='text' autoFocus />
            <button className='smallbuttons' id='addButton' onClick={this.confirmTask.bind(this, 3)} />
            <button onClick={this.cancelTaskInput.bind(this, 3)}>x</button>
          </div>}
        {this.state.tasks3.map((task, index) => {
          return <div className='displayTask' id={'displaytask' + index} key={index}><button id={index} onClick={this.removeTask.bind(this, 3)}>x</button>{(index + 1) + '.  ' + task}</div>
        }
        )}
      </div>
    )
  }
}

export default ToDo
