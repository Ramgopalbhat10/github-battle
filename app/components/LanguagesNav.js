import React from 'react';
import PropTypes from 'prop-types';

function LanguagesNav({selected, onUpdateLanguage}) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="flex-center">
      {languages.map(language => (
        <li key={language}>
          <button
            style={language === selected ? {color: 'rgb(187, 46, 31)'} : null} 
            onClick={() => onUpdateLanguage(language)} 
            className="btn-clear nav-link">
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
}

export default LanguagesNav;