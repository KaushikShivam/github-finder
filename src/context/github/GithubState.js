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
	const searchUsers = async text => {
		setLoading();
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${
				process.env.REACT_APP_GITHUB_CLIENT_ID
			}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		dispatch({
			SEARCH_USERS,
			payload: res.data.items
		});
	};
	//Get user
	//Get repos
	//Clear users
	//Set loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	//Return the provider
	//We basically have to wrap our entire app with the provider
	//This provider takes in a prop called value and we pass it a value that we want accessible to the entire app
	//We pass in the state and state related actions
	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchUsers
			}}>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
