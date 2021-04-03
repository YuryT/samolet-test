import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'antd';
const {Search} = Input;

const SearchControl = ({data, loading, setFilteredData}) => {
  const onSearch = value => {
    const filtered = data.filter(
      el => el.territory.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredData(filtered)
  };
  return (<Search
    placeholder="Введите название региона"
    allowClear
    enterButton="Найти"
    size="large"
    loading={loading}
    onSearch={onSearch}
  />)
};


SearchControl.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  setFilteredData: PropTypes.func.isRequired
};

SearchControl.defaultProps = {
  loading: false,
};

export default SearchControl
