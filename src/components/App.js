import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

	//only syncs to firebase after mounting components
	componentDidMount() {
		const { params } = this.props.match;
		const localStorageRef = localStorage.getItem(params.storeId);

		console.log(localStorageRef)
		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) });
		}

		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: "fishes"
		});
	}

	componentDidUpdate() {
		localStorage.setItem(
			this.props.match.params.storeId,
			JSON.stringify(this.state.order) 
		);
	}

	//disconnects from firebase
	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

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

	addToOrder = key => {
		const order = { ...this.state.order };
		order[key] = order[key] + 1 || 1; //if order exists, it adds 1; otherwise it creates an order of 1
		this.setState({ order });
	};

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => (
							<Fish
								key={key}
								index={key}
								/* react cannot find the key property, so we need to create this index property with the value of key */

								details={this.state.fishes[key]}
								addToOrder={this.addToOrder}
							/>
						))}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order} />
				<Inventory
					addFish={this.addFish}
					loadSampleFishes={this.loadSampleFishes}
				/>
			</div>
		);
	}
}

export default App;
