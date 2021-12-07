//import './index.css';

export const Button = ({onClick, children, ...rest})=>{
  return (
    <button
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export const PrimaryButton = ({children, ...rest }) =>{
  return (
    <Button
      {...rest}
      className="btn blue-grey lighten-3"
    >
      {children}
    </Button>
  );
}

export const SecondaryButton = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      className="btn secondary"
    >
      {children}
    </Button>
  );
}

export const MiniButton = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      className="mini"
    >
      {children}
    </Button>
  );
}