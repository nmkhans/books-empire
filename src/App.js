import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Review from './pages/Review/Review';
import DashBoard from './pages/DashBoard/DashBoard';
import NotFound from './pages/NotFound/NotFound';
import Blogs from './pages/Blogs/Blogs';
import './App.css';

function App() {
  return (
    <div className="App">
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/review" element={<Review />}/>
			<Route path="/dash-board" element={<DashBoard />} />
			<Route path="/blogs" element={<Blogs />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
		{/* Footer */}
    </div>
  );
}

export default App;
