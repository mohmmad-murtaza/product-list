import React from 'react';
import Product_List from './components/Product_List';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
const App =()=>{
  const products =[
    {Product_ID:101,Product_Name:"wireless mouse",Ctegory:"Electronics",Price:25.99},
    {Product_ID:102,Product_Name:"Bluethoot Headphones",Ctegory:"Electronics",Price:49.99},
    {Product_ID:103,Product_Name:"Desk Chair",Ctegory:"Furniture",Price:88.99},
    {Product_ID:104,Product_Name:"Water Bottle",Ctegory:"Accessories",Price:12.50},

  ]
  return (
  <>
    <div className="App">
     <Header/>
      <Product_List products={products} />
      <Footer/>
    </div>
  </>
  );
}

export default App;