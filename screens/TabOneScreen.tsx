import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import ApiView from '../screens/ViewAPIScreen';
import axios from 'axios';

// Import getNews from news.js
import { getNews } from '../src/news';
import Article from '../components/Article';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import GetNews from '../components/GetNews';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latest News</Text>
      <GetNews/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});
