import { useState } from 'react';

const useForm = callback => {
	const [values, setValues] = useState({});

	const handleSubmit = e => {
		if (e) e.preventDefault();
		callback();
	};

	const handleChange = e => {
		e.persist();
		setValues(values => ({ ...values, [e.target.name]: e.target.value }));
	};

	const resetValues = () => {
		setValues({});
	}

	return {
		resetValues,
		handleChange,
		handleSubmit,
		values
	};
};

export default useForm;