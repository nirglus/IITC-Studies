import Employee from "../Employee";
import {team} from "../../helpers/team"
import "./Employees.css"

function Employees() {

  return (
    <div className="employees">
        {team.map((person, index) =>{
            return <Employee person={person} key={index} />;
        })};
    </div>
  )
}

export default Employees
