import { useState } from "react";



function Desafio() {
    const [formDatas, setform]= useState({
        name:"",
        email:"",
        password:"",
        confPassword:""
    });
    const [errors, setErrors]=useState({});
    const [submitted, setSubmitted]=useState(false);
    
    const handleChange= (event)=>{
        const {name, value}= event.target
        setform(({
            ...formDatas,
            [name]:value
        }))
    }

    const validate=()=>{
        let erros={};
        if(!formDatas.name) erros.name = 'Nome é obrigatório'
        if(!formDatas.email) {
            erros.email = 'Email é obrigatório'
        } else if (!/\S+@\S+\S+.\S+/.test(formDatas.email)){
            erros.email = 'Email Inválido'
        }

        if(!formDatas.password) {
            erros.password = "O campo de senha é obrigatório"
        } else if(formDatas.password.length < 8) {
            erros.password = "O campo de senha precisa de ao menos 8 caracteres"
        }
        if(!formDatas.confPassword) {
            erros.confPassword = "O campo de senha é obrigatório"
        } else if(formDatas.confPassword !== formDatas.password) {
            erros.confPassword = "O campo de senha precisa ser igual"
        }

        return erros
    }


    const handleSubmit=(event)=>{
        event.preventDefault()
        let conferido= validate();
        if(Object.keys(conferido).length === 0){
            setErrors({})
            setSubmitted(true)
        } else {
            setSubmitted(false)
            setErrors(conferido)
        }
    }




    return(
        <form onSubmit={handleSubmit}>
            <h1>Registro</h1>
            {submitted && <h2>Registrado com sucesso</h2>}
            <label>
                Nome:
                <input type="text" name="name"  onChange={handleChange} />
                {errors.name && <p>{errors.name}</p>}
            </label>
            <br />
            <label>
                Email:
                <input type="text" name="email"  onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
            </label>
            <br />
            <label>
                Senha:
                <input type="password" name="password"  onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}
            </label>
            <br />
            <label>
                Confirme sua senha:
                <input type="password" name="confPassword"  onChange={handleChange} />
                {errors.confPassword && <p>{errors.confPassword}</p>}
            </label>
            <br />
            
            <button type="submit">Submeter</button>
        </form>

    )
    
}

export default Desafio;