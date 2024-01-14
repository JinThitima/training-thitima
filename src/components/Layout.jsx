import React from "react";
import { NavLink } from "react-router-dom";
const Layout = ({ children }) => (
  <div className="layout">
    <header>
      <nav className="navbar">
        <div className="navbar-inside">
          <span className="brand">
            <NavLink to="/">NVC Training Center</NavLink>
          </span>
          <ul className="navbar-nav">
            <li>
              <NavLink to="/" activeClassName="active">
                หน้าหลัก
              </NavLink>
            </li>
            <li>
              <NavLink to="/course" activeClassName="active">
                หลักสูตรที่เปิดสอน
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                ติดต่อ
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>&copy;Copy ฐิติมา พันธ์ุไกร 66402040909</p>
    </footer>
  </div>
);
export default Layout;
