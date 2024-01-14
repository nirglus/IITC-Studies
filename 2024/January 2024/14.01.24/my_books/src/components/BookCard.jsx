// import "./BookCard.css"

function BookCard(props){
    return (
        <div className="bookCard">
            <p><b>Title:</b> {props.book.title}</p>
            <p><b>Description:</b> {props.book.description}</p>
            <p><img src={props.book.cover} alt="book-cover" /></p>
        </div>
    )
}

export default BookCard;