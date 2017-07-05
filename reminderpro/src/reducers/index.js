const reminder = (action)=>{
    return {
        text: action.text,
        id: Math.random()
    };
}

const reminders = (state = [], action)=>{
    let reminders = null;
    switch(action.type){
        case('ADD_REMINDER'):
            reminders = [...state, reminder(action)];
            console.log(reminders);
            return reminders;
        default:
            return state;
    }
}

export default reminders;