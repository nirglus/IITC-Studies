import ExpenseItem from "../components/ExpenseItem";
import { useState } from "react";

function Expenses(){

    const [expenses, setExpenses] = useState([]);
    const [expense, setExpense] = useState({});

    const changeHandler = (e) =>{
        expense[e.target.name] = e.target.value;
        setExpense({...expense});
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        setExpenses([...expenses, {...expense}]);
    }

    return (
        <>
        <h1>Budget Tracker</h1>
        <form onSubmit={submitHandler}>
            <input onChange={changeHandler} type="text" name="title"/>
            <select onChange={changeHandler} name="category">
                <option value="House">House</option>
                <option value="Car">Car</option>
                <option value="Food">Food</option>
                <option value="Clothes">Clothes</option>
            </select>
            <input onChange={changeHandler} type="number" name="amount"/>
            <select onChange={changeHandler} name="type">
                <option value="Income">Income</option>
                <option value="Outcome">Outcome</option>
            </select>
            <button type="submit">Add +</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((item, index) =>{
                return <ExpenseItem item={item} key={index} />
            })}
          </tbody>
          </table>
        </>
    )
}

export default Expenses;