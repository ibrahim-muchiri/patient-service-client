import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useServiceContext, useServiceDispatch } from 'hooks';
import { getSingleService, editServiceDetails } from 'actions/serviceAction';
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

function EditService() {
  const dispatch = useServiceDispatch();
  const servicesContext = useServiceContext();
  const history = useHistory();

  const { serviceDetails } = servicesContext;

  const { loading, error, service } = serviceDetails;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  let getId = history.location.pathname;
  let newArr = getId.split('/');
  let id = newArr[newArr.length - 1];
  let serviceData = {};
  if (service) {
    serviceData = { ...service.data.service };
  }
  console.log('The service loading: ', loading);
  console.log('The service details: ', serviceData);

  const handleEditService = async (e) => {
    e.preventDefault();

    let response = await editServiceDetails(dispatch.editServiceDispatch, id, {
      name,
      price,
    });
    // setMessage('Member added successfully!');
    console.log('we are here');
    if (!response) return;
    console.log('The response from the server: ', response);
  };

  useEffect(() => {
    getSingleService(dispatch.serviceDetailDispatch, id);
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Service Details</Card.Title>
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
                            onChange={(e) => setPrice(e.target.value)}
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
                            onChange={(e) => e.target.value}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      className="btn-fill pull-right"
                      onClick={handleEditService}
                      type="submit"
                      variant="info"
                      // disabled={loading}
                    >
                      {/* {loading ? <Spinner animation="grow" /> : '  Edit User'} */}
                      Edit Service
                    </Button>
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

export default EditService;
