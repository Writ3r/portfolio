import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink as NavLinkRouter } from 'react-router-dom';
import { MDBWaves as Waves} from 'mdbreact';
import MDBLink from '../Link'

/*
 THIS IS JUST A REPLACEMENT TO GET AROUND mdreact's CURRENT 5.0.2 ISSUE WITH LINK/NAVLINK build
 WHEN FIXED, REMOVE THESE AND USE mdREACT's COMPONENTS FOR IT.
*/

const NavLink = props => {
  const [cursorPos, setCursorPos] = useState({});
  const { children, className, disabled, active, to, link, ...attributes } = props;
  const classes = classNames('nav-link', disabled ? 'disabled' : 'Ripple-parent', active && 'active', className);

  const handleClick = e => {
    if (!disabled) {
      e.stopPropagation();
      // Waves - Get Cursor Position
      const cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(cursorPos);
    }
  };

  const Tag = link ? MDBLink : NavLinkRouter;

  return (
    <Tag
      data-test='nav-link'
      className={classes}
      onMouseUp={handleClick}
      onTouchStart={handleClick}
      to={to}
      {...attributes}
    >
      {children}
      {disabled ? false : <Waves cursorPos={cursorPos} />}
    </Tag>
  );
};

NavLink.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  link: PropTypes.bool,
  to: PropTypes.string
};

NavLink.defaultProps = {
  active: false,
  className: '',
  disabled: false,
  link: false
};

export default NavLink;
export { NavLink as MDBNavLink };
