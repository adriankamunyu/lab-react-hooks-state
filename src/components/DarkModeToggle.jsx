import React from 'react'

const DarkModeToggle = ({ darkMode, onToggle }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={onToggle}>{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
  )
}

export default DarkModeToggle
