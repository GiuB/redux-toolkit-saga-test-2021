import { createSlice, createAction } from '@reduxjs/toolkit'

export const sagaUserFetchList = {
  start: createAction('user/fetchList'),
  success: createAction('user/fetchList/success'),
  failure: createAction('user/fetchList/failure'),
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    list: {
      data: [],
      loading: false,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sagaUserFetchList.start, (state, action) => {
      state.list = {
        data: [],
        loading: true,
        error: null,
      }
    })
    builder.addCase(sagaUserFetchList.success, (state, action) => {
      state.list = {
        data: action.payload,
        loading: false,
        error: null,
      }
    })
    builder.addCase(sagaUserFetchList.failure, (state, action) => {
      state.list = {
        ...state.list,
        error: action.payload,
      }
    })
  },
})
