import React from "react";
import firebase from 'firebase';
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import base, { firebaseApp } from "../base"; 

class Inventory extends React.Component {
    
    authenticate = provider => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler);
    };

    state = {
        uid: null,
        owner: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.authHandler({ user });
            }
        });
    }

    authHandler = async authData => {
        let store = await base.fetch(this.props.storeId, { context: this });
        console.log(store);
        if (!store.owner) {
            await base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            });
        }

        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        });
    };

    logout = async () => {
        console.log("logging out");
        await firebase.auth().signOut();
        this.setState({ uid: null });
    };
    
    render() {
        const logout = <button onClick={this.logout}>Log Out!</button>;

        if (!this.state.uid){
            return <Login authenticate={this.authenticate} />;
        }

        if (this.state.uid !== this.state.owner){
            return(
                <div>
                    <p> Sorry, You are not the owner! </p>
                    {logout}
                </div>
            )
        }

        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {logout}
                {Object.keys(this.props.fishes).map(key => (
                    <EditFishForm
                        key={key}
                        index={key}
                        fish={this.props.fishes[key]}
                        updateFish={this.props.updateFish}
                        deleteFish={this.props.deleteFish}
                    />
                ))}

                <AddFishForm addFish={this.props.addFish} />

                <button onClick={this.props.loadSampleFishes}>
                    Load Sample Fishes
                </button>
            </div>
        );
    }
}

export default Inventory;
