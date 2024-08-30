import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Home } from '../pages/home';
import { Socialicons } from '../components/socialicons';
import withRouter from '../hook/withRouter';

const AnimatedRoutes = withRouter(({ location }) => (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{
          enter: 400,
          exit: 400,
        }}
        classNames="page"
        unmountOnExit
      >
        <Routes location={location}>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  ));
  

const AppRoutes = () => {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  )
}

export default AppRoutes