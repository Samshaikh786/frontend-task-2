import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import Chat from './Component/Chat/Chat';
// import MessageList from './Component/Message/MessageList';
import Sidebar from './Component/Sidebar/Sidebar';
// import TopBar from './Component/Top/TopBar';
import Home from './Component/Other/Home';
import Network from './Component/Other/Network';
import Jobs from './Component/Other/Jobs';
import Topbar from './Component/Top/TopBar';
import Messages from './Component/Message/Messages';




function App() {
  return (
    <Router>
      <div className="flex h-screen">
      
        <Sidebar />

        <div className="flex-1 flex flex-col bg-gray-100">
          <Topbar />

          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/messages/*" element={<Messages />} />
              <Route path="/documents" element={<Network />} />
              <Route path="/users" element={<Jobs />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
   
  );
}

export default App;
