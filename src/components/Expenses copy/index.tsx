import React from 'react'

import ExpenceItem from '../ExpenseItem'
import { Container } from './styles'
import { expenses } from '../../data/expenses'

function Expenses() {
  return (
    <Container>
      <ExpenceItem expense={expenses[0]} />
      <ExpenceItem expense={expenses[1]} />
      <ExpenceItem expense={expenses[2]} />
      <ExpenceItem expense={expenses[3]} />
    </Container>
  )
}

export default Expenses
