import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserContextProvider from './UserContext.jsx';
import { BrowserRouter } from 'react-router';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserContextProvider>
            <App />
        </UserContextProvider>
    </BrowserRouter>
);