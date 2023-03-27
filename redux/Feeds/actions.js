import {
  ADD_COMMENT,
  FEED_FAILURE,
  GET_ALL_FEEDS,
  FILTERED,
  GET_COMMENTS_BY_ID,
  START,
} from './actionTypes';
import axios from 'axios';
import {BASE_URL} from '../../environment';

export const start = () => ({
  type: START,
});

export const getFeed = data => ({
  type: GET_ALL_FEEDS,
  data,
});

export const filtering = (data) =>({
  type: FILTERED,
  data
})

export const getComments = data => ({
  type: GET_COMMENTS_BY_ID,
  data,
});

export const addComment = data => ({
  type: ADD_COMMENT,
  data,
});

export const reqFailure = error => ({
  type: FEED_FAILURE,
  error,
});

export const getAllFeeds = () => {
  return async dispatch => {
    dispatch(start());
    try {
      const response = await axios.get(BASE_URL + `/allproducts`);
      if (response) {
        dispatch(getFeed(response.data));
        dispatch(filtering(response.data))
        // console.log("res", response.data)
      }
    } catch (err) {
      console.log('request failed feeds');
      console.log(err.message);
      dispatch(reqFailure(err.message));
    }
  };
};

export const getAllCommentsById = id => {
  return async dispatch => {
    dispatch(start());
    try {
      const response = await axios.get(
        BASE_URL + `/allproducts/${id}/comments`,
      );
      if (response) {
        dispatch(getComments(response.data));
        // console.log("res", response.data)
      }
    } catch (err) {
      console.log('request failed comments');
      console.log(err.message);
      dispatch(reqFailure(err.message));
    }
  };
};

export const addCommentById = (
  createdAt,
  name,
  avatar,
  weekAgo,
  like,
  unlike,
  message,
  id,
) => {
  return async dispatch => {
    dispatch(start());
    try {
      const response = await axios.post(
        BASE_URL + `/allproducts/${id}/comments`,
        {
          name:name,
          createdAt: createdAt,
          avatar:avatar,
          like:like,
          unlike:unlike,
          weekAgo:weekAgo,
          message:message,
          allproductId:id
        },
      );
      if (response) {
        dispatch(addComment(response.data));
        dispatch(getAllCommentsById(id))
        console.log('res', response.data);
      }
    } catch (err) {
      console.log('request failed comments');
      console.log(err.message);
      dispatch(reqFailure(err.message));
    }
  };
};
