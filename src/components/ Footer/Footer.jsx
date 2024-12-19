import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

// add links to github, linkedin and instagram
export default function Footer() {

  const currentPage = useLocation().pathname;

    return (
        <footer className="footer">
        <ul className="logos">
          <li className="logo" id="copyright">Made by Anna Britta Pincus&copy;</li>
          <li className="logo nav-item2 ">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className= {currentPage === '/' ? 'nav-link active text-light' : 'nav-link text-white'}
        >
          Home
        </Link>
      </li>
      <li className="logo nav-item2 ">
        <Link
          to="/Team"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Team' ? 'nav-link active text-light' : 'nav-link text-white'}
        >
          Team
        </Link>
      </li>
      <li className="logo nav-item2 ">
        <Link
          to="/Services"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Services' ? 'nav-link active text-light' : 'nav-link text-white'}
        >
          Services
        </Link>
      </li>
      {/* <li className="logo nav-item2">
        <Link
          to="/Blog"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Blog' ? 'nav-link active text-warning' : 'nav-link text-white'}
        >
          Blog
        </Link>
      </li> */}
      <li className="logo nav-item2">
        <Link
          to="/Quiz"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Quiz' ? 'nav-link active text-light' : 'nav-link text-white'}
        >
          Program Quiz
        </Link>
      </li>
      <li className="logo nav-item2">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active text-light' : 'nav-link text-white'}
        >
          Contact
        </Link>
      </li>
      <li className="logo nav-item2 item3">
        <Link
          to="/StartNow"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/StartNow' ? 'nav-link active text-light' : 'nav-link text-white'}
        >
          Start Now
        </Link>
      </li>
          <a href="https://github.com/lilpinc">
            <li className="logo nav-item2" id="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/anna-britta-pincus-25293b137/">
            <li className="logo nav-item2" id="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/abps.fc/">
            <li className="logo nav-item2" id="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </footer>
    
    );
}