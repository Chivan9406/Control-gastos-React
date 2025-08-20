import type { BudgetActions, BudgetState } from '../reducers/budget-reducer'
import { createContext, type Dispatch } from 'react'

type BudgetContextProps = {
  state: BudgetState
  dispatch: Dispatch<BudgetActions>
  totalExpenses: number
  remainingBudget: number
}

export const BudgetContext = createContext<BudgetContextProps>(null!)
