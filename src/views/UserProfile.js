import React, { useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useUserState, useUserDispatch } from 'hooks';
import { getUserDetails, editUserDetails } from 'actions/userActions';
import Loader from 'components/Loader/Loader';
// react-bootstrap components
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';

function User() {
  const dispatch = useUserDispatch();
  const userData = useUserState();
  const history = useHistory();
  const { userDetails } = userData;

  const { userDetailsDispatch, editUserDetailsDispatch } = dispatch;
  // console.log('The user dispatch details: ', editUserDetailsDispatch);

  let getId = history.location.pathname;
  let newArr = getId.split('/');
  let id = newArr[newArr.length - 1];

  useEffect(() => {
    getUserDetails(userDetailsDispatch, id);
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

                    <Link to="/admin/patients">
                      <Button>Back to users</Button>
                    </Link>
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
