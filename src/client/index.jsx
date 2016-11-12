import React from 'react'
import { render } from 'react-dom'
import {List, fromJS} from 'immutable'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import io from 'socket.io-client'
import reducer from './reducer'
import {setState} from './action_creator'
// import remoteActionMiddleware from './remote_action_middleware'
import * as actions from './action_creator'

import {AppContainer} from './components/App'
const store = createStore(reducer)

const socket = io();
socket.on('chat message', msg=>{
	store.dispatch({
		type: 'SET_MSG',
		msg: msg
	})
})

// const createStoreWithMiddleware = applyMiddleware(
// 	remoteActionMiddleware(socket)
// )(createStore)

// const store = createStoreWithMiddleware(reducer)

store.dispatch({
	type: 'SET_STATE',
	state:{
		msgs:[1,2,3,4,5,6]
	} 
})



// socket.on('state', state =>{
// 	store.dispatch({type: 'SET_STATE', state})
// })
// const sendMessage = (msg) =>{
// 	socket.emit('chat message', msg)
// }




render(
	<Provider store={store}>
		<AppContainer/>
	</Provider>,
	document.getElementById('app')
)
