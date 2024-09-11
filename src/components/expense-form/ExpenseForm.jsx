import React, { useState } from 'react'
import "./ExpenseForm.css"
import Button from '../UI/Button'
import Input from '../UI/Input'

const ExpenseForm = (props) => {

  const [title , setTitle] = useState("")
  const [price , setPrice] = useState("")
  const [date , setDate] = useState("")

  const onSubmitHandler = (e) => {
    e.preventDefault()
  }

  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  }

  const priceChangeHandler = (e) => {
    setPrice(e.target.value)
  }

  const dateChangeHandler = e => {
    setDate(e.target.value)
  }

 

  const onSaveExpenses = () => {
    const expenses = {
      title,
      price,
      date,
      id: Math.random().toString()
    }

    props.data(expenses)

    setTitle("")
    setPrice("")
    setDate("")
    // console.log(expenses);
  
  }

  

  return (
    <form onSubmit={onSubmitHandler} >
        <Input onChange={titleChangeHandler} value={title} type="text" placeholder="title"/>
        <Input onChange={priceChangeHandler} value={price} type="number" placeholder="price"/>
        <Input onChange={dateChangeHandler} value={date} type="date" />
        <div>
          <Button onClick={onSaveExpenses} >ADD</Button>
          <Button onClick={props.close} >CANCEL</Button>
        </div>
    </form>
  )
}

export default ExpenseForm
