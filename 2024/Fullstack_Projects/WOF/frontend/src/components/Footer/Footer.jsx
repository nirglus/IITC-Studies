import { currentYear } from "../../helpers/formatDate";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="topFooter">
        <div className="company">
          <h2>World of Formula</h2>
          <p>From track to shelf, Capturing racing spirit</p>
        </div>
        <div className="products">
          <h2>Other Products</h2>
          <a href="https://nirglus.github.io/Movies-Project/html/index.html">MovieNatic</a>
          <a href="https://resumematrix-50ace.web.app/">ResumeMatrix</a>
          <a href="https://cryptonight-e657d.web.app/">CryptoNight</a>
        </div>
      </div>
      <div className="bottomFooter">
        <div className="copyright">
          <p>© {currentYear}  World of Formula: All rights reserved</p>
        </div>
        <div className="icons">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-whatsapp"></i>
          <a href="https://github.com/nirglus"><i class="bi bi-github"></i></a>
          <i class="bi bi-envelope-at-fill"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer
