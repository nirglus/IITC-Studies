import { useState, useEffect } from 'react'
import Links from '../../components/Links/Links';

function Home() {

    const [newLink, setNewLink] = useState({});
    const linksURL = "http://localhost:2000/my-links/links";

    const submitHandler = (e) =>{
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newLink),
        };
        
        fetch(linksURL, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Post request successful:', data);
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    }

    const changeHandler = (e) =>{
        newLink[e.target.name] = e.target.value;
        setNewLink({...newLink});
        console.log(newLink);
    }


  return (
    <>
    <Links linksURL={linksURL} />
    <form onSubmit={submitHandler}>
        <input type="text" name="title" placeholder='Enter a title:' onChange={changeHandler} />
        <input type="text" name="link"  placeholder='Enter a link:' onChange={changeHandler} />
        <input type="text" name="description" placeholder='Enter a description:' onChange={changeHandler} />
        <button>Submit</button>
    </form>
    </>
  )
}

export default Home
