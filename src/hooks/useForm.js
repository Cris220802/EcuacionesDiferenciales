import { useState } from "react";


export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    //NOTA IMPORTANTE ASI FUNCIONA EL ONINPUTCHANGE
    //Los names del input deben ser iguales que los de las variables del objeto useState, porque si no se crea una nueva propiedad
    /* 
        const objeto = { variable: "bar", variable2: "foo" };
        const nuevoObjeto = {
            [objeto.variable] : "esta propiedad se llama bar",
            [objeto.variable2]: "esta propiedad se llama foo",
        }
        
        console.log(nuevoObjeto);
        output:
        {
            bar: "esta propiedad se llama bar", 
            foo: "esta propiedad se llama foo"
        }
    */
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,  //hacemos una copia de todo el state para que se mantenga en nuestro hook
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
