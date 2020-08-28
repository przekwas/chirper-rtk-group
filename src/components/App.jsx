import React from 'react';
import AddChirp from '../features/chirps/AddChirp';
import ChirpsList from '../features/chirps/ChirpsList';

const App = () => {

    console.log('test feature?')

	return (
		<main className="container">
			<section className="row">
				<div className="col-md-4">
					<AddChirp />
				</div>
				<div className="col-md-8">
					<ChirpsList />
				</div>
			</section>
		</main>
	);
};

export default App;
