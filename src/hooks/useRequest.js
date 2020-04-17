import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const apiHost = process.env.REACT_APP_VHA_API_HOST || '';
axios.defaults.baseURL = apiHost;
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status < 400;
};

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isError: true
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

const useRequest = () => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
  });


  // useEffect(() => {
  //   const { hash } = window.location;
  //
  //   if (!token) {
  //     // 没有token去访问dashboard页面
  //     if (hash.match('dashboard')) {
  //       window.location.href = '#/logout';
  //     }
  //   } else {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  //   }
  // }, [token]);


  let fetchData = async (url, method = 'get', data) => {
    dispatch({ type: "FETCH_INIT" });
    try {
      const result = await axios[`${method}`](url, data);
      console.log(result);
      dispatch({ type: "FETCH_SUCCESS" });
      return result.data
    } catch (error) {
      console.log(error);
      dispatch({ type: "FETCH_FAILURE" });
      return Promise.reject(error)
    }
  };



  return { ...state, fetchData};
};


export default useRequest
