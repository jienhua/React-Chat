import React from 'react'



class MessageForm extends React.Component {

	constructor(){
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e){
		e.preventDefault()
		this.props.sendMsg(e.target.elements[0].value)
		e.target.elements[0].value = ''
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input id='m' />
					<button>Send</button>
				</form>
			</div>
		)
	}
}

export default MessageForm