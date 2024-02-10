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
import HIITprograms from './components/Services/HIITFolder/HIITprograms.jsx'
import HIITvideos from './components/Services/HIITFolder/HIITvideos.jsx'
import FiveK from './components/Services/RunningFolder/FiveK.jsx'
import Half from './components/Services/RunningFolder/Half.jsx'
import Marathon from './components/Services/RunningFolder/Marathon.jsx'
import Quiz from './components/Quiz/Quiz'
import Blog1 from './components/Blog/BlogPosts/Blog1'
import Blog2 from './components/Blog/BlogPosts/Blog2'
import Blog3 from './components/Blog/BlogPosts/Blog3'
import Blog4 from './components/Blog/BlogPosts/Blog4'
import Blog5 from './components/Blog/BlogPosts/Blog5'



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
        path: '/Services/FullBody',
        element: <FullBody />,
      },
      {
        path: '/Services/HIIT',
        element: <HIIT />,
      },
      {
        path: '/Services/Mobility',
        element: <Mobility />,
      },
      {
        path: '/Services/Online',
        element: <Online />,
      },
      {
        path: '/Services/Posture',
        element: <Posture />,
      },
      {
        path: '/Services/Running',
        element: <Running />,
      },
      {
        path: '/Services/Mobility/MobilityEightWeek',
        element: <MobilityEightWeek />,
      },
      {
        path: '/Services/Mobility/MobilityHowTo',
        element: <MobilityHowTo />,
      },
      {
        path: '/Services/Mobility/MobilityPDF',
        element: <MobilityPDF />,
      },
      {
        path: '/Services/Posture/PostureFormEightWeek',
        element: <PostureFormEightWeek />,
      },
      {
        path: '/Services/Posture/PostureFormHowTo',
        element: <PostureFormHowTo />,
      },
      {
        path: '/Services/Posture/PostureFormPDF',
        element: <PostureFormPDF />,
      },
      {
        path: '/Services/HIIT/HIITprograms',
        element: <HIITprograms />,
      },
      {
        path: '/Services/HIIT/HIITvideos',
        element: <HIITvideos />,
      },
      {
        path: '/Services/Running/FiveK',
        element: <FiveK/>,
      },
      {
        path: '/Services/Running/Half',
        element: <Half />,
      },
      {
        path: '/Services/Running/Marathon',
        element: <Marathon />,
      },
      {
        path: '/Quiz',
        element: <Quiz />,
      },
      {
        path: '/Blog1',
        element: <Blog1 />
      },
      {
        path: '/Blog2',
        element: <Blog2 />
      },
      {
        path: '/Blog3',
        element: <Blog3 />
      },
      {
        path: '/Blog4',
        element: <Blog4 />
      },
      {
        path: '/Blog5',
        element: <Blog5 />
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);