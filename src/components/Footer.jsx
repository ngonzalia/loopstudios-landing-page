// logos
import Logo from '../images/logo.svg';
import fb from '../images/icon-facebook.svg';
import tw from '../images/icon-twitter.svg';
import pt from '../images/icon-pinterest.svg';
import ig from '../images/icon-instagram.svg';


export default function Footer() {

  const deadLink = '#';

  return (
    <footer className='footer'>
      <div className='footer__logo-container'>
        <img
          src={Logo}
          alt='logo'
          className='footer__logo'
        />
      </div>
      
      <div className='footer__links'>
        <ul className='footer__links-list'>
          <li><a href={deadLink} className='link alata w400 white'>About</a></li>
          <li><a href={deadLink} className='link alata w400 white'>Careers</a></li>
          <li><a href={deadLink} className='link alata w400 white'>Events</a></li>
          <li><a href={deadLink} className='link alata w400 white'>Products</a></li>
          <li><a href={deadLink} className='link alata w400 white'>Support</a></li>
        </ul>
      </div>

      <div className='footer__social'>
        <div className='footer__social-container'>
          <img
            src={fb}
            alt='facebook icon' />
        </div>
        <div className='footer__social-container'>
          <img
            src={tw}
            alt='twitter icon' />
        </div>
        <div className='footer__social-container'>
          <img
            src={pt}
            alt='pinterest icon' />
        </div>
        <div className='footer__social-container'>
          <img
            src={ig}
            alt='instgram icon' />
        </div>
      </div>

      <p className='footer__text link alata w400 white'>
        © 2021 Loopstudios. All rights reserved.
      </p>
    </footer>
  );
}