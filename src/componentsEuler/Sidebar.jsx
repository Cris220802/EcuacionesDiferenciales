import React from 'react'

const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

const showSidebar = () => {
    select('body').classList.toggle('toggle-sidebar')
}

export const Sidebar = () => {
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-list toggle-sidebar-btn m-5" onClick={showSidebar}></i>
                    <a href="index.html" className="logo d-flex align-items-center">
                        <img src={`/src/assets/img/logo.png`} />
                        <span className="d-none d-lg-block">App Ecuaciones</span>
                    </a>

                </div>

                <nav className="header-nav ms-auto">

                </nav>

            </header>

            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <a className="nav-link " href="index.html">
                            <i className="bi bi-grid"></i>
                            <span>Metodo de Euler</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#">
                            <i className="bi bi-menu-button-wide"></i>
                            <span>Metodo de Runge-Kutta</span>
                        </a>
                    </li>
                </ul>

            </aside>
        </>
    )
}
