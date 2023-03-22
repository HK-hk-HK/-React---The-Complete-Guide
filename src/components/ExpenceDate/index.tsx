import React from 'react'

import { ExpenseItemDate, Month, Year, Day } from './styles'

interface DateProps {
  date: Date
}

function ExpenseDate({ date }: DateProps) {
  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.toLocaleString('en-US', { day: '2-digit' })
  const year = date.getFullYear()

  return (
    <ExpenseItemDate>
      <Month>{month}</Month>
      <Year>{year}</Year>
      <Day>{day}</Day>
    </ExpenseItemDate>
  )
}

export default ExpenseDate
