import React from 'react'

import PropTypes from 'prop-types'

import './primary-button.css'

const PrimaryButton = (props) => {
  return (
    <div className={`primary-button-container ${props.rootClassName} `}>
      <button className="primary-button-button MediumLabel button" onclick="location.href='https:/\/forms.gle/R26usGi1E1jB9C4k9';">
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
