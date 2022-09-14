// images
import Logo from '../images/logo.svg'
import Hamburger from '../images/icon-hamburger.svg'
import Close from '../images/icon-close.svg'


export default function Nav() {
  
  const deadLink = '#';

  const showLinks = () => {
    const close = document.getElementById('close');
    const hamburger = document.getElementById('hamburger');
    const links = document.getElementById('links')
    close.classList.toggle('hide');
    hamburger.classList.toggle('hide');
    links.classList.toggle('hide');
  }

  return (

    <nav className='nav'>

      <img
        src={Logo}
        alt='logo'
        className='nav__logo' />

      <div className='nav__content'>
        <div className='nav__toggles' onClick={showLinks}>
          <img
            src={Hamburger}
            alt='Hamburguer'
            className='nav__toggles-hamburger slide-in-bck-center'
            id='hamburger' />
          <img
            src={Close}
            alt='Close'
            className='nav__toggles-close hide scale-in-center'
            id='close' />
        </div>

        <div className='nav__links hide scale-in-ver-top' id='links'>
          <a className='nav__links--link josefin-sans w-300 white' href={deadLink} onClick={showLinks}>About</a>
          <a className='nav__links--link josefin-sans w-300 white' href={deadLink} onClick={showLinks}>Careers</a>
          <a className='nav__links--link josefin-sans w-300 white' href={deadLink} onClick={showLinks}>Events</a>
          <a className='nav__links--link josefin-sans w-300 white' href={deadLink} onClick={showLinks}>Products</a>
          <a className='nav__links--link josefin-sans w-300 white' href={deadLink} onClick={showLinks}>Support</a>
        </div>
      </div>
    </nav>
  );
};