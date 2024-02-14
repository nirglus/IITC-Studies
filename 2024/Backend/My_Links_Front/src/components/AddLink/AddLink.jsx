import { useState } from "react"
import { APIBaseURL } from "../../../config/apiUrl";


function AddLink() {
    const [newLink, setNewLink] = useState({});
    const submitHandler = (e) =>{
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newLink),
        };
        
        fetch(`${APIBaseURL}/links`, options)
            .then(response => response.json())
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
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" name="title" placeholder='Enter a title:' onChange={changeHandler} />
            <input type="text" name="link"  placeholder='Enter a link:' onChange={changeHandler} />
            <input type="text" name="description" placeholder='Enter a description:' onChange={changeHandler} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default AddLink
