export default (state = {}, action) =>{
    switch(action.type){
        case 'LOG_USER':
            return {email: action.email};
        default:
            return state;
    }
}

