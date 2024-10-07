import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux'
import App from './App.tsx'
import store from './model/store.ts'
import { envs } from './envs/envs.ts'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={envs.DOMAIN}
        clientId={envs.CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </StrictMode>,
)
