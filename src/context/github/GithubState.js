import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from '../types';

const GithubState = props => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	//Search users
	//Get user
	//Get repos
	//Clear users
	//Set loading

	//Return the provider
	//We basically have to wrap our entire our with the provider
	//This provider takes in a prop called value and we pass it a value that we want accessible to the entire app
	//We pass in the state and state related actions
	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading
			}}>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
