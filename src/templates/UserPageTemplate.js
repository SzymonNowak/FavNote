import React from 'react';
import Sidebar from '../components/organisms/Sidebar/Sidebar';
import PropTypes from 'prop-types';

const UserPageTemplate = ({ children}) => (
  <>
      <Sidebar/>
      {children}
  </> 
 
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,

};

UserPageTemplate.defaultProps = {
  pageType: 'notes',
};

export default UserPageTemplate;
