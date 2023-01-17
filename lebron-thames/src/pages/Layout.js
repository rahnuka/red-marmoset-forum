import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Forum</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

// import React from 'react';
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';
  
// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <Bars />
  
//         <NavMenu>
//           <NavLink to='/about' activeStyle>
//             About
//           </NavLink>
//           <NavLink to='/events' activeStyle>
//             Events
//           </NavLink>
//           <NavLink to='/annual' activeStyle>
//             Annual Report
//           </NavLink>
//           <NavLink to='/team' activeStyle>
//             Teams
//           </NavLink>
//           <NavLink to='/blogs' activeStyle>
//             Blogs
//           </NavLink>
//           <NavLink to='/sign-up' activeStyle>
//             Sign Up
//           </NavLink>
//           {/* Second Nav */}
//           {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//         </NavMenu>
//         <NavBtn>
//           <NavBtnLink to='/signin'>Sign In</NavBtnLink>
//         </NavBtn>
//       </Nav>
//     </>
//   );
// };
  
// export default Navbar;
export default Layout;
