import './App.css';
import Header from './Components/Header';
import RecommendedVideos from './Components/RecommendedVideos';
import SearchPage from './Components/SearchPage';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className='app__page'>
          <Sidebar />

          <Routes>
            <Route path='/' element={<RecommendedVideos />} />
            <Route path='/search/:searchTerm' element={<SearchPage />} />
          </Routes>


        </div>
      </Router>


    </div>
  );
}

export default App;
