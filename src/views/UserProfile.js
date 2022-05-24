import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useUserState, useUserDispatch } from 'hooks';
import { getUserDetails } from 'actions/userActions';
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

function User() {
  const dispatch = useUserDispatch();
  const userData = useUserState();
  const history = useHistory();
  const { userDetails } = userData;

  let getId = history.location.pathname;
  let newArr = getId.split('/');
  let id = newArr[newArr.length - 1];
  useEffect(() => {
    getUserDetails(dispatch.userDetailsDispatch, id);
  }, [getId]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            {userDetails.user ? (
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Edit Profile</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <Form.Group>
                          <label>User Role</label>
                          <Form.Control
                            disabled
                            placeholder="Company"
                            type="text"
                            defaultValue={userDetails.user.patient.role}
                          ></Form.Control>
                        </Form.Group>
                      </Col>

                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Form.Control
                            placeholder="Email"
                            type="email"
                            defaultValue={userDetails.user.patient.email}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Full Name</label>
                          <Form.Control
                            placeholder="Company"
                            type="text"
                            defaultValue={userDetails.user.patient.name}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button
                      className="btn-fill pull-right"
                      // onClick={handleSubmitUser}
                      type="submit"
                      variant="info"
                      // disabled={loading}
                    >
                      {/* {loading ? <Spinner animation="grow" /> : '  Edit User'} */}
                      Edit User
                    </Button>
                    {/* <Row
                    <Col md="12">
                      <Form.Group>
                        <label>About Me</label>
                        <Form.Control
                          cols="80"
                          defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                          that two seat Lambo."
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row> */}
                    {/* <Button
                      className="btn-fill pull-right"
                      type="submit"
                      variant="info"
                    >
                      Update Profile
                    </Button> */}
                    <div className="clearfix"></div>
                  </Form>
                </Card.Body>
              </Card>
            ) : null}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
