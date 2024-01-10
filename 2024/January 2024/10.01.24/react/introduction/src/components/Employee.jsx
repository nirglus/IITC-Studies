import "./Employee.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Employee(props){
    return (
        <div className="employee">
            <img className="memberImage" src={props.person.image} alt={props.person.fullName}/>
            <h1 className="memberName">{props.person.fullName}</h1>
            <h4 className="position">{props.person.position}</h4>
            <p className="desc">{props.person.desc}</p>
            <div className="icons">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
        </div>
    )
}

export default Employee;