import React from 'react';
import { ThemeConsumer } from '../contexts/Theme';
import { NavLink } from 'react-router-dom';

const styles = {
  structure: {
    width: '30px',
    height: '30px',
    borderRadius: '50%'
  },
  dark: {
    backgroundColor: 'rgb(36, 40, 42)'
  },
  light: {
    backgroundColor: '#aaa8a8'
  },
  active: {
    color: 'rgb(187, 46, 31)'
  }
}

function Navbar() {
  return(
    <ThemeConsumer >
      {({ theme, toggleTheme }) => (
        <nav className='row space-between'>
          <ul className='row nav'>
            <li>
              <NavLink exact activeStyle={styles.active} to='/' className='nav-link'>Popular</NavLink>
            </li>
            <li>
            <NavLink activeStyle={styles.active} to='/battle' className='nav-link'>Battle</NavLink>
            </li>
          </ul>

          <button
            style={{fontSize:30}}
            className='btn-clear'
            onClick={toggleTheme}
          >
            {theme === 'light' 
              ? <div style={{...styles.structure, ...styles.dark}}></div>
              : <div style={{...styles.structure, ...styles.light}}></div>
            }
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}

export default Navbar;