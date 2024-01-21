function ExpenseItem(props){
    const handleDelete = () =>{
        props.onDelete(props.item);
    }
    return(
        <tr>
            <td>{props.item.title}</td>
            <td>{props.item.category}</td>
            <td>${props.item.amount}</td>
            <td>{props.item.type}</td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
    )
}

export default ExpenseItem;