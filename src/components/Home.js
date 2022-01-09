import React from 'react';
// bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './Home.css';

import logo from '../images/logo.png';
import user from '../images/user.jpeg';

import user1 from '../images/user-1.jpeg';
import user2 from '../images/user-2.jpeg';
import user3 from '../images/user-3.jpeg';
import user4 from '../images/user-4.jpeg';
import user5 from '../images/user-5.jpeg';
import user6 from '../images/user-6.jpeg';

import hote1 from '../images/hotel-1.jpeg';
import hote2 from '../images/hotel-2.jpeg';
import hote3 from '../images/hotel-3.jpeg';
import iconssvg from '../images/symbol-defs.svg';

const Home = () => {
    return (
        <div className="container">
          <header className="header">
              <img src={logo} alt='trillo logo' className='logo'/>
              <form action='#' className='search'>
                <input type="text" className='search_input' placeholder='Search Hotels'/>
                <button className='search_button'>
                  <svg className='search_icon'>
                    <use xlinkHref={`${iconssvg}#icon-magnifying-glass`} ></use>
                  </svg>
                </button>
              </form>

              <nav className='user-nav'>
                  <div className='user-nav_icon-box'>
                    <svg className='user-nav_icon'>
                      <use xlinkHref={`${iconssvg}#icon-bookmark`} ></use>
                    </svg>
                    <span className='user-nav_notification'>7</span>
                  </div>
                  
                  <div className='user-nav_icon-box'>
                    <svg className='user-nav_icon'>
                      <use xlinkHref={`${iconssvg}#icon-chat`} ></use>
                    </svg>
                    <span className='user-nav_notification'>10</span>
                  </div>

                  <div className='user-nav_user'>
                    <img src={user} alt='User photo' className='user-nav_user-photo'/>
                    <span className='user-nav_user-name'>Guru E</span>
                  </div>
              </nav>
          </header>
          <div className='content'>
            <nav className='sidebar'>
                <ul className='side-nav'>
                  <li className='side-nav_item'>
                    <a className='side-nav_link'>
                    <svg className='side-nav_icon'>
                      <use xlinkHref={`${iconssvg}#icon-home`} ></use>
                    </svg>
                     <span>Hotel</span>
                    </a>
                  </li>

                  <li className='side-nav_item'>
                    <a className='side-nav_link'>
                    <svg className='side-nav_icon'>
                      <use xlinkHref={`${iconssvg}#icon-aircraft-take-off`} ></use>
                    </svg>
                     <span>Flight</span>
                    </a>
                  </li>

                  <li className='side-nav_item'>
                    <a className='side-nav_link'>
                    <svg className='side-nav_icon'>
                      <use xlinkHref={`${iconssvg}#icon-key`} ></use>
                    </svg>
                     <span>Car Rental</span>
                    </a>
                  </li>

                  <li className='side-nav_item'>
                    <a className='side-nav_link'>
                    <svg className='side-nav_icon'>
                      <use xlinkHref={`${iconssvg}#icon-map`} ></use>
                    </svg>
                     <span>Tours</span>
                    </a>
                  </li>

                </ul>
                <div className='legal'>
                  &copy; 2022 by trillo. All rights reserved
                </div>
            </nav>
            <main className='hotel-view'>

              <div className='gallery'>
                <figure className='gallery_item'>
                  <img src={hote1} alt="Hote 1" className='gallery_photo'/>
                </figure>
                <figure className='gallery_item'>
                  <img src={hote2} alt="Hote 2" className='gallery_photo'/>
                </figure>
                <figure className='gallery_item'>
                  <img src={hote3} alt="Hote 3" className='gallery_photo'/>
                </figure>
              </div>

              <div className='overview'>
                <h1 className='overview_heading'>
                  Hotel Las Palmas
                </h1>
                <div className='overview_stars'>
                    <svg className='overview_stars_icon'>
                      <use xlinkHref={`${iconssvg}#icon-star-outlined`} ></use>
                    </svg>
                    <svg className='overview_stars_icon'>
                      <use xlinkHref={`${iconssvg}#icon-star-outlined`} ></use>
                    </svg>
                    <svg className='overview_stars_icon'>
                      <use xlinkHref={`${iconssvg}#icon-star-outlined`} ></use>
                    </svg>
                    <svg className='overview_stars_icon'>
                      <use xlinkHref={`${iconssvg}#icon-star-outlined`} ></use>
                    </svg>
                    <svg className='overview_stars_icon'>
                      <use xlinkHref={`${iconssvg}#icon-star-outlined`} ></use>
                    </svg>
                </div>
                <div className='overview-location'>
                    <svg className='overview-location_icon'>
                      <use xlinkHref={`${iconssvg}#icon-location-pin`} ></use>
                    </svg>
                    <button className='btn-inline'>Albufaria,Portugal</button>
              </div>
              <div className='overview-rating'>
                <div className='overview-rating_average'>8.6</div>
                <div className='overview-rating_count'>429 votes</div>
              </div>
              </div>

              <div className='hote-detail'>
                  <div className='hotel-description'> 
                    <p className='hote-description_paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                    </p>
                    <p className='hote-description_paragraph'>
                    Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                    </p>
                    <ul className='hote-list_amenities'>
                      <li className='hote-list_amenities_item'>Close to beach</li>
                      <li className='hote-list_amenities_item'>Breakfast included</li>
                      <li className='hote-list_amenities_item'>Free airport shuttle</li>
                      <li className='hote-list_amenities_item'>Free wifi in  all rooms</li>
                      <li className='hote-list_amenities_item'>Air conditiong and heating </li>
                      <li className='hote-list_amenities_item'>Pets allwoed</li>
                      <li className='hote-list_amenities_item'>We Speak all langugaues</li>
                      <li className='hote-list_amenities_item'>Perfect for families</li>
                    </ul>
                    <div className='hotel-recommended'>
                      <p className='hotel-recommended_count'>
                        Lucy and 3 other friends recommened this
                      </p>
                      <div className='hotel-recommended_firends'>
                        <img src={user3} alt="Friend 1" className='hotel-recommended_photo'/>
                        <img src={user4} alt="Friend 2" className='hotel-recommended_photo'/>
                        <img src={user5} alt="Friend 3" className='hotel-recommended_photo'/>
                        <img src={user6} alt="Friend 4" className='hotel-recommended_photo'/>
                      </div>
                    </div>
                  </div>

                  <figure className='hotel-user_reviews'>
                    <figure className='hotel-user_review'>
                      <blockquote className='hotel-user_review_text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                      </blockquote>
                      <figcaption className='hotel-user_review_user'>
                        <img src={user1} alt='User 1' className='hotel-user_review_photo'></img>
                        <div className='hotel-user_review_box'>
                          <p className='hotel-user_review_name'>Nick Smith</p>
                          <p className='hotel-user_review_date'>23rd Feb,2017</p>
                        </div>
                        <div className='hotel-user_review_rating'>7.8</div>
                      </figcaption>
                    </figure>
                    
                    <figure className='hotel-user_review'>
                      <blockquote className='hotel-user_review_text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                      </blockquote>
                      <figcaption className='hotel-user_review_user'>
                        <img src={user2} alt='User 2' className='hotel-user_review_photo'></img>
                        <div className='hotel-user_review_box'>
                          <p className='hotel-user_review_name'>Emily Zone</p>
                          <p className='hotel-user_review_date'>13th Sep 2017</p>
                        </div>
                        <div className='hotel-user_review_rating'>9.3</div>
                      </figcaption>
                    </figure>
                    <button className='btn-inline'>Show All <span> &arrr;</span></button>
                  </figure>
              </div>

            </main>
          </div>
        </div>
      //  <Container fluid>
      //    <Row className='nav-border-bottom'>
      //      <Col>
      //       a
      //      </Col>
      //    </Row>
      //    <Row >
      //      <Col xs={2} className='leftside-menu'>
      //       <Nav defaultActiveKey="/" className="flex-column">
      //         <Nav.Link href="/">Home</Nav.Link>
      //         <Nav.Link href="/customer">Customer</Nav.Link>
      //         <Nav.Link href="/creditcard">Credit Cards</Nav.Link>
      //         <Nav.Link href="/loans">Loans</Nav.Link>
      //         <Nav.Link href="/loans">Support</Nav.Link>
      //       </Nav>
      //      </Col>
      //      <Col>
      //      <Row>
      //       <Form.Group as={Col} controlId="formGridEmail">
      //         <Form.Label>Email</Form.Label>
      //         <Form.Control type="email" placeholder="Enter email" />
      //       </Form.Group>

      //       <Form.Group as={Col} controlId="formGridPassword">
      //         <Form.Label>Password</Form.Label>
      //         <Form.Control type="password" placeholder="Password" />
      //       </Form.Group>
      //     </Row>
      //     <Row>
      //       <Form>
      //         <Form.Group className="mb-3" controlId="formGridAddress1">
      //           <Form.Label>Address</Form.Label>
      //           <Form.Control placeholder="1234 Main St" />
      //         </Form.Group>
      //         <Form.Group className="mb-3" controlId="formGridAddress2">
      //           <Form.Label>Address 2</Form.Label>
      //           <Form.Control placeholder="Apartment, studio, or floor" />
      //         </Form.Group>

      //         <Row className="mb-3">
      //           <Form.Group as={Col} controlId="formGridCity">
      //             <Form.Label>City</Form.Label>
      //             <Form.Control />
      //           </Form.Group>

      //           <Form.Group as={Col} controlId="formGridState">
      //             <Form.Label>State</Form.Label>
      //             <Form.Select defaultValue="Choose...">
      //               <option>Choose...</option>
      //               <option>...</option>
      //             </Form.Select>
      //           </Form.Group>

      //           <Form.Group as={Col} controlId="formGridZip">
      //             <Form.Label>Zip</Form.Label>
      //             <Form.Control />
      //           </Form.Group>
      //         </Row>

      //         <Form.Group className="mb-3" id="formGridCheckbox">
      //           <Form.Check type="checkbox" label="Check me out" />
      //         </Form.Group>

      //         <Button variant="primary" type="submit">
      //           Submit
      //         </Button>
      //       </Form>
      //     </Row>
      //      </Col>
      //    </Row>
      // </Container> 
    )
}
export default Home;