import React from 'react';
import { useLocation, NavLink, Link } from 'react-router-dom';

import { Nav } from 'react-bootstrap';

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: 'url(' + image + ')',
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <Link className="simple-text" to="/admin/dashboard">
            Patient Service
          </Link>
        </div>
        <Nav>
          {routes.adminLayout.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li key={key}
                  style={prop.hide ? { display: 'none' } : { display: 'block' }}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
