//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/menu';
import Section from './components/section';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
