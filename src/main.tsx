import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App.tsx'
import store from './model/store.ts'
import { envs } from './envs/envs.ts'
import './index.css'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: envs.GRAPHQL_URI,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  </StrictMode>,
)
