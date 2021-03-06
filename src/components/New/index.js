import Page from "../Page"
import TextBox from '../UI/TextBox';
import Content from '../UI/Content';
import { PrimaryButton } from '../UI/Button';
import { useEffect, useState } from 'react'
import { privateAxios } from '../../store/utils/Axios';
import { useDispatch} from 'react-redux';
import axios from 'axios'

import "./index.css";
const New = ()=>{
  const [txtTitle, setTxtTitle] = useState("");
  const [txtMessage, setTxtMessage] = useState("");
  const [txtCorreo, setTxtCorreo] = useState("");
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [ruta, setRuta] = useState("");
  const dispatch = useDispatch();

 

  const saveFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "http://localhost:3000/upload",
        formData
      )
      setRuta(res.data.message);
    } catch (ex) {
      console.log(ex);
    }
  };
  
  const mailvalid = (mail) => {
    return RegExp(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/).test(mail);
  }

  const onBtnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if(mailvalid(txtCorreo)){
      dispatch(
        {
          type:"SAVE_START_FETCH",
          payload:null
        }
      )
      privateAxios.post(
        '/api/swot/new',
        {
          title: txtTitle,
          message: txtMessage,
          to: txtCorreo,
          ruta: ruta
        }
      )
      .then(({data})=>{
        console.log(data);
        console.log("Agregamos uno nuevo :)")
        dispatch(
          {
            type:"SAVE_FETCH_SUCCESS",
            payload: data
          }
        )
      })
      .catch((err)=>{
        console.log(err);
        dispatch(
          {
            type:"SAVE_FETCH_ERROR",
            payload: ["Error al guardar el mensaje."]
          }
        )
      });
      setTxtTitle("");
      setTxtMessage("");
      setTxtCorreo("");
    }
    else{
      alert("Ingrese un correo con una sintaxis válida.");
      setTxtCorreo("");
    }
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.name === "txtCorreo") {
      setTxtCorreo(e.target.value);
    } else if (e.target.name === "txtMessage") {
      setTxtMessage(e.target.value);
    }else {
      setTxtTitle(e.target.value);
    }
  }

  return (
    <Page className="page-center" showNavBar showHeader title="Nuevo">
      <Content>
        <TextBox
          label="Título"
          value={txtTitle}
          placeholder="Título del correo"
          onChange={onChangeHandler}
          name="txtTitle"
        />
        <TextBox
          label="Mensaje"
          value={txtMessage}
          placeholder="Mensaje deseado"
          onChange={onChangeHandler}
          name="txtMessage"
        />
        <TextBox
          label="Hacia"
          value={txtCorreo}
          placeholder="Correo electrónico válido"
          onChange={onChangeHandler}
          name="txtCorreo"
        />
              <input type="file" onChange={saveFile} />
        <button onClick={uploadFile}>Upload</button>
        <div style={{ width: "100%", padding: '0.5em', marginTop: '1em' }}>
          <PrimaryButton onClick={onBtnClick}>Guardar</PrimaryButton>
        </div>
      </Content>
    </Page>
  );
}

export default New;