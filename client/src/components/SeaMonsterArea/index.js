import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API"

class SeaMonsterArea extends Component {
  state = {
    monsters: []
  }

  componentWillMount() {
    this.getMonsters();
  }

  getMonsters() {
    API.getAll()
      .then(res => this.setState({ monsters: res.data }))
      .catch(err => console.log(err))
  }
  

  render() {
    console.log(this.state.monsters)
    return (
      <div className="container">
        {this.state.monsters.map(monster => (
          <h2 key={monster._id}>{monster.name}</h2>
        ))}
      </div>
    )
  }
}

export default SeaMonsterArea;