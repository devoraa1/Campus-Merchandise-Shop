import { FlatList, Image, StyleSheet, Text, View } from 'react-native'


const products = [
  {
    id: '1',
    name: 'Plastic Ruler 12inches',
    price: '₱25.00',
    image: require('../../../../assets/ShopProducts/_cea/ruler.jpg'), // placeholder
  }, 
  {
    id: '2 ',
    name: 'Legendary CEA Calculator',
    price: '₱1,500.45',
    image: require('../../../../assets/ShopProducts/_cea/calcu.webp'), // placeholder
  },

]

const CeaShop = () => {
  return (
    <View style={styles.container}>
      
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default CeaShop

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  banner: { width: '100%', height: 150, resizeMode: 'cover' },
  list: { padding: 8 },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 8,
  },
  productImage: { width: 250, height: 250, borderRadius: 6, },
  name: { fontWeight: 'bold', marginTop: 6 },
  price: { color: '#555' },
})