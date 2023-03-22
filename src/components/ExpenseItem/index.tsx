import React, { useState } from 'react'

import { IExpense } from '../models'

import ExpenseDate from '../ExpenceDate'

import {
  ExpenseItemDescription,
  ExpenseItemHeading,
  ExpenseItemPrice,
  ChangeTitleButton,
} from './styles'

import { Container } from './styles'

interface ExpenseProps {
  expense: IExpense
}

function ExpenseItem({ expense }: ExpenseProps) {
  const [title, setTitle] = useState(expense.title)
  console.log('ExpenceItem evaluated by React')

  const clickHandler = () => {
    setTitle('Updated!')
    console.log(title)
  }

  return (
    <Container>
      <ExpenseDate date={expense.date} />
      <ExpenseItemDescription>
        <ExpenseItemHeading>{title}</ExpenseItemHeading>
        <ExpenseItemPrice>${expense.amount}</ExpenseItemPrice>
      </ExpenseItemDescription>
      <ChangeTitleButton onClick={clickHandler}>Change title</ChangeTitleButton>
    </Container>
  )
}

export default ExpenseItem
