import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { LineChart } from './LineChart'



export const GraficaEuler = ( {arrayy, arrayf} ) => {
    
    return (
        <>
            <div className="col-12">
                <div className="card">

                    <div className="card-body">
                        <h5 className="card-title">Grafica de Ecuacion <span>/ Euler</span></h5>

                        <div height='500px'>
                            <LineChart arrayy={arrayy} arrayf={arrayf}/>
                        </div> 
                                
                    </div>

                </div>
            </div>
            
        </>

    )

    
    
}

    