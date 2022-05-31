import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from './components/home';
import Quote from './components/quote';
import Calculator from './components/calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Router>
        <h1>Math Magician</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quote">Quote</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator previous="" operand="" current="0" solved={false} />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
