import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    search: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(json => {
      this.setState({pokemon: json})
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onAddPokemon={this.addPokemon} />
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} search={this.state.search} />
      </div>
    )
  }

  addPokemon = (e) => {
    this.setState(prevState => {
      return {
        pokemon: [...prevState.pokemon, e]
      }
    })
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ search: value })
  }
}

export default PokemonPage
