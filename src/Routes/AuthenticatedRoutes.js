import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Nav from '../components/Nav';
import LoginForm from '../components/Login';
import SignupForm from '../components/SignUp';
import Directives from '../components/Directives';
import Regulations from '../components/Regulations';
import Gdpr from '../components/Gdpr';
import Loading from '../components/Loading';
import Privacy from '../components/Privacy';
import Terms from '../components/Terms';

const AuthenticatedRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="welcome" index element={<HomePage />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="directives" element={<Directives />} />
        <Route path="regulations" element={<Regulations />} />
        <Route path="gdpr" element={<Gdpr />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms-of-use" element={<Terms />} />
        <Route path="*" element={<Loading />} />
      </Route>
    </Routes>
  );
};

export default AuthenticatedRoutes;