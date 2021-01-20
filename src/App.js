import React, {Component} from 'react'
import TodoCard from './TodoCard'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isClicked: true,
      inputValue: "",
      listOfTodos: []
    }


    
  }

  handleClick = () => {
    this.state.isClicked ? 
    this.setState({isClicked: false}) : 
    this.setState({isClicked: false})
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({listOfTodos: [...this.state.listOfTodos, this.state.inputValue]})
    this.setState({inputValue: ""})
  }

  deleteTodo = (index) => {
    let copyOfList = this.state.listOfTodos
    copyOfList.splice(index, 1)
    this.setState({listOfTodos: [...copyOfList]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
            <button type="submit">Submit</button>
          </form>
          <ol>{this.state.listOfTodos.map((todo, index) => {
            return  <TodoCard key={index} index={index} title={todo} clickToRemove={this.deleteTodo}/>
          })}</ol>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.name}
          </a>
        </header>
      </div>
    );
  }


  
}

export default App;
