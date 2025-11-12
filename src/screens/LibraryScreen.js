import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Datos de ejemplo - reemplazar con datos reales más adelante
const mockSongs = [
  {
    id: '1',
    title: 'Canción de Ensayo 1',
    artist: 'Mi Banda',
    duration: '3:45',
    date: '2024-01-15',
    image: 'https://via.placeholder.com/60'
  },
  {
    id: '2',
    title: 'Canción de Ensayo 2',
    artist: 'Mi Banda',
    duration: '4:20',
    date: '2024-01-22',
    image: 'https://via.placeholder.com/60'
  },
  {
    id: '3',
    title: 'Canción de Ensayo 3',
    artist: 'Mi Banda',
    duration: '3:15',
    date: '2024-01-29',
    image: 'https://via.placeholder.com/60'
  },
];

export default function LibraryScreen({ navigation }) {
  const [songs, setSongs] = useState(mockSongs);
  const [currentSong, setCurrentSong] = useState(null);

  const renderSongItem = ({ item }) => (
    <TouchableOpacity
      style={styles.songItem}
      onPress={() => setCurrentSong(item)}
    >
      <Image source={{ uri: item.image }} style={styles.songImage} />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
        <Text style={styles.songDate}>{item.date}</Text>
      </View>
      <View style={styles.songControls}>
        <Text style={styles.songDuration}>{item.duration}</Text>
        <Ionicons name="play-circle" size={24} color="#1DB954" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mis Ensayos</Text>
        <Text style={styles.headerSubtitle}>{songs.length} canciones</Text>
      </View>
      
      <FlatList
        data={songs}
        renderItem={renderSongItem}
        keyExtractor={item => item.id}
        style={styles.songList}
      />

      {currentSong && (
        <View style={styles.nowPlayingBar}>
          <View style={styles.nowPlayingInfo}>
            <Text style={styles.nowPlayingTitle}>{currentSong.title}</Text>
            <Text style={styles.nowPlayingArtist}>{currentSong.artist}</Text>
          </View>
          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play" size={30} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#b3b3b3',
    marginTop: 5,
  },
  songList: {
    flex: 1,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  songInfo: {
    flex: 1,
    marginLeft: 15,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  songArtist: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  songDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  songControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songDuration: {
    color: '#b3b3b3',
    marginRight: 10,
  },
  nowPlayingBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#181818',
    borderTopWidth: 1,
    borderTopColor: '#282828',
  },
  nowPlayingInfo: {
    flex: 1,
  },
  nowPlayingTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nowPlayingArtist: {
    color: '#b3b3b3',
    fontSize: 14,
  },
  playButton: {
    backgroundColor: '#1DB954',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});