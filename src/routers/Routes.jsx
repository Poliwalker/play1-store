import { Route, Routes as RouterDom } from 'react-router-dom';

import React from 'react';
import Home from '../pages/Home/Home';
import ProductsStore from '../pages/ProductStore/ProductsStore';
import Location from '../pages/Location/Location';
import Contact from '../pages/Contact/Contact';
import Register from '../pages/register/Register';

const Routes = () => {
	return (
		<RouterDom>
			<Route path="/" element={<Home />} />
			<Route path="/products-store" element={<ProductsStore />} />
			<Route path="/location" element={<Location />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/register" element={<Register />} />
			<Route path="*" element={<p>elemento no encontrado</p>}></Route>
		</RouterDom>
	);
};

export default Routes;
