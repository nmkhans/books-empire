import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Review from './pages/Review/Review';
import './App.css';

function App() {
  return (
    <div className="App">
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/review" element={<Review />}/>
		</Routes>
		{/* Footer */}
    </div>
  );
}

export default App;
