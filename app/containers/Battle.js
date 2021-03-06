import React from 'react';
import Instructions from '../components/Instructions';
import PlayerInput from '../containers/PlayerInput';
import PlayerPreview from '../components/PlayerPreview';
import { Link } from 'react-router-dom';

class Battle extends React.Component {
  state = {
    playerOne: null,
    playerTwo: null
  }

  handleSubmit = (id, player) => {
    this.setState({
      [id]: player
    })
  }

  handleReset = (id) => {
    this.setState({
      [id]: null
    })
  }

  render() {
    const { playerOne, playerTwo } = this.state;

    return(
      <>
        <Instructions />
        <div className='players-container'>
          <h1 className='center-text header-lg'>Players</h1>
          <div className='row space-around'>
            {playerOne === null 
              ? <PlayerInput 
                  label='Player One' 
                  onSubmit={(player) => this.handleSubmit('playerOne', player)}
                />
              : <PlayerPreview 
                  username={playerOne} 
                  label='Player One' 
                  onReset={() => this.handleReset('playerOne')}
                />
            }

            {playerTwo === null 
              ? <PlayerInput 
                  label='Player Two' 
                  onSubmit={(player) => this.handleSubmit('playerTwo', player)}
                />
              : <PlayerPreview 
                  username={playerTwo} 
                  label='Player Two' 
                  onReset={() => this.handleReset('playerTwo')}
                />
            }
          </div>
          {playerOne && playerTwo && (
              <Link 
                className='btn dark-btn btn-space'
                to={{
                  pathname: '/battle/results',
                  search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
                }}
              >
                Battle
              </Link>
            )}
        </div>
      </>
    );
  }
}

export default Battle;