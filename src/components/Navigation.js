import React from 'react';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';
import './Navigation.css'
import PropTypes from "prop-types";

const Navigation = (props) => {
  return (
    <div className="Breadcrumbs">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Главная</Link>
        </Breadcrumb.Item>
        {props.path &&
        <Breadcrumb.Item>
          {props.path}
        </Breadcrumb.Item>
        }
      </Breadcrumb>
    </div>)
};

Navigation.propTypes = {
  path: PropTypes.string,
};

Navigation.defaultProps = {
  path: null,
};

export default Navigation
