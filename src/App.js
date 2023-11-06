import './App.css';
import Navigation from './customer/Components/Navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';

function App() {
  return (
   <div className=''>
    <Navigation/>
    <div>
      <HomePage/>
    </div>
   </div>
  );
}

export default App;
