import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/app.scss'
import App from './components/App';
import{ BrowserRouter}from 'react-router-dom'


//  в этотосновной индекс по мимо остальных импортов елаем шмпорт провайдер и импрорт стор из стор который мы сделали до этого
import { Provider } from 'react-redux';
import { store } from './store';

function Wrapper({children}){
    return children
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // оборачиваем наш апп  в импортированный провайдер
 <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
 </BrowserRouter>

);


