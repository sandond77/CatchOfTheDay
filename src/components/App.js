import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

	addFish = fish => {
		console.log("adding a fish");
		const fishes = { ...this.state.fishes };
		fishes[`fish${Date.now()}`] = fish; //pushes a fish to the object with a key of the currenttime
		this.setState({
			fishes: fishes
		});
	};

	loadSampleFishes = () => {
		console.log("Loading sample fishes");
		this.setState({
			fishes: sampleFishes
		});
	};

	addToOrder = (key) => {
		const order = {...this.state.order};
		order[key] = order[key] + 1 || 1; //if order exists, it adds 1; otherwise it creates an order of 1
		this.setState({order});
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key=> 
							<Fish 
								key={key} 
								index={key}
								/* react cannot find the key property, so we need to create this index property with the value of key */ 
								details={this.state.fishes[key]} 
								addToOrder = {this.addToOrder}
							/>)}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order}/>
				<Inventory
					addFish={this.addFish}
					loadSampleFishes={this.loadSampleFishes}
				/>
			</div>
		);
	}
}

export default App;
