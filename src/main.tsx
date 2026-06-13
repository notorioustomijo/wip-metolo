import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import WebsiteLoader from './global components/Loader2';


function Root() {
  const [loading, setLoading] = useState(!sessionStorage.getItem('loader-shown'));
  
  function handleLoaderComplete() {
    sessionStorage.setItem('loader-shown', 'true');
    setLoading(false);
  }
  
  return loading 
    ? <WebsiteLoader onComplete={handleLoaderComplete} />
    : <BrowserRouter><App /></BrowserRouter>
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)