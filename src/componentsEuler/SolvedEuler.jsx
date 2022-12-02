
import React, { useEffect, useState } from 'react'
import { GraficaEuler } from './GraficaEuler'
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";


export const SolvedEuler = React.memo(({ xo, yo, xf, h }) => {

    const [ecuacion, setEd] = useState({})

    useEffect(() => {
        setEd(JSON.parse(localStorage.getItem('ecuacionED')) || []);
    }, [xo])
    

    //formulas: yo + hf()
    //formula: x - y + 2
    //Ponemos valores iniciales a las variables auxiliares
    let numberx = xo;
    let numbery = 0;
    let numberf = 0;

    //inicializamos los arreglos
    let arrayx = [xo];
    let arrayy = [Number(yo)];
    let arrayf = [Number(xo) - Number(yo) + 2];
    
    const solveEcuation = () => {
        

        //encontramos cuantas iteraciones debemos hacer
        let result = xf / h;

        //resolvemos primero para xo hasta xf con h
        for (let i = 0; i < result; i++) {
            numberx = Number(numberx) + Number(h);
            console.log(numberx)
            arrayx.push(numberx.toFixed(1));
        }

        //finalmente resolvemos y y f()
        for (let j = 0; j < result; j++) {

            numbery = Number(arrayy[j]) + Number(h) * Number(arrayf[j]);

            arrayy.push(numbery.toFixed(8));

            numberf = Number(arrayx[j]) - Number(arrayy[j]) + 2;

            arrayf.push(numberf.toFixed(8))

        }
        console.log(arrayx)
        console.log(arrayy)
        console.log(arrayf)

    }

    solveEcuation();


        return (
            <>
                <div className="card recent-sales overflow-auto">
                    <div className="card-body">
                        <h4 className="card-title">Resultado para xo: {ecuacion.xo}, yo: {ecuacion.yo}, xf: {ecuacion.xf} y h: {ecuacion.h}</h4>
                        
                        <div className='row'>
                            <div className='col-sm-1 mt-2'>
                                <table>
                                    <tbody>
                                        <tr className='fw-bold'>
                                            <td>X</td> 
                                        </tr>
                                        <tr className='mt-2 fw-bold'>
                                            <td>Y</td>
                                        </tr>
                                        <tr className='mt-2 fw-bold'>
                                            <td>f(x,y)</td>
                                        </tr>
                                    </tbody>
                                    
                                </table>
                            </div>
                            <div className='col-sm-11'>
                                <Grid
                                    data={[
                                        arrayx,
                                        arrayy,
                                        arrayf
                                    ]}
                                />
                            </div>
                            
                        </div>
                        
    
                    </div>
                </div>
                
                <GraficaEuler  arrayy={arrayy} arrayf={arrayf}/>
    
    
            </>
        )
})
