import { useState } from 'react'
import { RouterProvider, createBrowserRouter , Outlet} from 'react-router-dom'
import Index from './assets/js/pages/index'
import Header from './assets/js/components/Header/Header'
import Footer from './assets/js/components/Footer/Footer'
import PageError from './assets/js/pages/PageError'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <PageError/>,
    children: [
      {
        path: 'apropos',
        element: <div>ok</div>
      },
      {
        path: 'gallerie',
        children: [
          {
            path:'',
             loader: () => {
              
             },
            element: <div>Gallery</div>
          },
          {
            path: ':id',
            element: <div>Img</div>
          }
        ]
      }
    ]
  }
])

function Root() {
  return <>
    <Header/>
    <div className="container">
      <Outlet/>
    </div>
    <Footer/>
  </>
} 

function App() {
  return <RouterProvider router={router}/>
}

export default App
