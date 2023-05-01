import React, { useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage"

const BudgetsContext = React.createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  function getBudgetExpenses(budgetId: String) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }
  function addExpense({ description, amount, budgetId }: { description: string, amount: number, budgetId: string }) {
    setExpenses((prevExpenses) => {
      return [
        ...prevExpenses,
        { id: prevExpenses.length + 1, description, amount, budgetId },
      ];
    });
  }
  function addBudget() {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: prevBudgets.length + 1, name, max }];
    });
  }
  function deleteBudget({ id }: {id: number}) {
    setBudgets(prevBudgets => {
      return prevBudgets.filter(budget => budget.id !== id )
    })
  }
  function deleteExpense({ id }: {id: number}) {
    setExpenses(prevExpenses => {
      return prevExpenses.filter(expense => expense.id !== id )
    })
  }

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
