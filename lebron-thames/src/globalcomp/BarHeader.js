import './BarHeader.css'  
import Logo from './logo.jpg'
import Twitter from'./twitter.png'
import Facebook from'./facebook.png'
const Navbar = () => {
  return (
  <div className="topnav">
  <div>
  <a className="active" href="https://www.redmarmosetstudios.com/">Home</a>
  </div>
  <div>
  <a href="https://www.redmarmosetstudios.com/games">Games</a>
  </div>
  <div>
  <a href="https://www.redmarmosetstudios.com/team">Team</a>
  </div>
  <div>
  <a href="https://www.redmarmosetstudios.com/careers">Careers</a>
  </div>
  <div>
  <a href="https://www.redmarmosetstudios.com/contact">Contact</a>
  </div>
  <div>
  <a href="/login">Forum</a>
  </div>
  <div>
  <a className="navbar-brand" href="/">
      <div className="lo-image">
            <img src={ Logo } className="logo"/>
      </div>
</a>
</div>
<div>
<a href="https://twitter.com/RedMarmoset" className= "twittericon"> <img src={ Twitter }/></a>
</div>
<div>
  <a href="https://www.facebook.com/RedMarmosetStudios/?ref=page_internal"> <img src={ Facebook }/></a>
</div>
</div>
  );
};
  
export default Navbar;