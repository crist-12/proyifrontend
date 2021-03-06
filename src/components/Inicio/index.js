import Page from '../Page';
import { useSelector } from 'react-redux';
import Content from '../UI/Content';
import logo from '../Splash/Logo.png';
import './index.css';
const getSecurity = ({security})=>security;
const Inicio = ()=>{
  const {user } = useSelector(getSecurity);

  return (
    <Page title="Nostalgia Drive 1.0" showHeader showNavBar>
      <Content>
        <div className="userbar">
          { user.email}
        </div>
        <div className="center-align"><img src={logo} className="responsive-img"/></div>
      </Content>
    </Page>
  );
}

export default Inicio;
