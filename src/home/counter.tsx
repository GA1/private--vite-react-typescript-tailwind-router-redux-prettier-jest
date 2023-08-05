// import React from 'react'
import type { RootState } from '../state/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../state/slices/counter-slice.js'

export const Counter = ({ title }: { title: string }) => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='flex flex-row gap-4'>
      <span>{title}</span>
      <button aria-label='Increment value' onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  )
}
