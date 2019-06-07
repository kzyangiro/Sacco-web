import { ADD_SAVINGS_SUCCESS, ADD_SAVINGS_FAIL, USERS_SUCCESS, USERS_FAIL, USER_LOAN_FAIL, USER_LOAN_SUCCESS, USER_LOAN_REPAYMENT_SUCCESS, USER_LOAN_REPAYMENT_FAIL, USER_SAVINGS_SUCCESS, USER_SAVINGS_FAIL } from '../actions/loans_actions';
import initialState from './initialState';
// import { USERS_SUCCESS, USERS_FAIL } from '../actions/user_actions';

export const users = (state = initialState.users, action) => {
  switch (action.type) {
    case USERS_SUCCESS:
      return Object.assign({}, state, { data: action.payload });
    case USERS_FAIL:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}


export const userLoan = (state = initialState.userLoan, action) => {
  switch (action.type) {
    case USER_LOAN_SUCCESS:
      return Object.assign({}, state, { data: action.payload });
    case USER_LOAN_FAIL:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}


export const userLoanRepayment = (state = initialState.userLoanRepayment, action) => {
  switch (action.type) {
    case USER_LOAN_REPAYMENT_SUCCESS:
      return Object.assign({}, state, { data: action.payload });
    case USER_LOAN_REPAYMENT_FAIL:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}

export const userSavings = (state = initialState.userSavings, action) => {
  switch (action.type) {
    case USER_SAVINGS_SUCCESS:
      return Object.assign({}, state, { data: action.payload });
    case USER_SAVINGS_FAIL:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}

export const adduserSavings = (state = initialState.adduserSavings, action) => {
  switch (action.type) {
    case ADD_SAVINGS_SUCCESS:
      return Object.assign({}, state, { data: action.payload });
    case ADD_SAVINGS_FAIL:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}