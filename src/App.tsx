import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router'
import { GlobalStyle } from './components/global-style/global-style'

function App() {


  return (
    <>
      <GlobalStyle>
        <RouterProvider router={router} />
      </GlobalStyle>

    </>
  )
}

export default App
