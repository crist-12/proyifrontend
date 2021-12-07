import InfiniteScroll from 'react-infinite-scroll-component';
//import './index.css';
import 'materialize-css/dist/css/materialize.min.css'

export const List = ({id, dataLength, fetchMore, hasMore, loader, children}) => {
  return (
    <div id={id} className="container">
      {children}
    </div>
  )
}

export const ListItem = ({children,handlerDelete}) => {
  return (
    <div className="">
      <div class="row">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{children[0]}</span>
              <p>Message: {children[2]}</p>
              <p>To: {children[4]}</p>
            </div>
            <div class="card-action">
              <a onClick={handlerDelete} href="#">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
