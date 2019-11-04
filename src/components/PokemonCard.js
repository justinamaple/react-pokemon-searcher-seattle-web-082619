import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true
  }

  render () {
    return (
      <Card onClick={this.flipCard}>
        <div>
          <div className="image">
            { <img src={this.getCardImg()} alt="oh no!" /> }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name} </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }

  flipCard = () => {
    this.setState(prevState => {
      return { front: !prevState.front }
    })
  }

  getCardImg = () => {
    return this.state.front ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back;
  }
}

export default PokemonCard
