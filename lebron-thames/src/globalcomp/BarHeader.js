import './BarHeader.css'  
import Logo from './logo.jpg'
const Navbar = () => {
  return (
  <div class="topnav">
  <a class="active" href="https://www.redmarmosetstudios.com/">Home</a>
  <a href="https://www.redmarmosetstudios.com/games">Games</a>
  <a href="https://www.redmarmosetstudios.com/team">Team</a>
  <a href="https://www.redmarmosetstudios.com/careers">Careers</a>
  <a href="https://www.redmarmosetstudios.com/contact">Contact</a>
  <a href="#forum">Forum</a>
  <a class="navbar-brand" href="/">
      <div class="logo-image">
            <img src={ Logo } class="img-fluid"/>
      </div>
</a>
</div>
  );
};
  
export default Navbar;