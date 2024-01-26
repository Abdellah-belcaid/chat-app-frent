// App.js

import { BrowserRouter } from "react-router-dom";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import AppRoutes from "src/routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="m-1 h-screen flex flex-col scrollbar-hide">
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
