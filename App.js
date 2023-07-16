import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useAuth0, Auth0Provider } from 'react-native-auth0';
import { LoginButton } from './components/auth/LoginButton';

export default function App() {
  return (
    <Auth0Provider domain={"gymbuddyai.eu.auth0.com"} clientId={"4MGJtfyvOh9jlzbUR1PvjEzjN2lypViK"}>
      <View style={styles.container}>
        <LoginButton />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
