import React, { useState, useEffect } from 'react';

function ListRecipes() {
	const [recipes, setRecipes] = useState([]);
	// Send a request to the /all-recipes GET endpoint to get all recipes and list them out in a table format
	useEffect(() => {
		fetch('/all-recipes')
			.then((response) => response.json())
			.then((data) => setRecipes(data));
	}, []);

	return (
		<div>
			<div className='m-2 row justify-content-center'>
				{/** Show loading before list of recipes are fully loaded */}
				{recipes.length === 0 && <h2>Loading...</h2>}
			</div>
			{/** Once recipes are successfully retrieved, they are displayed in a table format */}
			<div className='m-2 row justify-content-center'>
				{recipes.length > 0 &&
					<div className='m-2 row justify-content-center'>
						<h2 className='text-center'>List of Recipes</h2>
						<div>
							<table className='table mx-auto'>
								<thead>
									<tr>
										<th scope="col">ID</th>
										<th scope='col' className='h4'>Name</th>
										<th scope='col' className='h4'>Description</th>
										<th scope='col' className='h4'>Photo</th>
									</tr>
								</thead>
								<tbody>
									{recipes.map((recipe) => (
										<tr>
											<th scope="row">{recipe.id}</th>
											<td className='p-2 m-2'>
												{recipe.name}
											</td>
											<td className='p-2 m-2'>
												{recipe.description}
											</td>
											<td className='p-2 m-2'>
												{recipe.photo.includes('data:image/png;base64,') ? <img src={recipe.photo} width='400' height='400' alt={recipe.name} />
													: <img src={`data:image/png;base64,${recipe.photo}`} width='400' height='400' alt={recipe.name} />}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>}
			</div>
		</div>
	);
}

export default ListRecipes;
