import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from '../store/counter'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => dispatch(incrementByAmount(1))}>+</button>
      <strong>{count}</strong>
      <button onClick={() => dispatch(incrementByAmount(-1))}>-</button>
    </>
  )
}
