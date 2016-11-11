export function setState(state){

	return {
		type: 'SET_STATE',
		state
	}
}

export function sendMsg(msg){

	return {
		type: 'SEND_MSG',
		msg
	}
}

