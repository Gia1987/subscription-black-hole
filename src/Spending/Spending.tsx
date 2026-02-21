import { useState } from "react";
import type { Subscription } from "../types";

function Spending() {
    const levels = ["Low", "Improve", "Danger", "Critical"];

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

    function getTotalSpending(subscriptions: Subscription[], income: number): number {
        const total = subscriptions.reduce((sum, sub) => sum + sub.monthlyCost, 0);
        return total / income;
    }



}

export default Spending;