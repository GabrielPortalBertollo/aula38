import { useState } from "react";



function Form2() {
    const [address, setAddress]= useState({
        street:"",
        city:"",
        postalCode:""
    });
    const handleChange= (event)=>{
        const {name, value}= event.target
        setAddress(prevState =>({
            ...prevState,
            [name]:value
        }))
        //outra forma de fazer o setAddress:
        //setAddress({...address, [name]:value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        if(address.street=="" || address.city=="" || address.postalCode==""){
            alert("Preencha todos os campos para continuar.")
        }
        else{
            alert(`Rua: ${address.street}\nCidade: ${address.city}\nCEP: ${address.postalCode}`)
        }
    }




    return(
        <form onSubmit={handleSubmit}>
            <label>
                Rua:
                <input type="text" name="street"  onChange={handleChange} />
            </label>
            <br />
            <label>
                Cidade:
                <input type="text" name="city"  onChange={handleChange} />
            </label>
            <br />
            <label>
                CEP:
                <input type="text" name="postalCode"  onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Submeter</button>
        </form>

    )
    
}

export default Form2;