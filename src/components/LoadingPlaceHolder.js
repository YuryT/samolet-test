import React from "react";
import {Spin} from 'antd';
import './LoadingPlaceHolder.css'

const LoadingPlaceHolder = () => (
  <div className="LoadingPlaceHolder">
    <Spin size="large"/>
  </div>
);

export default LoadingPlaceHolder
