import React from 'react';
import { ThemeConsumer } from '../contexts/Theme';

function NotFound() {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`container bg-${theme}`}>
          <h1 className='center-text'>
            404, Not Found <span className='sad'>:(</span>
          </h1>
        </div>
      )}
    </ThemeConsumer>
  )
}

export default NotFound;