fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
        // console.log(carts);
        const div = document.createElement('div');
        div.className = 'carts-container';
        carts.forEach(cart => {
            const cartCard = document.createElement('div');
            cartCard.className = 'cart-card';
            cartCard.innerHTML = `
                <h2>Cart ID: ${cart.id}</h2>
                <p>Discounted Price: $${cart.discountedTotal}</p>
                
                <ol><h3>products:</h3>
                ${cart.products.map(product => `<li><h4>id:${product.id}</h4> 
                discountPercentage:${product.discountPercentage}<br>
                discountedTotal: ${product.discountedTotal}<br>
                price: ${product.price}<br> 
                quantity:${product.quantity}<br> 
                <img src="${product.thumbnail}" alt="${product.title}" style="width: 100px; 
                                            height: 100px; object-fit: cover;"><br>                
                title:${product.title}<br>
                total:${product.total}</li>`).join('')}
                </ol>
                <p>Total Price: $${cart.total}</p>
                <p>User ID: ${cart.userId}</p>
                <p>Products Count: ${cart.products.length}</p>
            `;
            div.appendChild(cartCard);
        });
        document.body.appendChild(div);
    });