import React, { useEffect } from 'react';
import ChartistGraph from 'react-chartist';
import {
  useUserState,
  useUserDispatch,
  useServiceContext,
  useServiceDispatch,
} from 'hooks';
import { getAllUsers } from 'actions/userActions';
import { getAllServices } from 'actions/serviceAction';
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
  Form,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';

function Dashboard() {
  const dispatch = useUserDispatch();
  const serviceDispatch = useServiceDispatch();

  const userStateContext = useUserState();
  const { members } = userStateContext;
  const serviceStateContext = useServiceContext();
  const {
    services: {
      services: { data },
    },
  } = serviceStateContext;

  console.log('users list: ', members);
  console.log('The service list: ', data);

  useEffect(() => {
    getAllUsers(dispatch.userListDispatch);
    getAllServices(serviceDispatch.serviceDispatch);
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Patients Registered</p>
                      <Card.Title as="h4">
                        {members ? members.members.length : null}
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Patients Registered
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Services</p>
                      <Card.Title as="h4">
                        {data ? data.service.length : null}
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Total services offered
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
