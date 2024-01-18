function ExpenseItem(props){
    return(
        <tr>
            <td>{props.item.title}</td>
            <td>{props.item.category}</td>
            <td>${props.item.amount}</td>
            <td>{props.item.type}</td>
        </tr>
    )
}

export default ExpenseItem;