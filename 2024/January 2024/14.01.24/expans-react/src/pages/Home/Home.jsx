import homeImg from "../../assets/homeImg.png"
import "./Home.css";
import { Link } from "react-router-dom"
function Home({user}){
    return(
        <div className="home">
            <div className="l-side">
                <img src={homeImg} alt="home-page-img" />
            </div>
            <div className="r-side">
                <h1>Welcome to BudgetBuddy!</h1>
                <p>Introducing BudgetBuddy, your go-to solution for mastering your finances. <br /> With BudgetBuddy, effortlessly monitor your spending and take control of your financial future. <br />Say hello to smarter money management today!</p>
                {user ?
                (<Link to="/budget">Try it out</Link>) : 
                (<Link to="/login">Try it out</Link> )
                }
           
            </div>
        </div>
    )
}

export default Home;