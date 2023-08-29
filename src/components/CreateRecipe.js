import React, { useState } from 'react';

function CreateRecipe() {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [photo, setPhotoBase64] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		// Create a form object from name, description, photo to be sent to the backend
		const formData = { name, description, photo };

		// Convert the object to a JSON string
		const formDataJson = JSON.stringify(formData);
		console.log(formDataJson);
		// Pass in the JSON string as the POST request body
		fetch('/create-recipe', {
			method: form.method, headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}, body: formDataJson
		});
	};

	const handlePhotoChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				// The result contains the base64 string
				setPhotoBase64(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className='p-4'>
			<h2 className='text-center'>Create Recipe</h2>
			<form method="post" onSubmit={handleSubmit}>
				<div className='m-2 row justify-content-center'>
					<label className='m-1 h4' htmlFor="name"><b>Name</b></label>
					<input
						className='rounded'
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className='m-2 row justify-content-center'>
					<label className='m-1 h4' htmlFor="description"><b>Description</b></label>
					<input
						className='rounded'
						type="text"
						id="description"
						name="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
				</div>
				<div className='m-2 row justify-content-center'>
					<label htmlFor="photo" className="h4"><b>Photo</b></label>
					<input className="btn btn-secondary btn-lg mx-3 px-5 py-3 mt-2"
						type="file"
						id="photo"
						name="photo"
						accept="image/*" // Limit to image files
						onChange={handlePhotoChange}
						required
					/>
				</div>
				<div className="row justify-content-center p-3">
					<button className="btn btn-dark btn-lg mx-3 px-5 py-3 mt-2" type="submit">Create Recipe</button>
				</div>
			</form>
		</div>
	);
}

export default CreateRecipe;
