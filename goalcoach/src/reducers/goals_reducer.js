export default (state = [], action) =>{
    switch(action.type){
        case 'SET_GOALS':
            return {goals: action.goals};
        default:
            return state;
    }
}

