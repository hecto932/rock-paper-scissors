import React, { Component } from "react";

import './styles/Home.scss'

import Title from '../components/Title'
import Options from '../components/Options'
import Results from '../components/Results'
import Timeline from '../components/Timeline'

import { cpuRandom, round } from '../utils/game'

class Home extends Component {
  state = {
    isLoading: false,
    me: 0,
    cpu: 0,
    rounds: []
  }

  handleCPU = async () => {
    const response = await fetch(`https://smartplay.afiniti.com/v1/play/`, { method: 'GET' })
    const data = await response.json()
    return data.nextBestMove.toLowerCase()
  }

  handleClick = async (option) => {
    this.setState({
      isLoading: true
    })
    const meOption = option
    const cpuOption = await this.handleCPU()
    const newState = {
      ...this.state
    }

    const game = round(meOption, cpuOption)

    game === 1 ? newState.me += 1 : game === -1 ? newState.cpu += 1 : 0
    newState.rounds.unshift({ me: meOption, cpu: cpuOption })
    newState.isLoading = false;

    this.setState(newState)
    this.handleCPU()
  }

  render() {
    return (
      <section className="home">
        <Title />
        <Options onHandleClick={this.handleClick} isLoading={this.state.isLoading} />
        <Results me={this.state.me} cpu={this.state.cpu} />
        <Timeline rounds={this.state.rounds} />
      </section>
    );
  }
}

export default Home;
