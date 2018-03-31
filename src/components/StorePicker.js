import React, { Fragment } from 'react';

class StorePicker extends React.Component {
	render(){
		return (
			<Fragment>
			{/*This is a store picker */}
				<p> Fish! </p>
				<form action="" className="store-selector">
					<h2> Please Enter a Store</h2>
					<input type="text" required placeholder="Store Name" />
					<button type="submit"> Visit Store </button>
				</form>
			{/*this is a comment*/}
			</Fragment>
		)
	}
}

export default StorePicker;