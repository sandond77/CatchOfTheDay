import React from 'react'; 
import PropTypes from 'prop-types';

const Login = () => (
	<nav className="Login">
		<h2>Inventory</h2>
		<p> Sign in to mange your store's inventory </p>
		<button 
		className="github" 
		onclick={( => this.props.authenticate('GitHub')}
			Log In with Github
		</button>
		<button 
		className="twitter" 
		onclick={( => this.props.authenticate('Twitter')}
			Log In with Twitter
		</button>
		<button 
		className="facebook" 
		onclick={( => this.props.authenticate('Facebook')}
			Log In with Facebook
		</button>

	</nav>
)

Login.propTypes = {
	authenticate: PropType.func.isRequired;
};

export default Login;