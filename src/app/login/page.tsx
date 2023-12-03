'use client';

import LoginForm from './components/LoginForm';
import LoginHeader from './components/LoginHeader';
import LoginTemplate from './templates/LoginTemplate';

const LoginPage = () => {
  return (
    <LoginTemplate
      renderHeader={<LoginHeader />}
    >
      <LoginForm />
    </LoginTemplate>
  );
};

export default LoginPage;