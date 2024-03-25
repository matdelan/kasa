import { RouterProvider, createBrowserRouter , Outlet, defer} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import PageError from '../pages/PageError'
import Index from '../pages/Index'
import About from '../pages/About'
import './routes.sass'

function Root() {
  return <>
    <Header/>
    <div className="container">
      <Outlet/>
    </div>
    <Footer/>
  </>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <PageError/>,
    children: [
      {
        path: '',
        element: <Index/>,
        loader: () => {
          const data = fetch('./src/assets/js/data/logements.json').then(r=>r.json())
          return defer({ data })
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
          element: <div>Img</div>
      }
      
    ]
  }
])

function Router() {
  return <RouterProvider router={router}/>
}

export default Router