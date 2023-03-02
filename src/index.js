import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const MyComponent = React.lazy(() => import('./App'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Suspense fallback={<div>Loading...</div>}>
     <MyComponent />
     </Suspense>
    
  </React.StrictMode>
);


