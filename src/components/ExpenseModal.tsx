import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

import ExpenseForm from './ExpenseForm'
import { useBudget } from '../hooks/use-budget'

export default function ExpenseModal() {
  const { state, dispatch } = useBudget()

  return (
    <>
      <div className="fixed right-5 bottom-5 flex items-center justify-center">
        <button
          type="button"
          onClick={ () => dispatch({ type: 'show-modal' }) }
        >
          <PlusCircleIcon className="w-16 h-16 text-blue-600 rounded-full cursor-pointer" />
        </button>
      </div>

      <Dialog
        className="relative z-50"
        open={ state.modal }
        onClose={ () => dispatch({ type: 'close-modal' }) }
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/75 duration-300 ease-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel
            className="w-full max-w-3xl space-y-4 bg-white p-4 rounded-lg duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
            transition
          >
            <ExpenseForm />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
