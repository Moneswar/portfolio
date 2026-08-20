import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CursorGlow from "./components/shared/CursorGlow";
import ScrollProgressBar from "./components/shared/ScrollProgressBar";
import HomePage from "./pages/HomePage";
import FarmDirectDetail from "./pages/FarmDirectDetail";
import SmartHealthcareDetail from "./pages/SmartHealthcareDetail";

/**
 * App
 * Sets up BrowserRouter routes for the main portfolio and dedicated project detail pages.
 */
function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-(--color-bg) text-(--color-text)">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ScrollProgressBar />
                <CursorGlow />
                <Navbar />
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route path="/projects/farmdirect" element={<FarmDirectDetail />} />
          <Route
            path="/projects/smart-healthcare"
            element={<SmartHealthcareDetail />}
          />
          {/* Catch-all fallback */}
          <Route
            path="*"
            element={
              <>
                <ScrollProgressBar />
                <CursorGlow />
                <Navbar />
                <HomePage />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
