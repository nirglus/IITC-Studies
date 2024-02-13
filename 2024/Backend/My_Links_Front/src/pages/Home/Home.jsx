import Links from '../../components/Links/Links';
import AddLink from '../../components/AddLink/AddLink';

function Home() {
  const linksURL = "http://localhost:2000/my-links/links";

  return (
    <>
    <Links linksURL={linksURL} />
    <AddLink linksURL={linksURL} />
    </>
  )
}

export default Home
