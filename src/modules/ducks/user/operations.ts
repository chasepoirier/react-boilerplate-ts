// import api from '../../api'
import * as actions from './actions'

const loginRequest = actions.requestLogin()

// const submitLoginRequest = credentials => dispatch => {
//   dispatch(loginRequest).then(() => {
//     api.user
//       .login(credentials)
//       .then(user => dispatch(actions.userLoginSuccess(user)))
//       .catch(error => dispatch(actions.userLoginFail(error)))
//   })
// }

export { loginRequest /*submitLoginRequest*/ }
