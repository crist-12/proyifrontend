const initialState = {
  hasMore:false,
  items:[],
  fetching:false,
  hasErrors:false,
  errors:[],
  currentPage:0,
  pageSize:10,
  totalPages:0
}

const messageReducer = (state=initialState, action)=>{
  const {type, payload} = action;
  switch( type ){
    case "MESSAGE_START_FETCH":
      return {
        ...state,
        fetching:true,
        hasErrors:false,
        errors:[]
      }
    case "MESSAGE_FETCH_SUCCESS":
      const totalPages = (Math.floor(payload.docsMatched / payload.itemsPerPage));
      const hasMore = payload.page !== totalPages;
      return {
        ...state,
        fetching:false,
        hasErrors:false,
        errors:[],
        totalPages: totalPages,
        currentPage: payload.page,
        items: [state.items, ...payload.documents],
        hasMore: hasMore,
      }
    case "MESSAGE_START_DELETE":
      return{
        ...state,
        fetching:true,
        hasErrors:false,
        errors:[]
      }
    case "MESSAGE_DELETE_SUCCESS":
      
      return{
        ...state,
        fetching:false,
        hasErrors:false,
        errors:[],
      }
    case "MESSAGE_FETCH_ERROR":
      return {
        ...state,
        isFetching:false,
        hasErrors:true,
        errors : [payload],
        user:{},
        isLogged:false
      }
    case "MESSAGE_DELETE_ERROR":
      return {
        ...state,
        isFetching:false,
        hasErrors:true,
        errors : [payload],
        user:{},
        isLogged:false
      }

  default:
    return state;
  }
}

export default messageReducer;
