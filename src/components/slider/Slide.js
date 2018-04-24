import React from 'react'

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }

  return <div className="slide" style={styles} />
}

export default Slide
