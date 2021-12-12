import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { counterSlice } from './counter'
import { userSlice } from './user'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export default store
