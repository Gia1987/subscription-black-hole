import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Home/Home";
import Dashboard from "./components/Dashboard";
import { mockSubscriptionsImprove } from "./mockData/mockDataImprove";
import SolarSystem from "./components/solarSystem/SolarSystem";
import { BlackHole } from "./components/solarSystem/BlackHole/BlackHole";
import { mockSubscriptionsLow } from "./mockData/mockDataLow";
import { mockSubscriptionsCritical } from "./mockData/mockDataCritical";
import RocketLaunch from "./Home/Launch/Launch";

function App() {
    const levels = ["low", "improve", "danger", "critical"];

    const calculateSpendingLevel = (subscriptions_spending: number) => {
        if (subscriptions_spending < 0.3) {
            return 0; // Low
        } else if (subscriptions_spending < 0.4) {
            return 1; // Improve
        } else if (subscriptions_spending < 0.5) {
            return 2; // Danger
        } else {
            return 3; // Critical
        }
    };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/launch" element={<RocketLaunch />} />
        <Route path="/subscriptions-solar-system-dashboard/Low" element={<Dashboard subscriptions={mockSubscriptionsLow}/>} />
        <Route path="/subscriptions-solar-system-dashboard/Improve" element={<Dashboard subscriptions={mockSubscriptionsImprove} level="Improve" />} />
        <Route path="/subscriptions-solar-system-dashboard/Danger" element={<Dashboard subscriptions={mockSubscriptionsCritical} level="Danger" />} />
        <Route path="/subscriptions-solar-system-dashboard/Critical" element={<Dashboard subscriptions={mockSubscriptionsCritical} level="Critical" />} />
        <Route path="/subscriptions-solar-system" element={<SolarSystem />} />
        <Route path ="/subscriptions-solar-system/danger-black-hole" element={<BlackHole />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;