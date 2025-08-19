fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;
        console.log(recipes);
        const div = document.createElement('div');
        div.className = 'recipes-container';
        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.innerHTML = `
                <h2>Recipe ID: ${recipe.id}</h2>
                <p>caloriesPerServing: ${recipe.caloriesPerServing}</p>
                <p>cookTimeMinutes: ${recipe.cookTimeMinutes}</p>
                <p>cuisine: ${recipe.cuisine}</p>
                <p>difficulty: ${recipe.difficulty}</p>
                <img src="${recipe.image}" alt="${recipe.cuisine}" style="width: 200px; height: 200px; object-fit: cover;">
                <ol><h3>ingredients:</h3>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ol>
                <ol><h3>instructions:</h3>
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
                <p><h4>mealType: ${recipe.mealType}</h4></p>
                <p>name: ${recipe.name}</p>
                <p>prepTimeMinutes: ${recipe.prepTimeMinutes}</p>
                <p>rating: ${recipe.rating}</p>
                <p>reviewCount: ${recipe.reviewCount}</p>
                <p>servings: ${recipe.servings}</p>
                <ol><h3>tags:</h3>
                ${recipe.tags.map(tag => `<li>${tag}</li>`).join('')}
                </ol>
                <p>userId: ${recipe.userId}</p>

              
            `;
            div.appendChild(recipeCard);
        });
        document.body.appendChild(div);
    });