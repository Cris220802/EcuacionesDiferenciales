import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { FormEuler } from './FormEuler'
import { SolvedEuler } from './SolvedEuler'

export const MainEuler = () => {

    const { formState, onInputChange, onResetForm, xo, yo, xf, h } = useForm({
        xo: '',
        yo: '',
        xf: '',
        h: '',
    });

    const [ecuacion, setEd] = useState({})

    const onSubmit = () => {
        localStorage.setItem('ecuacionED', JSON.stringify(formState));
        setEd(formState);
        onResetForm();
    }

    useEffect(() => {
        setEd(JSON.parse(localStorage.getItem('ecuacionED')) || []);
    }, [])


    return (
        <>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Método de Euler</h1>
                </div>

                <section className="section dashboard">

                    <div className="row">
                        {/* Lado izquierdo de la columna */}
                        <div className="col-lg-6">
                            <div className="row">

                                <FormEuler
                                    onSubmitForm={(event) => onSubmit(event)}
                                    onInputChange={onInputChange}
                                    xo={xo}
                                    yo={yo}
                                    xf={xf}
                                    h={h}
                                />

                            </div>
                        </div>

                        {/* Lado derecho de la columna */}
                        {
                            ecuacion.xo === '' ?
                                null
                            : <div className="col-lg-6">
                                    <div className="col-12">

                                        <SolvedEuler
                                            xo={ecuacion.xo}
                                            yo={ecuacion.yo}
                                            xf={ecuacion.xf}
                                            h={ecuacion.h}
                                        />


                                    </div>
                                </div>
                        }


                    </div>
                </section>
            </main>
        </>
    )
}
