const { START, GET_ALL_FEEDS, FEED_FAILURE,GET_COMMENTS_BY_ID, ADD_COMMENT,FILTERED} = require("./actionTypes");


const initialState = {
    loading:false,
    data:[],
    commentData:[],
    addComment:[],
    filtered:[]
}

const feedReducer = (state = initialState, action) => {
    switch (action.type) {
      case START: {
        return {
          ...state,
          loading:true
        };
      }
      case GET_ALL_FEEDS: {
        return {
          ...state,
          data:action.data,
          loading:false
        };
      }
      case GET_COMMENTS_BY_ID: {
        return {
          ...state,
          commentData:action.data,
          loading:false
        };
      }

      case FILTERED: {
        return {
          ...state,
          filtered: action.data,
          loading: false,
        };
      }
      case ADD_COMMENT: {
        return {
          ...state,
          addComment:action.data,
          loading:false
        };
      }
      case FEED_FAILURE:{
        return{
            ...state,
            loading:false,
            error: action.data
           }
      }
      default:
        return state;
    }
  };

  export default feedReducer;