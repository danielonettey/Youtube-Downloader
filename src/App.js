import React from 'react'
import { useContext, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';

import { ReactQueryDevtools } from 'react-query/devtools'
import { GoogleOAuthProvider } from '@react-oauth/google';




function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} >
      <GoogleOAuthProvider clientId="409107621092-7ruihlj18l9qjuuj43f3a0o0hk62kl9s.apps.googleusercontent.com">
        <Router>
          <AppRoutes />
        </Router>
      </GoogleOAuthProvider>;
      {/* <ReactQueryDevtools initialIsOpen={false} position='bottom-right' /> */}
    </QueryClientProvider>
  );
}

export default App;
