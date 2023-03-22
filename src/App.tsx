import React from 'react'
import { Container } from './AppStyles'
import Expenses from './components/Expenses'

const App = function () {
  return (
    <Container>
      <h2>Let's get started!</h2>
      <Expenses />
    </Container>
  )
}
export default App
