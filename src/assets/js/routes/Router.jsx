import { RouterProvider, createBrowserRouter , defer} from 'react-router-dom'

import PageError from '../pages/pageError/PageError'
import Index from '../pages/Index.jsx'
import About from '../pages/about/About'
import PageRental from '../pages/PageRental/PageRental'
import './routes.sass'
import Layout from '../layout/Layout'

const router = createBrowserRouter([
  {
    path: '/kasa-P10-ReactProject/',
    element: <Layout/>,
    errorElement: <PageError/>,
    children: [
      {
        path: '/kasa-P10-ReactProject/',
        element: <Index/>,
        loader: () => {
          const rentals = fetch('./data/logements.json').then(r=>r.json())
          return defer({ rentals })
        }
      },
      {
        path: '/kasa-P10-ReactProject/apropos',
        element: <About/>,
        loader: () => {
          const aboutData = fetch('./data/about.json').then(r=>r.json())
          return defer({ aboutData })
        }
      },
      {
          path: '/kasa-P10-ReactProject/:id',
          element: <PageRental/>,
          loader: () => {
            const rentals = fetch('./data/logements.json').then(r=>r.json())
            return defer({ rentals })
          }
      }
    ]
  }
])

function Router() {
  return <RouterProvider router={router}/>
}

export default Router