import axios from 'axios'
// import { response } from 'express'
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

export const fetchSmurfs = (url) => {
  dispatch({ type: FETCH_SMURF_START })

  axios.get(url)
    .then(res => {
      // console.log(res)
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: FETCH_SMURFS_FAILURE, payload: err }))
}

export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'

export const addSmurf = (url, smurf) => (dispatch) => {
  dispatch({ type: ADD_SMURF_START });

  axios.post(url, smurf)
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: smurf })
    })
    .catch(err => dispatch({ type: ADD_SMURF_FAILURE, payload: err }))
};