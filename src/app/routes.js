import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Home } from '../pages/home';
import { Socialicons } from '../components/socialicons';
import withRouter from '../hook/withRouter';
import { Product } from '../pages/products';
import { Resume } from '../pages/cv';

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
          <Route path="/product" element={<Product />} />
          <Route path="/resume" element={<Resume />} />
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