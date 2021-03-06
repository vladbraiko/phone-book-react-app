import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import styles from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    {isAuthenticated ? (
      <NavLink to="/contacts" exact className={styles.navigationItem}>
        My contacts
      </NavLink>
    ) : (
      <NavLink to="/" exact className={styles.navigationItem}>
        Home
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
