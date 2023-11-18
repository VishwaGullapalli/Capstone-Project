import { BrowserRouter } from "react-router-dom";
import { Navbar, Footer, Services, Transactions } from "./components";
import RoutingLinks from "./components/RoutingLinks";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <RoutingLinks />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
