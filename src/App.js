import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './componenti/CustomNavbar';
import MtFooter from './componenti/MtFooter';
import Welcome from './componenti/Welcome';
import AllBook from './componenti/AllBooks';


function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Welcome/>
      <AllBook/>
      <MtFooter/>
    </div>
  );
}

export default App;
