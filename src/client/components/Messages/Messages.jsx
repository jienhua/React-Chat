import React, {Component} from 'react'

import styles from './Messages.css'

class Messages extends Component {

	render() {
		return (
			<div>
				<ul className={styles.messages}>{this.props.msg}</ul>
			</div>
		)
	}
}

export default Messages