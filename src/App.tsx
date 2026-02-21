import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Home/Home";
import Dashboard from "./components/Dashboard";
import { mockSubscriptions } from "./mockData";
import Animation from "./components/solarSystem/SolarSystem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/subscriptions-solar-system" element={<Dashboard subscriptions={mockSubscriptions} />} />
        <Route path="/subscriptions-solar-system" element={<Animation />} />
        <Route path ="/subscriptions-solar-system/danger-black-hole" element={<Animation />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;