import React from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '@pages/routes';
import { Home, Info } from '@utils/components/icons/icons.component';

const SideBarNavigation: React.FC = () => {

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink className="nav-link" to={routes.home.url}>
                        <Home />
                        <span data-feather="home"></span>
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={routes.about.url}>
                        <Info />
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
        </nav>
  );
}

export default SideBarNavigation;