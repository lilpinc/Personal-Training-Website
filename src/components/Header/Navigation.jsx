import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;
  
  return (
    <>
    <header className="navbar">
      <h1 className="bold" id="company">
      <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className= {currentPage === '/' ? 'nav-link active text-light' : 'nav-link text-white'}
        >
          ABP Fitness
        </Link>
        </h1>
    <ul className="nav">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className= {currentPage === '/' ? 'nav-link active text-light' : 'nav-link text-white'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Team"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Team' ? 'nav-link active text-light' : 'nav-link text-white'}
        >
          Team
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Services"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Services' ? 'nav-link active text-light' : 'nav-link text-white'}
        >
          Services
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/Blog"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Blog' ? 'nav-link active text-warning' : 'nav-link text-white'}
        >
          Blog
        </Link>
      </li> */}
      <li className="nav-item">
        <Link
          to="/Quiz"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Quiz' ? 'nav-link active text-light' : 'nav-link text-white'}
        >
          Program Quiz
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active text-light' : 'nav-link text-white'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <button id="cornerbtn"><Link
          to="/StartNow"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/StartNow' ? 'nav-link active text-black' : 'nav-link text-black'}
        >
          Start Now
        </Link>
        </button>
      </li>
    </ul>
    </header>
    </>
  );
}

export default NavTabs;
