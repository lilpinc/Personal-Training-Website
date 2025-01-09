import { Link, useLocation } from 'react-router-dom';

function viewServices() {

    const currentPage = useLocation().pathname;

    return(
        <button className="viewservicesbtn returnbtn"> 
        <Link
          to="/Services"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Services' ? 'nav-link active' : 'nav-link'}
        >
        View all Services
        </Link>
        </button>
    );
}
export default viewServices;