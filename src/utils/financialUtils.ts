interface FinancialMetrics {
  totalCost: number;
  percentage: number;
  severity: 1 | 2 | 3;
  level: 'Healthy' | 'Moderate' | 'Unsustainable';
  color: string;
  message: string;
  emoji: string;
}

/**
 * Calculate financial health severity based on subscription spending as percentage of income
 * Severity 1 (Healthy): ≤ 10% of income
 * Severity 2 (Moderate): 11-20% of income
 * Severity 3 (Unsustainable): > 20% of income
 */
export function calculateFinancialMetrics(
  totalMonthlyCost: number,
  monthlyIncome: number
): FinancialMetrics {
  // Avoid division by zero
  if (monthlyIncome <= 0) {
    return {
      totalCost: totalMonthlyCost,
      percentage: 0,
      severity: 1,
      level: 'Healthy',
      color: '#10b981',
      message: 'Set your monthly income to calculate health',
      emoji: '🎯',
    };
  }

  const percentage = (totalMonthlyCost / monthlyIncome) * 100;

  if (percentage <= 10) {
    return {
      totalCost: totalMonthlyCost,
      percentage,
      severity: 1,
      level: 'Healthy',
      color: '#10b981',
      message: 'Your subscriptions are well within budget 🌟',
      emoji: '🌍',
    };
  }

  if (percentage <= 20) {
    return {
      totalCost: totalMonthlyCost,
      percentage,
      severity: 2,
      level: 'Moderate',
      color: '#f59e0b',
      message: 'Your subscriptions are spiraling. Watch out! ⚠️',
      emoji: '☄️',
    };
  }

  return {
    totalCost: totalMonthlyCost,
    percentage,
    severity: 3,
    level: 'Unsustainable',
    color: '#ef4444',
    message: 'Critical! Your subscriptions are consuming your income 🕳️',
    emoji: '🌌',
  };
}
