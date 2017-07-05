const addReminder = (text) =>{
    return {
        type: 'ADD_REMINDER',
        text
    }
}

export {addReminder};