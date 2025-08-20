import { BudgetContext } from '../context/Budget.context'
import { useContext } from 'react'

export const useBudget = () => {
  const context = useContext( BudgetContext )
  if ( !context ) throw new Error( 'useBudget must be used within a BudgetProvider' )
  return context
}
