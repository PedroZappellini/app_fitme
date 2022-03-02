import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import Routes from './src/routes';
import BottomTab from './src/routes/bottomTab';

import {AuthProvider} from './src/contexts/auth';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
