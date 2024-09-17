import React from "react";
import Header from "./Header";
import "./Home.css";
import Data from "../../Data";
import { FaCheck } from 'react-icons/fa';
import { BiSolidRightArrow } from 'react-icons/bi';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Home = () => {
    const blogitem = Data.map((item) =>{
        return(
            <div className="col-md-4">
                <div className="box">
                <img src={item.img} ></img>
                <h5>{item.title}</h5>
                <span>{item.time}</span>
                <h6>{item.price}</h6>
                </div>
                <button><a href="#">order now</a></button>
            </div>
        );
    });

    return(
        <>
          <Header />
          <section className="numbers">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2>1287+</h2>
                        <h6>Savings</h6>
                    </div>

                    <div className="col-md-3">
                        <h2>5786+</h2>
                        <h6>Photos</h6>
                    </div>

                    <div className="col-md-3">
                        <h2>1440+</h2>
                        <h6>Rockets</h6>
                    </div>

                    <div className="col-md-3">
                        <h2>7110+</h2>
                        <h6>Globes</h6>
                    </div>
                </div>
            </div>
          </section>

          <section className="pride">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="images/1.png" alt="pide img" title="pride img"></img>
                    </div>
                    <div className="col-md-6">
                        <h2>We pride ourselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button><a href="#">learn more</a></button>
                    </div>
                </div>
            </div>
          </section>

          <section className="ingredients">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>We make everything by hand with the best possible ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul>
                            <li><span><FaCheck /></span>
                            Etiam sed dolor ac diam volutpat.</li>
                            <li><span><FaCheck /></span>
                            Erat volutpat aliquet imperdiet.</li>
                            <li><span><FaCheck /></span>
                            purus a odio finibus bibendum.</li>
                        </ul>
                        <button>
                            <a href="#">learn more</a>
                        </button>
                    </div>
                    <div className="col-md-6">
                        <img src="images/2.png" alt="ingredients" title="ingredients"></img>
                    </div>
                </div>
            </div>
          </section>

          <section className="poor">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>When a man's stomach is full it makes no <br/>
                        difference whether he is rich or poor.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/>
                        finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <a href="#"><span><BiSolidRightArrow /></span>
                          watch our story
                        </a>
                    </div>
                </div>
            </div>
          </section>

          <section className="blogs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h1>Explore Our Foods</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    </div>
                </div>
                <div className="row">
                    {blogitem}
                </div>
            </div>
          </section>

          <section className="slider">
            <div className="container">
                <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Testimonials</h2>
                        </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                    <Carousel>
      <Carousel.Item>
        <img src="images/1.jpg" alt="slider1"/>
        <Carousel.Caption>
          <p>"behind the word mountains, far from the countries Vokalia."</p>
          <span>Simab Dave - Web Designer</span>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="images/2.jpg" alt="slide2"/>
        <Carousel.Caption>
          <p>"Far far away, far from the countries Vokalia and Consonantia."</p>
          <span>Johnthan Doe - UX Designer</span>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="images/1.jpg" alt="slide3"/>
        <Carousel.Caption>
          <p>"Far far away, behind the word mountains. "</p>
          <span>Maccy Doe - Front End</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                    </div>
                </div>
            </div>
          </section>

          <section className="cards">
          <div className="container">
                <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Frequently Asked Questions</h2>
                        </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Title><span>~</span>Is Foodera Bread really baked fresh each day?</Card.Title>
              <Card.Text>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
</div>
</div>
          </section>

          <section className="bakers">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Baked fresh daily by bakers with passion.</h2>
                    </div>
                </div>

                <div className="row">
                            <div className="col-lg-12 col-md-12">
                            <a href="#"><span><BiSolidRightArrow /></span>
                          learn more
                        </a>
                            </div>
                        </div>
            </div>
          </section>
        </>
    );
}



export default Home;