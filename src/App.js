import './App.scss';
import HomePageRouter from './components/HomePageRouter';

require('dotenv').config()

function App() {
  return (
    <HomePageRouter/>
  );
}

export default App;
