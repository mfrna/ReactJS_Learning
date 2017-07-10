export function LogUser(email){
    return {
        type: 'LOG_USER',
        email
    }
}

export function SetGoals(goals){
    return {
        type: 'SET_GOALS',
        goals
    }
}