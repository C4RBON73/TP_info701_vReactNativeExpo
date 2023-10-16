import { Text,View,StatusBar } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Text style ={{color : '#f0f'}}>Bienvenue sur le campus du Bourget du Lac !</Text>
      <StatusBar style="auto" />

              <Link href ="/carte">Commençons notre aventure</Link>

    </View>
  );
}
