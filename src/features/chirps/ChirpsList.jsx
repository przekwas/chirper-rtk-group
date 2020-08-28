import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ chirps }) => ({ chirps });

const ChirpsList = ({ chirps }) => {
	return (
		<section className="row no-gutters">
			{chirps.map(chirp => (
				<div key={chirp.id}>
					{chirp.user}: {chirp.message}
				</div>
			))}
		</section>
	);
};

export default connect(mapStateToProps)(ChirpsList);
