import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'my.app.ionic',
  appName: 'my-app-ionic',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
