import {SERVICES_REQUEST,SERVICES_SUCCESS,SERVICES_FAILURE}  from "../actions/servicesAction";

const initialState = {
    isFetching: false,
    services: []
};

export  const services = (state = initialState, action) => {
    switch (action.type){
        case SERVICES_REQUEST:
            return {
                ...initialState,
                isFetching:true
            }
        case SERVICES_SUCCESS:
            return {
                isFetching:false,
                services:[...action.services]
            }
        case SERVICES_FAILURE:
            return {
                isFetching:false,
                services:[...state]
            }
        default:
            return state
    }
}
