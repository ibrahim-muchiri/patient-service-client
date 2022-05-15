import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUserState, useUserDispatch } from 'hooks';
import { getAllUsers, deleteUser } from 'actions/userActions';
import Loader from 'components/Loader/Loader';

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

function ListUsers() {
  const dispatch = useUserDispatch();
  const usersList = useUserState();
  const { members } = usersList;
  const { loading } = members;

  let count = 1;
  const refreshPage = () => {
    window.location.reload(true);
  };

  const handleClick = async (userId) => {
    let response = await deleteUser(dispatch.deleteDispatch, userId);
    refreshPage();

    console.log('Delete response: ', response);
  };

  useEffect(() => {
    getAllUsers(dispatch.userListDispatch);
  }, [dispatch.userListDispatch]);
  console.log('The delete dispatch: ', dispatch.userListDispatch);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Link to="/admin/add-patient">
              <Button variant="primary" className="my-2">
                Add a new patient
              </Button>
            </Link>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Patients registered</Card.Title>
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
                      <th className="border-0">Role</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* render a list of all members here  */}
                    {members.members
                      ? members.members.map((member, index) => (
                          <tr key={index}>
                            <td>{count++}</td>
                            <td>{member.role}</td>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>
                              <Button variant="info">
                                <Link to={`/admin/user/${member._id}`}>
                                  View User
                                </Link>
                              </Button>
                              {' | '}
                              <Button
                                variant="warning"
                                onClick={() => handleClick(member._id)}
                              >
                                Delete User
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

export default ListUsers;
