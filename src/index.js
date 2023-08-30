import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/app.scss'
import App from './components/App';
import{ BrowserRouter}from 'react-router-dom'
// import AppRouter from './routes/AppRouter';

function Wrapper({children}){
    return children
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>

<App/>

 </BrowserRouter>

);


