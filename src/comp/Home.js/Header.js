import React from "react";
import "./Header.css";
import { FaShoppingBasket } from 'react-icons/fa';
import { MdArrowRight } from 'react-icons/md';

const Header = () => {
    return(
        <>
          <header>
            <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h2>Good food choices are good investments.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Etiam et purus a odio finibus bibendum amet leo.</p>
                    <button>
                       Order Now
                       <span><FaShoppingBasket /></span>
                    </button>
                    <button>
                        Learn More
                        <span><MdArrowRight /></span>
                        </button>
                  </div>
                  <div className="col-md-6">

                  </div>
                </div>
            </div>
          </header>
        </>
    );
}

export default Header;