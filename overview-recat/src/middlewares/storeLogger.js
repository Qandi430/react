const logger = store => next => action =>{
    console.group(action.type)
    console.info('dispatch',action)
    next(console)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
}

export default logger;