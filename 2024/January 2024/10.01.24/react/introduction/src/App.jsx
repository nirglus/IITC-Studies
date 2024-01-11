import Employee from './components/Employee'
import Gallery from './components/Gallery'
import Grocery from './pages/Grocery'
import Products from './pages/Products'
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
    <div className='employees'>
      {/* <h1>Hello, {name}!</h1>
      <h2>How it feels to be {age} years old?</h2>
      <button>Hello</button>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <img src="https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg" alt="owl" width={400} height={300} />
      <p>{todo.title}, <small>{todo.author}</small></p> */}
      {/* <Employee person={person1} />
      <Employee person={person2} /> */}
      {/* <Counter /> */}
      {/* <h1 className='team'>Our Team</h1>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
      <div className="cards">
        <Employee person={person1} />
        <Employee person={person2} />
        <Employee person={person3} />
      </div> */}
      {/* <Gallery /> */}
      {/* <Grocery /> */}
      <Products />
    </div>
  )
}

export default App;