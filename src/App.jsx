import './App.css'
import Footer from './component/Layout/footer/Footer.jsx'
import Header from './component/Layout/header/Header.jsx'
import Policy from './component/Layout/policy/Policy.jsx'
import Sliders from './component/Layout/Slider/Sliders.jsx'
import Categories from './component/Layout/Categories/Categories.jsx'
import Product from './component/Layout/Products/Product.jsx'
import Campaigns from './component/Layout/Campaigns/Campaigns.jsx'
import Blogs from './component/Layout/Blogs/Blogs.jsx'

function App() {

  return (
    <>
      <Header />
      <Sliders />
      <Categories />
      <Product />
      <Campaigns />
      <Product />
      <Blogs />
      <Policy />
      <Footer />

    </>
  )
}

export default App
