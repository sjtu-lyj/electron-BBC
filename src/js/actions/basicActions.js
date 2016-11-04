export default (dispatch)=>{
  return {
    log:(text)=>{
      dispatch({
        type:'CONSOLE_LOG',
        payload:text
      })
    },

    error:(text)=>{
      dispatch({
        type:'CONSOLE_ERROR',
        payload:text
      })
    }
  }
}
