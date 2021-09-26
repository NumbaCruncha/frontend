import React, { useState, useReducer } from 'react';

let user = localStorage.getItem('currentUser')
	? JSON.parse(localStorage.getItem('currentUser'))
	: '';


let token = localStorage.getItem('token')
	? JSON.parse(localStorage.getItem('token'))
	: '';


	export const initialState = {
	user: '' || user,
	token: '' || token,
	loading: false,
	errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
	switch (action.type) {
		case 'REQUEST_LOGIN':
			return {
				...initialState,
				loading: true,
			};
		case 'LOGIN_SUCCESS':
			return {
				...initialState,
				user: action.payload.detailsPayload,
				token: action.payload.data.access,
				loading: false
			};

		case 'LOGOUT':
			return {
				...initialState,
				user: '',
				token: '',
			};

		case 'LOGIN_ERROR':
			return {
				...initialState,
				loading: false,
				errorMessage: action.error,
			};

		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};