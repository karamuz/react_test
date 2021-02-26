import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'welcome';
  const link = "www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <Home />
  <a href={link} > Google dot com </a>
      </div>

    </div>
  );
}

export default App;
