export const addProduct = (cartProduct, product) => {
	const productExist = cartProduct.find((item) => item.id === product.id);

	if (productExist) {
		return cartProduct.map((item) =>
			item.id === productExist.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		);
	}

	return [...cartProduct, { ...product, quantity: 1 }];
};

export const removeProductFromCart = (cartProduct, id) => {
	const productRemove = cartProduct.find((item) => item.id === id);

	if (productRemove.quantity > 1) {
		return cartProduct.map((item) =>
			item.id === productRemove.id
				? { ...item, quantity: item.quantity - 1 }
				: item
		);
	}

	return cartProduct.filter((item) => item.id !== productRemove.id);
};

export const resetSend = (cartProduct, send) => {
	if (cartProduct.length === 1 && cartProduct[0].quantity === 0) {
		return 0;
	}
	return send;
};
