import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/color';
import CartItem from '../components/CartItem';

const CartScreen = ({ cartItems, totalAmount }) => {
  // Temporary data for demonstration
  const sampleCartItems = [
    { id: 1, name: 'Product A', price: 19.99 },
    { id: 2, name: 'Product B', price: 24.99 },
    { id: 3, name: 'Product C', price: 14.99 },
  ];
  const sampleTotalAmount = sampleCartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.cartText}>Cart</Text>
          <Text style={styles.cartItemCount}>({sampleCartItems.length})</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.subtotalText}>Subtotal:</Text>
          <Text style={styles.totalAmountText}>${sampleTotalAmount.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.cartItemsContainer}>
        {/* Render each cart item */}
        {sampleCartItems.map(item => (
          <CartItem key={item.id} name={item.name} price={item.price} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.main, // Replace with your primary color
    padding: 15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  cartItemCount: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtotalText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 5,
  },
  totalAmountText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  cartItemsContainer: {
    flex: 1,
    padding: 10,
  },
});

export default CartScreen;
