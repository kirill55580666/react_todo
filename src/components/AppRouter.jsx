import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from '../router'
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";


const AppRouter = () => {
	const {isAuth, isLoading} = useContext(AuthContext)

	if(isLoading) {
		return <Loader/>
	}

	return (
		isAuth
			?
			<Routes>
				{privateRoutes.map((route) =>
				<Route
					key={route.path}
					path={route.path}
					element={<route.component/>} />)}
			</Routes>
			:
			<Routes>
				{publicRoutes.map((route) =>
					<Route
						key={route.path}
						path={route.path}
						element={<route.component/>} />)}
				<Route path="*" element={<Login/>}/>
			</Routes>
	);
};

export default AppRouter;