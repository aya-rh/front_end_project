import './App.css';
import DealBanner from './components/DealBanner';
import ExtraInfo from './components/ExtraInfo';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import SubscribeForm from './components/SubscribeForm';
import LandingPageContainer from './containers/LandingPageContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <DealBanner/>
      <LandingPageContainer/>
      <SubscribeForm/>
      <ExtraInfo/>
      <Footer/>
    </div>
  );
}

export default App;
