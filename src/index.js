import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Save} from './hooks/useDetails';

import { Month } from './hooks/useDonateMonth';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Month>
    <Save>   
       <App />
    </Save>
    </Month>
  </React.StrictMode>
);

