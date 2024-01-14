import { useState } from "react";
import BookCard from "../components/BookCard";
// import "./Books.css";

function Books(){
    const [books, setBooks] = useState([
        {
            title: "The Godfather" ,
            description: `When Mario Puzo's blockbuster saga, The Godfather, was first published in 1969, critics hailed it as one of the greatest novels of our time, and "big, turbulent, highly entertaining." Since then, The Godfather has gone on to become a part of America's national culture, as well as a trilogy of landmark motion pictures. Now, in this newly-repackaged 30th Anniversary Edition, readers old and new can experience this timeless tale of crime for themselves.From the lavish opening scene where Don Corleone entertains guests and conducts business at his daughter's wedding...to his son, Michael, who takes his father's place to fight for his family...to the bloody climax where all family business is finished, The Godfather is an epic story of family, loyalty, and how "men of honor" live in their own world, and die by their own laws.`,
            cover: "https://m.media-amazon.com/images/I/71Jk3baRdnL._SY522_.jpg",
        },
        {
            title: `The Godfather Returns`,
            description: `
            It is 1955. Michael Corleone has won a bloody victory in the war among New York’s crime families. Now he wants to consolidate his power, save his marriage, and take his family into legitimate businesses. To do so, he must confront his most dangerous adversary yet, Nick Geraci, a former boxer who worked his way through law school as a Corleone street enforcer, and who is every bit as deadly and cunning as Michael. Their personal cold war will run from 1955 to 1962, exerting immense influence on the lives of America’s most powerful criminals and their loved ones`,
            cover: `https://m.media-amazon.com/images/I/61doYDu+RAL._SY522_.jpg`,
        },
        {
            title: `The Family Corleone`,
            description: `
            New York, 1933: The city and the nation are in the depths of the Great Depression. The crime families of New York have prospered in this time, but with the coming end of Prohibition, a battle is looming that will determine which organizations will rise and which will face a violent end.`,
            cover: `https://m.media-amazon.com/images/I/818QO6k47nL._SY522_.jpg`,
        }
    ]
    )
    const [book, setBook] = useState({});

    const changeHandler = (e) =>{
        book[e.target.name] = e.target.value;
        setBook({...book});
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        setBooks([...books, {...book}]);
    }
    return (
        <div className="booksCard">
            <form onSubmit={submitHandler}>
                <input onChange={changeHandler} type="text" name="title" />
                <input onChange={changeHandler} type="text" name="description" />
                <input onChange={changeHandler} type="text" name="cover" />

                <button type="submit">Add book</button>
            </form>
            {console.log(books)}
            {books.map((book, index) => {
                return <BookCard book={book} key={index} />
            })}
        </div>
    )
}

export default Books;