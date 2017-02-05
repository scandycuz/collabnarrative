import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Modal from 'react-modal';

import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
	let store = configureStore();
	Modal.setAppElement(document.body);

	if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
	}

	window.store = store;

	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store} />, root);
});
