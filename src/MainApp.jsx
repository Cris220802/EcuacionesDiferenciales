
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageEuler } from './componentsEuler/PageEuler'


export const MainApp = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<PageEuler/>} />
            </Routes>
        </>

    )
}

