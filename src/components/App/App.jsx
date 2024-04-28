import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import("../../pages/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));
const PageNotFound = lazy(() => import("../../pages/PageNotFound"));


import { refreshUser } from '../../redux/auth/operations';
import Layout from '../Layout/Layout';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={
            <RestrictedRoute>
              <RegistrationPage />
            </RestrictedRoute>
          } />
          <Route path='/login' element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          } />
          <Route path='/contacts' element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          } />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App;