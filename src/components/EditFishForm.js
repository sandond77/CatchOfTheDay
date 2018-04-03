import React from "react";

class EditFIshForm extends React.Component {
	handleChange = (event) => {
		const updateFish = {
		...this.props.fish, 
		[event.currentTarget.name]: event.currentTarget.value //this will update only what has changed
		};
		this.props.updateFish(this.props.index, updateFish)
	}

	render() {
		return (
			<div className="fish-edit">
				<input
					type="text"
					name="name"
					onChange={this.handleChange}
					value={this.props.fish.name}
				/>
				<input
					type="text"
					name="price"
					onChange={this.handleChange}
					value={this.props.fish.price}
				/>
				<select
					type="text"
					name="status"
					onChange={this.handleChange}
					value={this.props.fish.status}
				>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea
					name="desc"
					onChange={this.handleChange}
					value={this.props.fish.desc}
				/>
				<input
					type="text"
					name="image"
					onChange={this.handleChange}
					value={this.props.fish.image}
				/>
				<button onClick={()=> this.props.deleteFish(this.props.index)}>Remove Fish</button>
			</div>
		);
	}
}

export default EditFIshForm;
