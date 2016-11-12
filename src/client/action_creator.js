export function setState(state){

	return {
		type: 'SET_STATE',
		state
	}
}

export function setMsg(msg){
	return {
		type: 'SET_MSG',
		msg
	}
}

export function sendMsg(msg){

	return {
		type: 'SEND_MSG',
		msg
	}
}

