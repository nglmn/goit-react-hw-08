import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import("../../pages/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));
const PageNotFound = lazy(() => import("../../pages/PageNotFound"));

import Layout from '../Layout/Layout';
import './App.css';

const App = () => {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App;