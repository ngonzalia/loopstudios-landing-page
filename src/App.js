// components
import Main from './components/Main';
import Interactive from './components/Interactive';
import OurCreations from './components/OurCreations';
import Footer from './components/Footer';

// styles
import './styles/main.css';

const App = () => {
  return (
    <div className='App'>
      <Main />
      <Interactive />
      <OurCreations />
      <Footer />
    </div>
  );
};

export default App;
