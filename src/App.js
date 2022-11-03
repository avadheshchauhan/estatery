import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import PageRoute from './route/PageRoute';

function App() {
  return (
    <div className="App">
      <Header />
      <PageRoute />
      <Footer />
    </div>
  );
}

export default App;
