import './App.css';
import Header from './components/Header/Header';
import Holder from './components/holder/Holder';
import Footer from './components/Footer/Footer';


function App() {


  return (
    <div className='bg'>
      <div className='header'>
        <Header />
      </div>
      <div className='holder'>
        <Holder/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
