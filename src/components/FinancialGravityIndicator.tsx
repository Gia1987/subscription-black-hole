import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FinancialGravityIndicator.css';

interface FinancialGravityIndicatorProps {
  monthlyIncome: number;
  totalMonthlyCost: number;
  percentage: number;
  severity: 1 | 2 | 3;
  level: 'Healthy' | 'Moderate' | 'Unsustainable';
  color: string;
  message: string;
  emoji: string;
  onIncomeChange: (income: number) => void;
}

const FinancialGravityIndicator: React.FC<FinancialGravityIndicatorProps> = ({
  monthlyIncome,
  totalMonthlyCost,
  percentage,
  severity,
  level,
  color,
  message,
  emoji,
  onIncomeChange,
}) => {
  const [inputValue, setInputValue] = useState(monthlyIncome.toString());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setInputValue(value);
  };

  const handleInputBlur = () => {
    const numValue = parseInt(inputValue, 10) || 0;
    onIncomeChange(numValue);
  };

  return (
    <div className="financial-gravity-indicator">
      <div className="indicator-card">
        {/* Income Input */}
        <div className="income-section">
          <label htmlFor="income-input" className="income-label">
            Monthly Net Income
          </label>
          <div className="income-input-wrapper">
            <span className="currency-symbol">$</span>
            <input
              id="income-input"
              type="text"
              className="income-input"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              placeholder="3000"
            />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-label">Monthly Spent</div>
            <div className="metric-value">${totalMonthlyCost.toFixed(2)}</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Of Income</div>
            <div className="metric-value">{percentage.toFixed(1)}%</div>
          </div>
        </div>

        {/* Health Status */}
        <div className="health-status" style={{ borderColor: color }}>
          <span className="health-emoji">{emoji}</span>
          <div className="health-info">
            <div className="health-level" style={{ color }}>
              {level}
            </div>
            <div className="health-message">{message}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-section">
          <div className="progress-bar-container">
            <motion.div
              className="progress-bar"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(percentage, 100)}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                background: `linear-gradient(90deg, ${color}, ${color}dd)`,
              }}
            />
          </div>
          <div className="progress-markers">
            <div className="marker" style={{ left: '10%' }}>
              10%
            </div>
            <div className="marker" style={{ left: '20%' }}>
              20%
            </div>
          </div>
        </div>

        {/* Warning Text */}
        {severity > 1 && (
          <div className="warning-text" style={{ color }}>
            ⚠️ Consider reducing subscriptions to maintain financial health
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialGravityIndicator;
