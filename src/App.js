import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Home from './pages/Home'
import Details from './pages/Details'
import {getData} from "./api";
import {Layout, Alert} from "antd";


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  useEffect(() => {
    getData().then((data) => {
      setData(data);
      setLoading(false);
    }).catch(e => {
      console.log(e);
      setLoadingError(true);
      setLoading(false);
    });
  }, []);
  const {Content} = Layout;
  if (loadingError) {
    return (<Alert
      type="error"
      message="Ошибка"
      description="Произошла ошибка при загрузке данных"
      showIcon
    />)
  }
  return (
    <Router>
      <Layout className="layout">
        <Content className="Content">
          <h2>Библиотеки. Статистическая информация</h2>
          <Switch>
            <Route exact path="/">
              <Home data={data} loading={loading}/>
            </Route>
            <Route path="/region/:id">
              <Details data={data} loading={loading}/>
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
