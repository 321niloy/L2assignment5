import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16">
        {" "}
        {/* Adjust pt-16 as needed for your Navbar height */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
