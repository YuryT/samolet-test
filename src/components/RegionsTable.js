import React from 'react';
import {Table} from 'antd';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const columns = [
  {
    title: 'Регион',
    dataIndex: 'territory',
    key: 'territory',
    render: (text, record) => <Link to={`region/${record.kopuk}`}>{text}</Link>,
  },
  {
    title: 'Количество библиотек',
    dataIndex: 'libraries',
    key: 'libraries',
    sorter: (a, b) => a.libraries - b.libraries,
  },
  {
    title: 'Источник',
    dataIndex: 'fullname',
    key: 'fullname',
    responsive: ['md'],
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
    responsive: ['md'],
  },
];


const RegionsTable = ({data, loading}) => {
  return (<Table
    columns={columns}
    dataSource={data}
    loading={loading}
    rowKey="kopuk"
  />)
};

RegionsTable.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

RegionsTable.defaultProps = {
  loading: false,
};

export default RegionsTable
