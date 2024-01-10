// App.js
import React from "react";
import AppRoutes from "../routes/AppRoutes";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="m-1 h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <AppRoutes />
        {/* End of Main Content */}

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
