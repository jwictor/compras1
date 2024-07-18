function Login() {
    return(
        <div className="container-login">
            <form className="form-login">
                <h1>{`</Login`}</h1>
                <label htmlFor="">Login</label>
                <input type="text"  name="username"/>
                <label htmlFor="">Senha</label>
                <input type="password" name="password" />
                <div className="buttons">
                    <button className="button-confirmar">Confirmar</button>
                    <button className="button-cancelar">Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default Login;