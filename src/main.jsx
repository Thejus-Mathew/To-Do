import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { todoStore } from './Redux/todoStore.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={todoStore}>
        <App/>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
