import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './styles';
import App from './App';

export default function Main() {
  return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
  );
}