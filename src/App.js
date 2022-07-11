import React from 'react';
import {Navigation} from './routes';
import { ClientLayout } from './layouts';

export default function App() {
  return (
    <ClientLayout className='app'>
        <h1 className='app__title'>Hello World</h1>
        <Navigation />
    </ClientLayout>
  );
}