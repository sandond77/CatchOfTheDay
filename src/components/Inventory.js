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

    state {
        uid: null,
        owner: null
    }

    authHandler = async (authData) => {
        const store = await base.fetch(this.props.storeId, {contest:this})
        if (!store.owner) {
            await base.post(`${this.props.storeId}/owner`), {
                data: authData.user.uid
            }
        }

        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        })

        console.log(authData)
    };
    
    // authenticate = (provider) => {
    //     alert(provider)
    // }
    
    render() {
        return <Login authenticate={this.authenticate} />;
        return (
            <div className="inventory">
                <h2>Inventory</h2>

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
