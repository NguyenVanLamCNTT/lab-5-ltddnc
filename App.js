import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './components/TopBar';
import ListItemSceen from './screens/ListItemSceen';

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar></TopBar>
      <ListItemSceen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
