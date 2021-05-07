import { CREATE_USER, GET_HOME_SUCCESS, GET_HOME_ERROR, SIGN_IN_SUCESS, SIGN_OUT_SUCESS, SIGN_IN_FAILURE } from "../actions/userAction";

const initialState = {
    id: '',
    companyname: '',
    stocksymbol: '',
    marketcap: '',
    currentprice: '',
    home: [],
    isSignedIn: false,
    signedInUser: {},
    message: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                id: action.payload._id,
                name: action.payload.companyname,
                email: action.payload.stocksymbol,
                userid: action.payload.marketcap,
                password: action.payload.currentprice
            }
        case GET_HOME_SUCCESS:
            return {
                ...state,
                home: action.response
            }
        case GET_HOME_ERROR:
            return {
                ...state,
                home: action.error
            }
        case SIGN_IN_SUCESS:
            return {
                ...state,
                isSignedIn: true,
                signedInUser: action.response,
                message: 'Successfully signed in'
            }
        case SIGN_IN_FAILURE:
            return {
                ...state,
                isSignedIn: false,
                signedInUser: {},
                message: action.message
            }
        case SIGN_OUT_SUCESS:
            return {
                ...state,
                isSignedIn: false
            }
        default:
            return state;
    }
}
