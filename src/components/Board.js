import React, { Component } from 'react'
import  {getColumns, getCards}  from "./services/InfoServices"
import Column from './Column';

class Board extends Component {
  constructor(){
    super()
    this.state = {
      columns: []
    }
  }

  componentDidMount = () => {
    getColumns()
      .then(response => this.setState({ columns: response }, () => console.log(this.state.columns)))
  }
  render() {
    return(
      <Column />
    )
  }
}

export default Board