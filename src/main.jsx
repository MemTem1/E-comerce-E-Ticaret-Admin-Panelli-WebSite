import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainLayout from './Layouts/MainLayout.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.jsx'
import './index.css'
import CartProivder from './context/CartProvider.jsx';

createRoot(document.getElementById('root')).render(
  <>

    <CartProivder>
      <MainLayout>
        <App />
      </MainLayout >
    </CartProivder>
  </>
)
