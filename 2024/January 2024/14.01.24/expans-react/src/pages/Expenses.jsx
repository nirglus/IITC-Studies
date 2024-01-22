import ExpenseItem from "../components/ExpenseItem";
import { useState, useEffect } from "react";
import { db } from "../config/firebaseConfig";
import { addDoc, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";

function Expenses(props){

    const [expenses, setExpenses] = useState([{title: "Loading...."}]);
    const [expense, setExpense] = useState({});

    const changeHandler = (e) =>{
        expense[e.target.name] = e.target.value;
        setExpense({...expense});
    }

    const submitHandler = async (e) =>{
        e.preventDefault();
        try {
          await addDoc(collection(db, "expanses"), expense);
        } catch (error) {
          console.error("Error adding document: ", error);
        }

    }
    const handleDelete = async (itemId) => {
      try {
        await deleteDoc(doc(db, "expanses", itemId))
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    };

    useEffect(() => {
      const unsubscribe = onSnapshot(collection(db, "expanses"), (snapshot) => {
        setExpenses(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    
      return () => unsubscribe();
    }, []);

    return (
        <>{!props.user ? (
          <h1>User is not connected</h1>
        ) : ( 
        <div>
        <h1>Budget Tracker</h1>
        <form onSubmit={submitHandler}>
            <input onChange={changeHandler} type="text" name="title"/>
            <select onChange={changeHandler} name="category">
                <option value="" selected disabled>Category</option>
                <option value="House">House</option>
                <option value="Car">Car</option>
                <option value="Food">Food</option>
                <option value="Clothes">Clothes</option>
            </select>
            <input onChange={changeHandler} type="number" name="amount"/>
            <select onChange={changeHandler} name="type">
                <option value="" selected disabled>Type</option>
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
                return <ExpenseItem item={item} key={index} onDelete={() => handleDelete(item.id)}/>
            })}
          </tbody>
          </table>

        </div>

        )}
        </>
    )
}

export default Expenses;