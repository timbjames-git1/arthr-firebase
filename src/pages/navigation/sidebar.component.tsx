import React from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '@pages/routes';

const SideBarNavigation: React.FC = () => {

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
            <ul className="nav flex-column">
            <li className="nav-item">
                <NavLink className="nav-link active" to={routes.home.url}>
                    <span data-feather="home"></span>
                    Dashboard
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={routes.about.url}>
                    <span data-feather="home"></span>
                    About
                </NavLink>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="shopping-cart"></span>
                Products
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="users"></span>
                Customers
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="bar-chart-2"></span>
                Reports
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="layers"></span>
                Integrations
                </a>
            </li> */}
            </ul>

            {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            <a className="link-secondary" href="#" aria-label="Add a new report">
                <span data-feather="plus-circle"></span>
            </a>
            </h6>
            <ul className="nav flex-column mb-2">
            <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Current month
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Last quarter
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Social engagement
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Year-end sale
                </a>
            </li>
            </ul> */}
        </div>
        </nav>
  );
}

export default SideBarNavigation;