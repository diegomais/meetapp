import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email.')
    .required('Email is required.'),
  password: Yup.string()
    .min(6, 'Your password must be at least 6 characters long.')
    .required('Password is required.'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email Address" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">{loading ? 'Loading' : 'Log in'}</button>
        <span>
          Don’t have an account? &nbsp;&nbsp;<Link to="/register">Sign up</Link>
        </span>
      </Form>
    </>
  );
}
