import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
	render() {
		const { image, name, price, desc, status } = this.props.details; //es6 allows us to deconstruct this without creating multiple lines of code
		const isAvailable = status === "available"; //checks to see if the fish is available and assigns it to variable
		return (
			<li className="menu-fish">
				<img src={image} alt={name} />
				<h3 className="fish-name">
					{name}
					<span className="price"> {formatPrice(price)} </span>
				</h3>
				<p>{desc}</p>
				<button disabled={!isAvailable} onClick={ () => this.props.addToOrder(this.props.index)}> {/*using es6 to place function directly into the onclick handler */}
					{isAvailable ? "Add to Order" : "Sold Out!"}
				}
				</button>
				{/* if the fish is not available, the add to cart button will be disable */}
			</li>
		);
	}
}

export default Fish;
