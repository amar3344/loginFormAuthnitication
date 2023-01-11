import {useState} from 'react'

import './index.css'

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [firstError, setFirstError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [displaySuccess, setDisplaySuccess] = useState(false)

  const getValidLastName = () => {
    const isValidLastName = lastName === undefined
    if (isValidLastName) {
      setLastNameError(true)
    }
  }

  const getValidFirstName = () => {
    const isValidFirstName = firstName === undefined

    if (isValidFirstName) {
      setFirstError(true)
    }
  }

  const submitForm = e => {
    e.preventDefault()
    const isValidFirstName = firstName !== undefined
    const isValidLastName = lastName !== undefined

    if (isValidFirstName && isValidLastName) {
      setFirstName('')
      setLastName('')
      setDisplaySuccess(true)
    } else {
      setFirstError(!isValidFirstName)
      setLastNameError(!isValidLastName)
      setDisplaySuccess(false)
    }
  }

  const gettingFirstName = e => {
    setFirstName(e.target.value)
  }

  const gettingLastName = e => {
    setLastName(e.target.value)
  }

  const getBackToReForm = () => {
    setDisplaySuccess(!displaySuccess)
    setFirstError(false)
    setLastNameError(false)
  }

  const displaySuccessForm = () => (
    <div className="form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p style={{'text-align': 'center'}}>Submitted Successfully</p>
      <button type="button" onClick={getBackToReForm}>
        Submit another Form
      </button>
    </div>
  )

  const displayOnRegistrationForm = () => (
    <>
      <h1>Registration</h1>
      <form className="form-container" onSubmit={submitForm}>
        <div className="input-container">
          <label htmlFor="firstName">FIRST NAME</label>
          <input
            type="text"
            id="firstName"
            placeholder="FIRST NAME"
            onChange={gettingFirstName}
            onBlur={getValidFirstName}
            value={firstName}
          />
          {firstError && <p className="error-message">Required</p>}
        </div>
        <div className="input-container">
          <label htmlFor="lastName">LAST NAME</label>
          <input
            type="text"
            id="lastName"
            placeholder="LAST NAME"
            onChange={gettingLastName}
            onBlur={getValidLastName}
            value={lastName}
          />
          {lastNameError && <p className="error-message">Required</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )

  return (
    <div className="react-app">
      <div className="registration-form">
        {displaySuccess ? displaySuccessForm() : displayOnRegistrationForm()}
      </div>
    </div>
  )
}

export default RegistrationForm
