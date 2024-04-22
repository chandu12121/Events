// Write your code here
const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {ActiveEventRegistrationStatus} = props

  const renderNoActiveEvents = () => (
    <p>Click on an event, to view its registration details</p>
  )

  const renderRegistrationsClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const renderRegistrationView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderYetToRegistrationView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beatiful
        art form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (ActiveEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegistrationView()
      case registrationStatus.registered:
        return renderRegistrationView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosed()
      default:
        return renderNoActiveEvents()
    }
  }

  return <div>{renderActiveEventRegistrationDetails()}</div>
}

export default ActiveEventRegistrationDetails
