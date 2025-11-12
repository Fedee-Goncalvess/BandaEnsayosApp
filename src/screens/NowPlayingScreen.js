import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Slider
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NowPlayingScreen() {
  // Datos de ejemplo
  const currentSong = {
    title: 'Canción de Ensayo 1',
    artist: 'Mi Banda',
    album: 'Ensayos Enero 2024',
    duration: 225, // en segundos
    currentTime: 45, // en segundos
    image: 'https://via.placeholder.com/300'
  };

  return (
    <View style={styles.container}>
      {/* Album Art */}
      <View style={styles.albumArtContainer}>
        <Image 
          source={{ uri: currentSong.image }} 
          style={styles.albumArt}
        />
      </View>

      {/* Song Info */}
      <View style={styles.songInfoContainer}>
        <Text style={styles.songTitle}>{currentSong.title}</Text>
        <Text style={styles.songArtist}>{currentSong.artist}</Text>
        <Text style={styles.songAlbum}>{currentSong.album}</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>
            {Math.floor(currentSong.currentTime / 60)}:
            {(currentSong.currentTime % 60).toString().padStart(2, '0')}
          </Text>
          <Text style={styles.timeText}>
            {Math.floor(currentSong.duration / 60)}:
            {(currentSong.duration % 60).toString().padStart(2, '0')}
          </Text>
        </View>
        {/* Slider simulado */}
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progress, 
              { width: `${(currentSong.currentTime / currentSong.duration) * 100}%` }
            ]} 
          />
        </View>
      </View>

      {/* Controls */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="shuffle" size={24} color="#b3b3b3" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="play-skip-back" size={32} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.playButton}>
          <Ionicons name="play" size={40} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="play-skip-forward" size={32} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="repeat" size={24} color="#b3b3b3" />
        </TouchableOpacity>
      </View>

      {/* Additional Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="heart-outline" size={24} color="#b3b3b3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="share-social-outline" size={24} color="#b3b3b3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="list" size={24} color="#b3b3b3" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  albumArtContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  albumArt: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  songInfoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  songArtist: {
    fontSize: 18,
    color: '#b3b3b3',
    marginTop: 8,
  },
  songAlbum: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  progressContainer: {
    marginBottom: 40,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  timeText: {
    color: '#b3b3b3',
    fontSize: 12,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#404040',
    borderRadius: 2,
  },
  progress: {
    height: 4,
    backgroundColor: '#1DB954',
    borderRadius: 2,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  controlButton: {
    padding: 10,
  },
  playButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#1DB954',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optionButton: {
    padding: 10,
  },
});