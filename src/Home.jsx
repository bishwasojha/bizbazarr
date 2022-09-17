import React from "react";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import fd from './Fake-dataset';
import ProductList from './Components/ProductList'

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />

        <div className="container">
          <div className="row p-4">
          {fd.map((el) => {
          return <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                  <ProductList prod={el} key={el.id} />
          </div> 
        })}
          </div>
        </div>
    </>
  );
};

export default Home;
