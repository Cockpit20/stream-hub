import './App.css';
import Header from './Components/Header';
import RecommendedVideos from './Components/RecommendedVideos';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__page'>
        <Sidebar />
        <RecommendedVideos />
      </div>


    </div>
  );
}

export default App;
