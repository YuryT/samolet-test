import React, {useState, useEffect} from "react";

import RegionsTable from '../components/RegionsTable'
import Navigation from '../components/Navigation'
import SearchControl from "../components/SearchControl";
import PropTypes from "prop-types";

const Home = ({data, loading}) => {
  const [filteredData, setFilteredData] =  useState(data);
  useEffect(()=>{setFilteredData(data)}, [data]);
  return (
    <div>
      <Navigation/>
      <SearchControl
        data={data}
        setFilteredData={setFilteredData}
        loading={loading}
      />
      <RegionsTable data={filteredData} loading={loading}/>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

Home.defaultProps = {
  loading: false,
};

export default Home
