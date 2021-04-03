import React from 'react';
import {useParams} from 'react-router-dom';
import LoadingPlaceHolder from '../components/LoadingPlaceHolder'
import Navigation from '../components/Navigation'
import {Empty} from 'antd';
import PropTypes from "prop-types";

const Details = ({data, loading}) => {
  let content;
  let details;
  const {id} = useParams();
  if (loading) {
    content = (<LoadingPlaceHolder/>);
  } else {
    details = data.find(e => e.kopuk === id);
    if (!details) {
      content = (<Empty/>)
    } else {
      content = (<pre>{JSON.stringify(details, null, 2)}</pre>);
    }
  }
  return (
    <div>
      <Navigation path={details ? details.fullname : id}/>
      {content}
    </div>
  );
};

Details.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

Details.defaultProps = {
  loading: false,
};

export default Details;
