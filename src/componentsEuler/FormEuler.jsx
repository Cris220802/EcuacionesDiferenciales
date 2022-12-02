import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';

const stylesDiv = {
    height: "50px",
    border: "1px solid gray",
    borderRadius: "5px",

}

const styleP = {
    marginTop: "12px",
    marginLeft: "20px"
}



export const FormEuler = ({onSubmitForm, onInputChange, xo, yo, xf, h}) => {

    const [ecuacion, setEd] = useState({})

    useEffect(() => {
        setEd(JSON.parse(localStorage.getItem('ecuacionED')) || []);
    }, [])
    
    return (
        <>
            <div className="col-12">
                <div className="card recent-sales overflow-auto">


                    <div className="card-body">
                        <h5 className="card-title">Ingrese La Ecuacion <span>| Euler</span></h5>

                        <form onSubmit={onSubmitForm}>
                            <div className="row mb-3">
                                <label htmlFor="inputText" className="col-sm-2 col-form-label">Resolviendo para:</label>
                                <div className="col-sm-10">
                                    <h5 className='text-center'>y'= x - y + 2</h5>
                                </div>
                            </div>

                            

                            <div className="row mb-3">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Xo</label>
                                <div className="col-sm-10">

                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        name='xo'
                                        placeholder={ecuacion.xo}
                                        value={xo}
                                        onChange={onInputChange}
                                    />

                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Yo</label>
                                <div className="col-sm-10">

                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        name='yo'
                                        placeholder={ecuacion.yo}
                                        value={yo}
                                        onChange={onInputChange}    
                                    />

                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="inputNumber" className="col-sm-2 col-form-label">xf</label>
                                <div className="col-sm-10">

                                <input 
                                        type="number" 
                                        className="form-control" 
                                        name='xf'
                                        placeholder={ecuacion.xf}
                                        value={xf}
                                        onChange={onInputChange}
                                    />
                                </div>

                            </div>

                            <div className="row mb-3">
                                <label htmlFor="inputNumber" className="col-sm-2 col-form-label">h (incremento)</label>
                                <div className="col-sm-10">

                                <input 
                                        type="number" 
                                        className="form-control" 
                                        step={0.1}
                                        name='h'
                                        placeholder={ecuacion.h}
                                        value={h}
                                        onChange={onInputChange}
                                    />

                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="" className="col-sm-10"></label>
                                <div className="col-sm-2">
                                    <button type="submit" className="btn btn-outline-success">Resolver</button>
                                </div>
                            </div>

                        </form>

                    </div>

                </div>
            </div>

        </>
    )
}
