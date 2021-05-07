export const CREATE_USER = 'CREATE_USER';
export const GET_HOME ='GET_HOME';
export const GET_HOME_SUCCESS ='GET_HOME_SUCCESS';
export const GET_HOME_ERROR = 'GET_HOME_ERROR';
export const SIGN_IN_SUCESS ='SIGN_IN_SUCESS';
export const SIGN_OUT_SUCESS = 'SIGN_OUT_SUCESS';
export const SIGN_IN_VERIFICATION = 'SIGN_IN_VERIFICATION';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const createUser = (params) => {
    return {type: CREATE_USER, payload: params}
}

export const getHome =(params) => {
    return {type: GET_HOME, payload: params}
}

export const getHomeSuccess = (params) => {
    return {type: GET_HOME_SUCCESS, response: params}
}

export const getHomeError = (params) => {
    return {type: GET_HOME_ERROR, error: params}
}
export const signInVerification =(params) => {
    return{type: SIGN_IN_VERIFICATION, request: params}
}

export const signInSuccessAction =(params) => {
    return {type: SIGN_IN_SUCESS, response: params}   
}

export const signInFailure = (params) => {
    return {type: SIGN_IN_FAILURE, response: params}
}

export const signOutSuccessAction =() => {
    return {type: SIGN_OUT_SUCESS}
}
