import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'Container/App/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import ScrollToTopEffect from 'components/ScrollToTop/ScrollToTopEffect'
import ScrollToTop from 'react-scroll-to-top'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTopEffect />
                <ScrollToTop smooth color="cyan" />
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
