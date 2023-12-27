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
import EightWeek from './components/Services/MobilityFolder/EightWeek'
import HowTo from './components/Services/MobilityFolder/HowTo'
import PDF from './components/Services/MobilityFolder/PDF'


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
        path: '/EightWeek',
        element: <EightWeek />,
      },
      {
        path: '/HowTo',
        element: <HowTo />,
      },
      {
        path: '/PDF',
        element: <PDF />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);