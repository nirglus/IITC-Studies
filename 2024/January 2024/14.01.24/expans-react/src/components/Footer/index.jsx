import "./Footer.css";
function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer>BudgeyBuddy © {year}</footer>
    )
}

export default Footer;