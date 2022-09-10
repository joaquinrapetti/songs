import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

// Components & Screens
import Navbar from "./components/Navbar";
import ErrorScreen from "./screens/ErrorScreen";
import HomeScreen from "./screens/HomeScreen";
import SongsScreen from "./screens/SongsScreen";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/songs" element={<SongsScreen />} />
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
