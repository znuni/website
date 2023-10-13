import React from 'react'

import PropTypes from 'prop-types'

import './primary-button.css'

const PrimaryButton = (props) => {
  return (
    <div className={`primary-button-container ${props.rootClassName} `}>
      <button className="primary-button-button MediumLabel button">
        {props.button}
      </button>
    </div>
  )
}

PrimaryButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

PrimaryButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default PrimaryButton
