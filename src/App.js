import React from 'react'
import { useContext, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';

import { ReactQueryDevtools } from 'react-query/devtools'




function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} >
      <Router>
        <AppRoutes />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
