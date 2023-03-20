import './App.css';
import DealBanner from './components/DealBanner';
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
    </div>
  );
}

export default App;
