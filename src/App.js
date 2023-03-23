import './App.css';
import { BrowserRouter ,Routes, Route, Link, Navigate } from 'react-router-dom';
import Homepage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import SellerPage from './pages/SellerPage';
import SubscribersPage from './pages/SubscriberPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
  const SERVER_URL = "http://localhost:8080";
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sellers, setSellers] = useState([]);

  const loadProductData = async () => {
      const response = await fetch (`${SERVER_URL}/products`);
      const data = await response.json();
      setProducts(data);
  }

  const loadSellerData  = async () => {
      const response = await fetch (`${SERVER_URL}/sellers`);
      const data = await response.json();
      setSellers(data);
  }

  useEffect(() => {
      loadProductData();
      loadSellerData();
  }, []);


  
  const postProduct = async (addedProduct) => {

      const productBody = {
          name: addedProduct.name,
          price: addedProduct.price,
          description: addedProduct.description,
          stock: 100,
          listed: true
      }

      const id = sellers.filter((seller)=>{
          return seller.name === addedProduct.seller
      })[0].sellerId

      const response = await fetch (`${SERVER_URL}/products?sellerId=${id}`, {
          method: "POST", 
          headers: {
              "Content-Type" : "application/json"
          },
          body: JSON.stringify(productBody)
      })
      const savedProduct = await response.json();
      savedProduct.sellerId = id;
      savedProduct.sellerName = addedProduct.seller;
      savedProduct.productId = savedProduct.id;
      setProducts([...products, savedProduct])
  }

  const deleteProduct = async (id) => {
      await fetch (`${SERVER_URL}/products/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json" 
          }
      });
      loadProductData();
  }
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/Home" element={<Homepage products={products} postProduct={postProduct}/>} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/Sellers" element={<SellerPage postProduct={postProduct}/>} />
      <Route path="/Subscribers" element={<SubscribersPage />} />
      <Route path="/Login" element={<Navigate to="/Home" />} />
      <Route path="/Cart" element={<Navigate to="/Home" />} />
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home/Electronics" element={<Navigate to="/Home" />} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
