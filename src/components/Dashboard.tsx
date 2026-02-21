import React, { useState, useMemo } from 'react';
import SummaryCards from './SummaryCards';
import FinancialGravityIndicator from './FinancialGravityIndicator';
import Charts from './Charts';
import SubscriptionList from './SubscriptionList';
import SolarSystem from './solarSystem/SolarSystem';
import AsteroidBelt from './solarSystem/AsteroidBelt/AsteroidBelt';
import { BlackHole } from './solarSystem/BlackHole/BlackHole';
import type { Subscription } from '../types';
import { calculateFinancialMetrics } from '../utils/financialUtils';
import './Dashboard.css';

interface DashboardProps {
  subscriptions: Subscription[];
  level?: 'Low' | 'Improve' | 'Danger' | 'Critical';
}

const Dashboard: React.FC<DashboardProps> = ({ subscriptions }) => {
  const [monthlyIncome, setMonthlyIncome] = useState(3000);

  // Calculate metrics
  const totalMonthlyCost = useMemo(
    () => subscriptions.reduce((sum, s) => sum + s.monthlyCost, 0),
    [subscriptions]
  );

  const metrics = useMemo(
    () => calculateFinancialMetrics(totalMonthlyCost, monthlyIncome),
    [totalMonthlyCost, monthlyIncome]
  );

  // Render appropriate animation based on severity
  const renderAnimation = () => {
    switch (metrics.severity) {
      case 1:
        return <SolarSystem />;
      case 2:
        return <AsteroidBelt />;
      case 3:
        return <BlackHole />;
      default:
        return <SolarSystem />;
    }
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <h1 className="header-title">💰 Subscription Black Hole</h1>
          <p className="header-subtitle">
            Watch your recurring payments orbit a cosmic financial drain
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="dashboard-main">
        {/* Summary cards */}
        <SummaryCards subscriptions={subscriptions} />

        {/* Financial Gravity Indicator */}
        <FinancialGravityIndicator
          monthlyIncome={monthlyIncome}
          totalMonthlyCost={totalMonthlyCost}
          percentage={metrics.percentage}
          severity={metrics.severity}
          level={metrics.level}
          color={metrics.color}
          message={metrics.message}
          emoji={metrics.emoji}
          onIncomeChange={setMonthlyIncome}
        />

        {/* Dynamic Visualization based on Severity */}
        <section className="visualization-section">
          <h2 className="section-title">Financial Gravity Well</h2>
          <div className="visualization-wrapper">
            {renderAnimation()}
          </div>
        </section>

        {/* Charts */}
        <section className="charts-section">
          <Charts subscriptions={subscriptions} />
        </section>

        {/* Subscription list */}
        <section className="list-section">
          <SubscriptionList subscriptions={subscriptions} />
        </section>

        {/* Footer message */}
        <footer className="dashboard-footer">
          <p>
            Insight: Your subscriptions cost <strong>${subscriptions
              .reduce((sum, s) => sum + s.monthlyCost, 0)
              .toFixed(2)}</strong> per month.
            That's <strong>${(subscriptions.reduce((sum, s) => sum + s.monthlyCost, 0) * 12).toFixed(2)}</strong> every year!
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
