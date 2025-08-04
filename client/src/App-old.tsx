
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import LoginLanding from './pages/LoginLanding';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import Upgrade from './pages/Upgrade';
import UploadPortfolio from './pages/UploadPortfolio';
import PortfolioProject from './pages/PortfolioProject';
import Challenge from './pages/Challenge';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Rank from './pages/Rank';
import Certifications from './pages/Certifications';
import UserRankDashboard from './pages/UserRankDashboard';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Community from './pages/Community';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Documentation from './pages/Documentation';
import Support from './pages/Support';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import BillingAccount from './pages/BillingAccount';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login-landing" element={<LoginLanding />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/upload-portfolio" element={<UploadPortfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioProject />} />
        <Route path="/challenge/:id" element={<Challenge />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/user-rank-dashboard" element={<UserRankDashboard />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/community" element={<Community />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/support" element={<Support />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/billing" element={<BillingAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
