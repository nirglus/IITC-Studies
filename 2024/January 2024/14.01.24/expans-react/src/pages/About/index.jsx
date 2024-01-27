import Employees from "../../components/Employees";
import "./About.css";

function About() {
  return (
    <div className="about">
        <div className="team">
            <h1>Our Team</h1>
            <Employees />
        </div>
      
    </div>
  )
}

export default About
