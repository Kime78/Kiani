import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, SafeAreaView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import anime_data from './anime_data.json'

const Item = ({ title, image }) => (
    <View style={styles.item}>
      <Image 
        style={{width: 200, height: 300}}
        source={{
          uri: 'https://animedao.to/' + image,
        }} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  function SearchResults(searched_anime)
  {
      let fliterbyvalue = anime_data.filter(anime => anime.title.toLowerCase().includes(searched_anime.toLowerCase()));
      return fliterbyvalue;
  }


export function HomeScreen() {
    const renderItem = ({item}) => (
      <Item title={item.title} image = {item.image} />
    );
    const [value, onChangeText] = React.useState('');
      
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, bottom: -25, paddingHorizontal: 35 }}
        onChangeText={text => onChangeText(text)}
        value={value}
        defaultValue = "Search Anime..."
      />
        <FlatList
        style = {{bottom: -30}}
          data={SearchResults(value)}
          renderItem={renderItem}
          keyExtractor={item => item.uuid}
        />
      </SafeAreaView>
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 20,
    },
  });  