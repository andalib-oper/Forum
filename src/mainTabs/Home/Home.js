import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchBar from 'react-native-dynamic-search-bar';

const Home = () => {
  return (
    <View style={styles.container}>
   {/* <Text>Home</Text> */}
    </View>
  );
};

export default Home;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom:'25%'

  },
});
