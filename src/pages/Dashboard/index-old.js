import { React, Redirect } from 'react';
import { useAuthDispatch, logout, useAuthState } from '../../context';
import styles from './dashboard.module.css';

function Dashboard(props) {
	const dispatch = useAuthDispatch();
	const userDetails = useAuthState();

	const handleLogout = () => {
		logout(dispatch);
		props.history.push('/login');
		// <Redirect to="/login" />
	};
	return (
		<div style={{ padding: 10 }}>
			<div className={styles.dashboardPage}>
				<h1>Dashboard</h1>
				<button className={styles.logoutBtn} onClick={handleLogout}>
					Logout
				</button>
			</div>
			<p>Welcome {userDetails.user.email}</p>
		</div>
	);
}

export default Dashboard;