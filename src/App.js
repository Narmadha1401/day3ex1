import './App.css';
import Head1 from './components/Head1';
import Nav from './components/Nav';
import { Cart } from './components/Cart';
import Section1 from './components/Section1';

function App() {
  return (
    <div className="App">
      <Head1/>
      <Nav/>
      <Section1/>
      <Cart/>
    </div>
  );
}

export default App;
