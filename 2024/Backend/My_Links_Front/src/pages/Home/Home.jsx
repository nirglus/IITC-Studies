import { useState, useEffect } from 'react'

function Home() {
    const [links, setLinks] = useState([]);
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

    const getLinks = () =>{
        fetch(linksURL)
          .then(response => response.json())
          .then(result => {
              console.log(result);
              setLinks(result);
          })
          .catch(error => console.log('error', error));
    }

    useEffect(()=>{
      getLinks();
    }, []);
  return (
    <>
    {links.map((link, index) => (
      <div key={index}>
        <p>{link.title}</p>
        <p>{link.description}</p>
        <p>{link.link}</p>
      </div>
    ))}
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
