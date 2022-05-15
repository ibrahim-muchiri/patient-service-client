import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useServiceContext, useServiceDispatch } from 'hooks';
import { getServiceDetail } from 'actions/serviceAction';
import Loader from 'components/Loader/Loader';

const service = {
  ratingsAverage: 5,
  ratingsQuantity: 0,
  role: 'admin',
  _id: '6255937149fe3c1dac557ca0',
  name: 'In-Patient',
  price: 1200,
  __v: 0,
};

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function ServiceDetails() {
  // const serviceDispatch = useServiceDispatch();
  // const servicesContext = useServiceContext();
  // const history = useHistory();

  // const { loading, contributionDetail } = contribDetails;

  // let getId = history.location.pathname;
  // let newArr = getId.split('/');
  // let id = parseInt(newArr[newArr.length - 1]);
  // console.log('The id to help us in search: ', id);

  // console.log(
  //   'The contributions detaiuls are here: ',
  //   contributionDetail.contribution
  // );
  // if (contributionDetail.contribution) {
  //   const { data } = contributionDetail.contribution;
  //   console.log('The data: ', data);
  // }
  // useEffect(() => {
  //   getSingleContribution(dispatch.contribDetailDispatch, id);
  // }, [getId]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Contribution Details</Card.Title>
              </Card.Header>

              <Card.Body>
                {/* {loading ? <Loader /> : null} */}
                {service ? (
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <Form.Group>
                          <label>Service Details</label>
                          <Form.Control
                            disabled
                            placeholder="Company"
                            type="text"
                            readOnly
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="3">
                        <Form.Group>
                          <label>Service Price</label>
                          <Form.Control
                            placeholder="Username"
                            type="text"
                            value={service.price}
                            readOnly
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label htmlFor="exampleInputEmail1">
                            Service Name
                          </label>
                          <Form.Control
                            placeholder="Service name"
                            type="email"
                            value={service.name}
                            readOnly
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Rating quantity</label>
                          <Form.Control
                            placeholder="Service Rating"
                            disabled
                            type="text"
                            value={service.ratingsQuantity}
                            readOnly
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Service Ratings</label>
                          <Form.Control
                            placeholder="Service Rating"
                            disabled
                            type="text"
                            value={service.ratingsAverage}
                            readOnly
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <label>Member Details</label>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Name</label>
                          <Form.Control
                            placeholder="Company"
                            type="text"
                            value="John Doe"
                            readOnly
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="6">
                        <Form.Group>
                          <label>Email</label>
                          <Form.Control
                            defaultValue="doe@gmail.com"
                            placeholder="Last Name"
                            type="text"
                            readOnly
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="clearfix"></div>
                  </Form>
                ) : null}
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require('assets/img/photo-1431578500526-4d9613015464.jpeg')
                      .default
                  }
                ></img>
              </div>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ServiceDetails;
