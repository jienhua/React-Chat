import React from 'react'
import {connect} from 'react-redux'
// import styles from './App.css'
import './common.css'
import MessageForm from './MessageForm/MessageForm'
import Messages from './Messages/Messages'
import * as actionCreators from '../action_creator'

class App extends React.Component{

    constructor(){
        super()
        this.getMsgs = this.getMsgs.bind(this)
    }

    getMsgs(){
        return this.props.msgs || []
    }

    render() {
        return (
        	<div>
        		{this.getMsgs().map((v, i)=>{
        			return <Messages key={i} msg={v} />
        		})}
        		<MessageForm sendMsg={this.props.sendMsg}/>
        	</div>
        )
    }
}


function mapStateToProps(state){
    console.log(state.toJS())
    console.log('mapStateToProps')
    return {
        msgs: state.get('msgs')
    }
}

connect(mapStateToProps)(App)

export const AppContainer = connect(
    mapStateToProps,
    actionCreators
)(App)