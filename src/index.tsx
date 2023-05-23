import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const Header = () => {
    return <h1 className="header">HEADER</h1>
}

const App = () => {
    return (
        <>
            <Header />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
