import { privateAxios } from "../../utils/Axios";
export const fetchMessageData = (dispatch, page, pageItem, text)=>{
  dispatch(
    {
      type:"MESSAGE_START_FETCH",
      payload:null
    }
  )
  privateAxios.get(`/api/swot/facet/${page}/${pageItem}`)
  .then(({data})=>{
    console.log(data);
    dispatch(
      {
        type:"MESSAGE_FETCH_SUCCESS",
        payload: data
      }
    )
  })
  .catch((err)=>{
    console.log(err);
    dispatch(
      {
        type:"MESSAGE_FETCH_ERROR",
        payload: ["Error al obtener la información."]
      }
    )
  });
}

export const deleteFetch=(dispatch,id)=>{
  dispatch(
    {
      type:"MESSAGE_START_DELETE",
      payload:null
    }
  )
  privateAxios.delete(`/api/swot/delete/${id}`)
  .then(({data})=>{
    console.log(data);
    dispatch(
      {
        type:"MESSAGE_DELETE_SUCCESS",
        payload: data
      }
    )
  })
  .catch((err)=>{
    console.log(err);
    dispatch(
      {
        type:"MESSAGE_DELETE_ERROR",
        payload: ["Error al eliminar el mensaje."]
      }
    )
  });
}
