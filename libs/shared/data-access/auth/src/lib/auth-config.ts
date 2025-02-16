import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://idsvr4.azurewebsites.net',
  redirectUri: window.location.origin + '/',
  clientId: 'spa',
  responseType: 'code',
  scope: 'openid profile email offline_access api',
  showDebugInformation: true,
  timeoutFactor: 0.01,
};
