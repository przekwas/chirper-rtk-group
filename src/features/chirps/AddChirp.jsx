import React from 'react';
import { connect } from 'react-redux';
import { addChirp } from './chirpsSlice';
import useForm from '../../utils/hooks/useForm';

const mapDispatch = { addChirp };

const AddChirp = ({ addChirp }) => {
	const { values, handleChange, handleSubmit, resetValues } = useForm(handleAddChirp);

	function handleAddChirp(e) {
		if (!values?.user.trim() || !values?.message.trim()) return;

		addChirp({ user: values.user, message: values.message });
		resetValues();
	}

	return (
		<form className="form-group">
			<label htmlFor="user">User</label>
			<input
				className="form-control mb-3"
				value={values.user || ''}
				onChange={handleChange}
				name="user"
				placeholder="Percival"
			/>
			<label htmlFor="message">Message</label>
			<textarea
				className="form-control mb-3"
				value={values.message || ''}
				onChange={handleChange}
				name="message"
				rows="7"
				placeholder="I want lunch!"
			/>
			<button className="btn btn-primary ml-auto btn-block w-25 mt-3" onClick={handleSubmit}>
				Chirp It
			</button>
		</form>
	);
};

export default connect(null, mapDispatch)(AddChirp);
