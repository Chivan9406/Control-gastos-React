import { BudgetContext } from './Budget.context'
import { budgetReducer, initialState } from '../reducers/budget-reducer'
import { type ReactNode, useMemo, useReducer } from 'react'

type BudgetProviderProps = {
  children: ReactNode
}

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [ state, dispatch ] = useReducer(budgetReducer, initialState)
  const totalExpenses = useMemo(() => state.expenses
    .reduce((total, expense) => expense.amount + total, 0),
    [ state.expenses ])
  const remainingBudget = state.budget - totalExpenses

  return (
    <BudgetContext.Provider
      value={ {
        state,
        dispatch,
        totalExpenses,
        remainingBudget
      } }
    >
      { children }
    </BudgetContext.Provider>
  )
}
