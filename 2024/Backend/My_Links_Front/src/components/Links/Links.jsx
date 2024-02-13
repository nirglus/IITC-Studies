import { useState, useEffect } from "react";

function Links({linksURL}) {
    const [links, setLinks] = useState([]);
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
    <div>
        {links.map((link, index) => (
        <div key={index}>
            <p>{link.title}</p>
            <p>{link.description}</p>
            <p>{link.link}</p>
        </div>
        ))}
    </div>
  )
}

export default Links
