import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import anime_data from './anime_data.json'
import { Alert } from 'react-native';

const anime_genres = (genres) => {
	let result = ""
	for (let i = 0; i < genres.length; i++) {
		result = result + " -" + genres[i] + "\n"
	}

	return result;
}

const anime_episodes = (episodes) => {
	let result = ""
	for (let i = 0; i < episodes.length; i++) {
		result += episodes[i] + "\n";
	}

	return result;
}

const Item = ({ anime }) => (
	<View style={styles.item}>
		<TouchableOpacity onPress={() => { Alert.alert(anime.title, "Genres:\n" + anime_genres(anime.genres) + "\n\nEpisode:\n" + anime_episodes(anime.episodes)) }}>
			<Image
				style={{ width: 200, height: 300 }}
				source={{
					uri: anime.image,
				}} />
			<Text style={styles.title}>{anime.title}</Text>
		</TouchableOpacity>
	</View>
);

function SearchResults(searched_anime) {
	let fliterbyvalue = anime_data.filter(anime => anime.title.toLowerCase().includes(searched_anime.toLowerCase()));
	return fliterbyvalue;
}


export function HomeScreen() {
	const renderItem = ({ item }) => (
		<Item anime={item} />
	);
	const [value, onChangeText] = React.useState('');

	return (
		<SafeAreaView style={styles.container}>
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1, bottom: -25, paddingHorizontal: 35 }}
				onChangeText={text => onChangeText(text)}
				value={value}
				defaultValue="Search Anime..."
			/>
			<FlatList
				style={{ bottom: -30 }}
				data={SearchResults(value)}
				renderItem={renderItem}
				keyExtractor={item => item.title}
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