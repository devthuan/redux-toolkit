import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './features/counter/counterSlice'
import usersSlice from './features/counter/usersSlice'
import postsSlice from './features/counter/postsSlice'


export default configureStore({

    reducer: {
        counter: counterSlice,
        users: usersSlice,
        companyList: postsSlice,

    }
})