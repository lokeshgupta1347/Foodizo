import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

 export const authService="http://localhost:5000";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="425045802727-5tshhs8pape1r6aqu87k9ss027vounpa.apps.googleusercontent.com"><App /></GoogleOAuthProvider>
    
  </StrictMode>,
)
