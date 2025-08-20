import 'react-swipeable-list/dist/styles.css'
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list'
import { useMemo } from 'react'

import AmountDisplay from './AmountDisplay'
import type { Expense } from '../types'
import { categories } from '../data/categories'
import { formatDate } from '../helpers'
import { useBudget } from '../hooks/use-budget'

interface ExpenseDetailProps {
  expense: Expense
}

function ExpenseDetail({ expense }: ExpenseDetailProps) {
  const categoryInfo = useMemo(() => categories
    .filter(category => category.id === expense.category)[0], [ expense ])

  const { dispatch } = useBudget()

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={ () => dispatch({ type: 'get-expense-by-id', payload: { id: expense.id } }) }
      >Actualizar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={ true }
        onClick={ () => dispatch({ type: 'remove-expense', payload: { id: expense.id } }) }
      >Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={ leadingActions() }
        trailingActions={ trailingActions() }
      >
        <div
          className="bg-white shadow-lg p-5 w-full border-b border-gray-200 flex gap-5 items-center select-none cursor-grab">
          <div>
            <img
              src={ `/icono_${ categoryInfo.icon }.svg` }
              alt={ `Ícono ${ categoryInfo.icon }` }
              className="w-20"
              draggable={false}
            />
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-sm font-bold uppercase text-slate-500">{ categoryInfo.name }</p>
            <p>{ expense.expenseName }</p>
            <p className="text-slate-600 text-sm">{ formatDate(expense.date!.toString()) }</p>
          </div>
          <AmountDisplay
            amount={ expense.amount }
          />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default ExpenseDetail
