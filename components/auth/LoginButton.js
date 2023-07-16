import { useAuth0 } from 'react-native-auth0';
import { SCHEMA } from "../../constants";

export const LoginButton = () => {
  const { authorize } = useAuth0();

  const onPress = async () => {
    try {
      await authorize({ scope: 'openid profile email' }, { customScheme: SCHEMA });
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log in" />
}