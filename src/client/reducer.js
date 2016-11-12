import {Map} from 'immutable'
import io from 'socket.io-client'

const socket = io()

function setState(state, newState){
	return state.merge(newState)
}

function setMsg(state, msg){
	const msgs = state.get('msgs')
	return state.merge({
		msgs: msgs.push(msg)
	})
}

function sendMsg(msg){
	socket.emit('chat message', msg)
}

export default function(state = Map(), action){

	switch(action.type){
		case 'SET_STATE':
			return setState(state, action.state)
		case 'SET_MSG':
			return setMsg(state, action.msg)
		case 'SEND_MSG':
			sendMsg(action.msg)
	}
	return state
}