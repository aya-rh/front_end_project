import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import LandingPageContainer from './containers/LandingPageContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <LandingPageContainer/>
    </div>
  );
}

export default App;
