import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Market from "./Market";
import Exchange from "./Exchange";
import Login from "./Login";
import Error from "./Error";
import Create from "./Create";

const RoutingLinks = () => (
  <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/market" element={<Market />} />
    <Route path="/exchange" element={<Exchange />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Error />} />
    <Route path="/create" element={<Create />} />
  </Routes>
);

export default RoutingLinks;
