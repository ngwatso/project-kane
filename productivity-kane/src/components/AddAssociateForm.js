import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const initialState = {
	name: '',
	fullTime: true,
	postition: '',
	shift: '',
};

const AddAssociateForm = () => {
	const { push } = useHistory();
};

export default AddAssociateForm;
