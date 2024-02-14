import { useState, useEffect } from "react";
import { APIBaseURL } from "../../../config/apiUrl";

function Links() {
    const [links, setLinks] = useState([]);
    // const getLinks = () =>{
    //     fetch(`${APIBaseURL}/links`)
    //       .then(response => response.json())
    //       .then(result => {
    //           console.log(result);
    //           setLinks(result);
    //       })
    //       .catch(error => console.log('error', error));
    // }
    const getLinks = async () =>{
      const res = await fetch(`${APIBaseURL}/links`);
      const data = await res.json();
      setLinks(data);
    }

    const deleteLink = async(link) =>{
      try {
        const res = await fetch(`${APIBaseURL}/links/${link.id}`,{
          method: "DELETE"
        });
        if(res.status === 200){
          const filtered = links.filter((item) =>{
            return item.id !== link.id;
          })
          console.log(`Link ${link.id} removed`);
          setLinks([...filtered]);
        }

      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      getLinks();
    }, []);
  return (
    <div>
        {links.map((link, index) => (
        <div key={index}>
            <p>{link.title}</p>
            <p>{link.description}</p>
            <p>{link.link}</p>
            <button onClick={() => deleteLink(link)}>Remove</button>
        </div>
        ))}
    </div>
  )
}

export default Links
