import React from "react";
import { BrowserRouter, Route, Switch,Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GetStartedPage from './pages/GetStartedPage'
import DesignHome from './pages/DesignHome';
import UploadPhoto from './pages/UploadPhoto';
import NavBar from './components/NavBar';
import FooTer from './components/FooTer';
import Login from './pages/Login';
import ForgetPwd from './pages/ForgetPwd';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermCondition from './pages/TermCondition';
import ProfessionalPage from './pages/ProfessionalPage';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/get-started" exact component={GetStartedPage} />
        <Route path="/get-started-design-your-own-home" exact component={DesignHome} />
        <Route path="/upload" exact component={UploadPhoto} />
        <Route path="/login" exact component={Login}/>
        <Route path="/forgetPwd" exact component={ForgetPwd} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/privacy-policy" exact component={PrivacyPolicy} />
        <Route path="/Term-conditions"  exact component={TermCondition}/>
        <Route path="/professional" exact component={ProfessionalPage} />
      </Switch>
      <FooTer/>
    </BrowserRouter>
  );
};

export default App;
