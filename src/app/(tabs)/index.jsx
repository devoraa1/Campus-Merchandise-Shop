import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Merch Shop</Text>

      <Text style={styles.subtitle}>
        Welcome! Browse gear from the Shop tab.
      </Text>

      <Text style={styles.subtitle}>
        Browse university shirts, lanyards, and books with a saved wish list feature!
      </Text>

      <Pressable
        style={styles.shopButton}
        onPress={() => router.push('/shop')}
      >
        <Text style={styles.shopButtonText}>Browse Shop</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 18,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 8,
  },

  shopButton: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 20,
  },

  shopButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});