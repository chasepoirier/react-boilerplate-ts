// import * as types from './types'

const initialState = {
  loading: false,
  login: {
    errors: null
  },
  user: null
}

const user = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}

export default user
