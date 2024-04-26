import React from 'react'

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();

  return (
    <div>
      <footer>copyright@{year}</footer>
    </div>
  )
}

export default Footer
