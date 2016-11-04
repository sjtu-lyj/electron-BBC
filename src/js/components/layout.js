import {connect} from 'react-redux'
import React, { PropTypes } from 'react'
import mapDispatchToProps from '../actions/basicActions'


@connect((store)=>{
  return{
    bs:store.basicStore
  }
},mapDispatchToProps)
class Layout extends React.Component {
  render () {
    return(
      <div>
        <button onClick={()=>this.props.log('Hola!')}>Log Default Msg</button>
        <button onClick={()=>this.props.error('Adios!')}>Log Error Default Msg</button>
      </div>
    )
  }
}

export default Layout;
