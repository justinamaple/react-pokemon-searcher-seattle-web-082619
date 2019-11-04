import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render () {
    return (
      <Card.Group itemsPerRow={6}>
        { this.createPokemonCards() }
      </Card.Group>
    )
  }

  createPokemonCards = () => {
    return this.props.pokemon.map((pokemon, index) => {
      if(pokemon.name.includes(this.props.search))
        return <PokemonCard key={index} pokemon={pokemon} />
    })
  }
}

export default PokemonCollection
