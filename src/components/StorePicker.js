import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
	myInput = React.createRef();

	goToStore = (event) => {
		event.preventDefault();
		console.log(this.myInput.value.value)
	}


	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2> Please Enter a Store</h2>
				<input 
					type="text" 
					ref={this.myInput}
					required 
					defaultValue={getFunName()}
					placeholder="Store Name" 
				/>
				<button type="submit"> Visit Store →</button>
			</form>
		);
	}
}

export default StorePicker;
