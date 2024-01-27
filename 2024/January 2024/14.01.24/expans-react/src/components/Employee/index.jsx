import "./Employee.css";

function Employee(props) {
  return (
    <div className="employee">
        <img className="memberImage" src={props.person.image} alt={props.person.fullName}/>
        <h1 className="memberName">{props.person.fullName}</h1>
        <h4 className="position">{props.person.position}</h4>
        <p className="desc">{props.person.desc}</p>
    </div>
  )
}

export default Employee
