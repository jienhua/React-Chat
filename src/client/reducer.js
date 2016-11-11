import {Map} from 'immutable'

function setState(state, newState){
	console.log('here')
	console.log(state)
	console.log(state.merge(newState))
	return state.merge(newState)
}

function setMsg(state, msg){
	const msgs = state.get('msgs')
	return state.merge({
		msgs: msgs.push(msg)
	})
}

export default function(state = Map(), action){

	switch(action.type){
		case 'SET_STATE':
			return setState(state, action.state)
		case 'SET_MSG':
			return setMsg(state, action.msg)
	}
	return state
}