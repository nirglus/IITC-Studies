import Employee from './components/Employee'
import Gallery from './components/Gallery'
import Test from './components/Test'
import ProductCard from './components/ProductCard'
import Grocery from './pages/Grocery'
import Products from './pages/Products'
import ThemeProvider from './context/Theme'
// import Counter from './components/Counter'
// import './App.css'
const person1 = {
  image: "https://storage.googleapis.com/pai-images/263842313e3e452a8cbe848059216547.jpeg",
  fullName: "Jason Vite",
  position: "developer",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, officiis expedita. Eligendi eaque tenetur eos, deserunt maxime, rerum fuga placeat ducimus eveniet ratione, temporibus similique voluptatibu"
}
const person2 = {
  image: "https://storage.googleapis.com/pai-images/263842313e3e452a8cbe848059216547.jpeg",
  fullName: "Jake Eury",
  position: "manager",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, officiis expedita. Eligendi eaque tenetur eos, deserunt maxime, rerum fuga placeat ducimus eveniet ratione, temporibus similique voluptatibu"
}
const person3 = {
  image: "https://storage.googleapis.com/pai-images/263842313e3e452a8cbe848059216547.jpeg",
  fullName: "Maxmimillian Yu",
  position: "cto",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, officiis expedita. Eligendi eaque tenetur eos, deserunt maxime, rerum fuga placeat ducimus eveniet ratione, temporibus similique voluptatibu"
}
function App() {
  // const name = "Jason";
  // const age = 45;
  // const todo = {
  //   title: "Harry Potter",
  //   author: "J.K Rowling"
  // }
  return (
    <ThemeProvider>
      <div className='employees'>
      <Test />
    </div>
    </ThemeProvider>
  )
}

export default App;