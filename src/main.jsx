import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Home from './components/Home/Home'
import Team from './components/Team/Team'
import Services from './components/Services/Services'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import StartNow from './components/StartNow/StartNow'
import FullBody from './components/Services/FullBody'
import HIIT from './components/Services/HIIT'
import Mobility from './components/Services/Mobility'
import Online from './components/Services/Online'
import Posture from './components/Services/Posture'
import Running from './components/Services/Running'
import MobilityEightWeek from './components/Services/MobilityFolder/MobilityEightWeek.jsx'
import MobilityHowTo from './components/Services/MobilityFolder/MobilityHowTo'
import MobilityPDF from './components/Services/MobilityFolder/MobilityPDF'
import PostureFormEightWeek from './components/Services/PostureFolder/PostureFormEightWeek.jsx'
import PostureFormHowTo from './components/Services/PostureFolder/PostureFormHowTo.jsx'
import PostureFormPDF from './components/Services/PostureFolder/PostureFormPDF.jsx'



// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Team',
        element: <Team />,
      },
      {
        path: '/Services',
        element: <Services />,
      },
      {
        path: '/Blog',
        element: <Blog />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/StartNow',
        element: <StartNow />,
      },
      {
        path: '/FullBody',
        element: <FullBody />,
      },
      {
        path: '/HIIT',
        element: <HIIT />,
      },
      {
        path: '/Mobility',
        element: <Mobility />,
      },
      {
        path: '/Online',
        element: <Online />,
      },
      {
        path: '/Posture',
        element: <Posture />,
      },
      {
        path: '/Running',
        element: <Running />,
      },
      {
        path: '/MobilityEightWeek',
        element: <MobilityEightWeek />,
      },
      {
        path: '/MobilityHowTo',
        element: <MobilityHowTo />,
      },
      {
        path: '/MobilityPDF',
        element: <MobilityPDF />,
      },
      {
        path: '/PostureFormEightWeek',
        element: <PostureFormEightWeek />,
      },
      {
        path: '/PostureFormHowTo',
        element: <PostureFormHowTo />,
      },
      {
        path: '/PostureFormPDF',
        element: <PostureFormPDF />,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);