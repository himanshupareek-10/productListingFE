import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductListing from './components/ProductListing'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/products" Component={ProductListing} />
          <Route path="/product/:productId" Component={ProductDetails} />
        </Routes>
    </Router>
  )
}

export default App
