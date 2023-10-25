import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './componenti/CustomNavbar';
import MtFooter from './componenti/MtFooter';
import Welcome from './componenti/Welcome';
import Booklist from './componenti/Booklist';
import Scifi from './data/scifi.json'


function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Welcome/>
      <Booklist arrayOfBooks={Scifi}/>
      <MtFooter/>
    </div>
  );
}

export default App;
