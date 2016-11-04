const initState={
  counter:0
}

export default (state=initState,action)=>{
  switch(action.type){
    case 'CONSOLE_LOG':
      state.counter=state.counter+1
      console.log(`Log #${state.counter} : ${action.payload}`)
      break;
    case 'CONSOLE_ERROR':
      state.counter=state.counter-1
      console.error(`Log #${state.counter} : ${action.payload}`)
      break;
    default:
      //console.error('Action undefined')
  }
  return state
}
