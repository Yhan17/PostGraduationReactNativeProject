import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import axios from 'axios';
import useAppNavigation from '../hooks/useAppNavigation';
import GithubRepository from '../types/GithubRepository';

function Home(): React.JSX.Element {
  const navigation = useAppNavigation();
  const [loading, setLoading] = useState(true);
  const [repositories, setRepositories] = useState<GithubRepository[]>([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Yhan17/repos');
        setRepositories(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);


  if (loading) {
    return (
      <View style={[StyleSheet.absoluteFill, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Repositórios</Text>
        <FlatList
          data={repositories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: { item: GithubRepository }) => <Pressable
            style={styles.repositoryItem}
            onPress={() => navigation.navigate('Repository', item)}
          >
            <Text style={styles.repositoryName}>Yhan17 - {item.name}</Text>
          </Pressable>}

        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 16,
  },
  repositoryItem: {
    backgroundColor: '#3498db',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    width: '100%',
  },
  repositoryName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
