import { RouterProvider, createBrowserRouter , defer} from 'react-router-dom'

import PageError from '../pages/pageError/PageError'
import Index from '../pages/Index'
import About from '../pages/about/About'
import PageRental from '../pages/PageRental/PageRental'
import './routes.sass'
import Layout from '../layout/Layout'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <PageError/>,
    children: [
      {
        path: '',
        element: <Index/>,
        loader: () => {
          const rentals = fetch('./src/assets/js/data/logements.json').then(r=>r.json())
          return defer({ rentals })
        }
      },
      {
        path: 'apropos',
        element: <About/>,
        loader: () => {
          const aboutData = fetch('./src/assets/js/data/about.json').then(r=>r.json())
          return defer({ aboutData })
        }
      },
      {
          path: ':id',
          element: <PageRental/>,
          loader: () => {
            const rentals = fetch('./src/assets/js/data/logements.json').then(r=>r.json())
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