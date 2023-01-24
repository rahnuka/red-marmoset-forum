import './BarHeader.css'  
import Logo from './logo.jpg'
import Twitter from'./twitter.png'
import Facebook from'./facebook.png'
const Navbar = () => {
  return (
  <div className="topnav">
  <a className="active" href="https://www.redmarmosetstudios.com/">Home</a>
  <a href="https://www.redmarmosetstudios.com/games">Games</a>
  <a href="https://www.redmarmosetstudios.com/team">Team</a>
  <a href="https://www.redmarmosetstudios.com/careers">Careers</a>
  <a href="https://www.redmarmosetstudios.com/contact">Contact</a>
  <a href="/login">Forum</a>
  <a className="navbar-brand" href="/">
      <div className="lo-image">
            <img src={ Logo } className="logo"/>
      </div>
</a>
<a href="https://twitter.com/RedMarmoset" className= "twittericon"> <img src={ Twitter }/></a>
  <a href="https://www.facebook.com/RedMarmosetStudios/?ref=page_internal"> <img src={ Facebook }/></a>
</div>
  );
};
  
export default Navbar;