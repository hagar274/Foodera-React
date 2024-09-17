import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./Footer.css";
import { MDBFooter, MDBContainer, MDBCol, MDBRow, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

  

const Footer = () => {
    return(
        <>
        <div className="foot">
            <div className="container">
                    <div className="col-md-12">
                        <h2>Hurry up! Subscribe our newsletter <br/>
                        and get <span>25% Off</span></h2>
                        <p>Limited time offer for this month. No credit card required.</p>

                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Col sm="10">
                    <Form.Control type="email" placeholder="Email Address here" />
                    </Col>
                <Form.Label column sm="2">
                       Subscribe
                </Form.Label>
                    </Form.Group>
                </Form>
                    </div>
            </div>
        </div>

            <MDBFooter className='text-center text-white' style={{ backgroundColor: '#a82d49', marginTop: '100px' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className='mt-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
            <FaFacebook />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
            <FaTwitter />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
            <FaGoogle />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
            <FaInstagram />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
            <FaLinkedinIn />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
            <FaGithub />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2021. Foodera:
        <a className='text-white' href='https://mdbootstrap.com/'>
         All rights reserved.
        </a>
      </div>
    </MDBFooter>
        </>
    );
}


export default Footer;