import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useServiceContext, useServiceDispatch } from 'hooks';
import { getAllServices, deleteService } from 'actions/serviceAction';
import Loader from 'components/Loader/Loader';

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
const servs = [
  {
    ratingsAverage: 5,
    ratingsQuantity: 0,
    role: 'admin',
    _id: '6255937149fe3c1dac557ca0',
    name: 'In-Patient',
    price: 1200,
    __v: 0,
  },
  {
    ratingsAverage: 5,
    ratingsQuantity: 0,
    role: 'patient',
    _id: '6263dbe9a7436d11dc0dd2f4',
    name: 'polio',
    price: 10000,
    __v: 0,
  },
];
function Services() {
  const dispatch = useServiceDispatch();
  const servicesContext = useServiceContext();
  const {
    loading,
    services: { data },
  } = servicesContext.services;

  console.log('The laoding status: ', loading);
  console.log('The service context: ', data);

  let count = 1;
  useEffect(() => {
    getAllServices(dispatch.serviceDispatch);
  }, [dispatch.serviceDispatch]);
  const refreshPage = () => {
    window.location.reload(true);
  };
  const handleClick = async (serviceId) => {
    let response = await deleteService(dispatch.deleteDispatch, serviceId);
    // refreshPage();

    console.log('Delete response: ', response);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Link to="/admin/add-patient">
                <Button variant="primary" className="my-2">
                  Add a new service
                </Button>
              </Link>
              <Card.Header>
                <Card.Title as="h4">List of all available services</Card.Title>
                {/* <p className="card-category">
                  Here is a subtitle for this table
                </p> */}
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                {loading ? <Loader /> : null}
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Price</th>
                      <th className="border-0">Ratings Quantity</th>
                      <th className="border-0">Ratings Average</th>
                      <th className="border-0">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data
                      ? data.service.map((serve) => (
                          <tr key={serve._id}>
                            <td>{count++}.</td>
                            <td>{serve.name}</td>
                            <td>{serve.price}</td>
                            <td>{serve.ratingsAverage}</td>
                            <td>{serve.ratingsQuantity}</td>
                            <td>
                              <Button variant="info">
                                <Link
                                  to={`/admin/service-details/${serve._id}`}
                                >
                                  Details
                                </Link>
                              </Button>
                              {' | '}
                              <Button
                                variant="warning"
                                onClick={() => handleClick(serve._id)}
                              >
                                Delete service
                              </Button>
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;
