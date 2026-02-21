import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Home/Home";
import Dashboard from "./components/Dashboard";
import { mockSubscriptions } from "./mockData";
import SolarSystem from "./components/solarSystem/SolarSystem";
import { BlackHole } from "./components/solarSystem/BlackHole/BlackHole";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/subscriptions-solar-system-dashboard" element={<Dashboard subscriptions={mockSubscriptions} />} />
        <Route path="/subscriptions-solar-system" element={<SolarSystem />} />
        <Route path ="/subscriptions-solar-system/danger-black-hole" element={<BlackHole />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;