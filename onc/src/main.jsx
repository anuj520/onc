import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"      // Normal base styles
import "./resmain.css"    // Extra styles
import "./responsive.scss" // 👈 Media queries sabse last me
import { Provider } from 'react-redux'
import { store } from './features/tasks/store.jsx'
import { AuthProvider } from './ContextAPI/ContextAPI.jsx'
import {Bounce, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider2 } from './ContextAPI/ContectApi2.jsx'

createRoot(document.getElementById('root')).render(
        <AuthProvider2>  
  <AuthProvider>  
  <StrictMode>
    <Provider store={store}>
    <App />
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
  
    </Provider>
  </StrictMode>
  </AuthProvider>
   </AuthProvider2>
)
