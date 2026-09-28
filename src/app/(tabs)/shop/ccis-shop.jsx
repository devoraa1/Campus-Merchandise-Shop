import { FlatList, Image, StyleSheet, Text, View } from 'react-native'


const products = [
  {
    id: '1',
    name: 'Lexier 1:24 Scale Figurine',
    price: '₱25,000.09',
    image: require('../../../../assets/ShopProducts/_ccis/lexier.jpg'), // placeholder
  }, 
  {
    id: '2 ',
    name: 'CCIS Computer Lab Chair',
    price: '₱500.46',
    image: require('../../../../assets/ShopProducts/_ccis/LabChair.webp'), // placeholder
  },

]

const CcisShop = () => {
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

export default CcisShop

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