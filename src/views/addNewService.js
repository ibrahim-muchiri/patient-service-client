import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { addService } from 'actions/serviceAction';
import { useServiceContext, useServiceDispatch } from 'hooks';
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

function AddNewService() {
  const dispatch = useServiceDispatch();
  const serviceContext = useServiceContext();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState(null);

  const {
    loading,
    errorMessage,
    service
  } = serviceContext;
 
  if(service){
    const { status, data } = service; 
  }

  const handleSubmitService = async (e) => {
    e.preventDefault();

    let response = await addService(dispatch.addServiceDispatch, {
      name,
      price,
    });
    console.log('The response: ', response);
    // setMessage('Member added successfully!');
    setName('');
    setPrice('');

    if (!response) return;
  };

  console.log('The data am expecting: ', serviceContext);

  // console.log('The loading happening: ', loading);
  useEffect(() => {
    //   if (userData) {
    //     setMessage(userData.message);
    //     console.log('the message: ', userData.message);
    //   }
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              {/* {loading && <Loader />} */}
              <Card.Header>
                <Card.Title as="h4">Add a new patient</Card.Title>
              </Card.Header>

              <Card.Body>
                {/* {message ? <h4 style={{ color: 'green' }}>{message}</h4> : null}
                {error ? <p style={{ color: 'red' }}>{error}</p> : null} */}
                <Form>
                  <Row>
                    <Col md="8">
                      <Form.Group>
                        <label>Service Name</label>
                        <Form.Control
                          placeholder="Service Name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <Form.Group>
                        <label>Service Price</label>
                        <Form.Control
                          placeholder="Price"
                          type="text"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={handleSubmitUser}
                  >
                    Add Member
                  </Button> */}
                  <Button
                    className="btn-fill pull-right"
                    onClick={handleSubmitService}
                    type="submit"
                    variant="info"
                    // disabled={loading}
                  >
                    {/* {loading ? <Spinner animation="grow" /> : '  Add Member'} */}
                    Add Service
                  </Button>

                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddNewService;
