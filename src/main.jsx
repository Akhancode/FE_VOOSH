import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyContextProvider from './component/context/modelContext.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google"
createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </GoogleOAuthProvider>
)
