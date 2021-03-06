import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../contexts/Theme'

class PlayerInput extends React.Component {
  state = {
    username: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  
  render() {
    return (
      <ThemeConsumer >
        {({ theme }) => (
          <form className='column player' onSubmit={this.handleSubmit}>
            <label htmlFor='username' className='player-label'>
              {this.props.label}
            </label>
            <div className='row player-inputs'>
              <input 
                type='text' 
                id='username' 
                className={`input-${theme}`} 
                placeholder='github username' 
                autoComplete='off'
                onChange={this.handleChange}
              />
              <button 
                type='submit' 
                className={`btn ${theme === 'light' ? 'dark-btn' : 'light-btn'}`}
                disabled={!this.state.username}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </ThemeConsumer>
    );
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default PlayerInput;