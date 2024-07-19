import { useNavigate } from "react-router-dom";
import axios from 'axios';
import  { useState } from 'react';
import { fetchUserInfo } from '../services/api'

function Login() {

    const navigate = useNavigate()
    const [error, setError] = useState('');

    const fnConfirmar = async (event) => {
        event.preventDefault();

        console.log("EVENTO CONFIRMAR =>", event)

        const username = event.target.form.username.value;
        const password = event.target.form.password.value;
        
        // const urirest = `http://rosamaster129523.protheus.cloudtotvs.com.br:4050/rest/users?userName=${username.toLowerCase()}`

        console.log('username =>', username);
        console.log('password =>', password);
        // console.log('URIREST => ', urirest);

        try{

            const response = await axios.post('http://rosamaster129523.protheus.cloudtotvs.com.br:4050/rest/api/oauth2/v1/token', null, {
                params: {
                  grant_type: 'password',
                },
                headers: {
                    password: password,
                    username: username
                },
              });
        
              const { access_token, refresh_token } = response.data;
              localStorage.setItem('access_token', access_token);
              localStorage.setItem('refresh_token', refresh_token);
        
              const userInfo = await fetchUserInfo(username);
              localStorage.setItem('user_id', userInfo.id);

              console.log('USUARIO => ', userInfo);
        
              navigate('/home');
            } catch (error) {
              setError('Credenciais inválidas');
            }



        //     const response = await fetch(urirest);
        //     const jsonlogin = await response.json();

        //     console.log('RESPONSE => ', response);
        //     console.log('JSONLOGIN => ', jsonlogin);

        //     if(jsonlogin.resources.length === 1){
        //         localStorage.setItem("@compras/displayname", jsonlogin.resources[0].displayname)
        //         navigate('/')
        //         window.location.reload();
        //     }

        // }catch(err){
        //     console.log("ERRO => ", err)
        // }

    }

    const fnCancelar = (event) => {
        event.preventDefault();

        console.log("EVENTO CANCELAR =>", event)
    }

    return(
        <div className="container-login">
            <form className="form-login">
                <h1>{`</Login`}</h1>
                <label htmlFor="">Login</label>
                <input type="text"  name="username"/>
                <label htmlFor="">Senha</label>
                <input type="password" name="password" />
                <div className="buttons">
                    {error && <p>{error}</p>}
                    <button className="button-confirmar" onClick={(event) => fnConfirmar(event)}>Confirmar</button>
                    <button className="button-cancelar" onClick={(event) => fnCancelar(event)}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default Login;