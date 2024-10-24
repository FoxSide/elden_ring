import React from 'react';
import './App.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Armors from "./pages/Armors";

const queryClient = new QueryClient()

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Armors/>
    </QueryClientProvider>
  )
}

export default App
