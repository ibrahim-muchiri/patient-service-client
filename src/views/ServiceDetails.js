import React, { useEffect, useReducer } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useServiceContext, useServiceDispatch } from 'hooks';
import { getSingleService } from 'actions/serviceAction';
import Loader from 'components/Loader/Loader';

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
  const dispatch = useServiceDispatch();
  const servicesContext = useServiceContext();
  const history = useHistory();

  const { serviceDetails } = servicesContext;

  const { loading, error, service } = serviceDetails;

  let getId = history.location.pathname;
  let newArr = getId.split('/');
  let id = newArr[newArr.length - 1];
  let serviceData = {};
  if (service) {
    serviceData = { ...service.data.service };
  }
  console.log('The service loading: ', loading);
  console.log('The service details: ', serviceData);

  useEffect(() => {
    getSingleService(dispatch.serviceDetailDispatch, id);
  }, [id]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Contribution Details</Card.Title>
              </Card.Header>
              {loading ? <Loader /> : null}
              <Card.Body>
                {serviceData ? (
                  <Form>
                    <Row>
                      <Col className="px-1" md="3">
                        <Form.Group>
                          <label>Service Price</label>
                          <Form.Control
                            placeholder="Username"
                            type="text"
                            defaultValue={serviceData.price}
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
                            defaultValue={serviceData.name}
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
                            defaultValue={serviceData.ratingsQuantity}
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
                            defaultValue={serviceData.ratingsAverage}
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
        </Row>
      </Container>
    </>
  );
}

export default ServiceDetails;
