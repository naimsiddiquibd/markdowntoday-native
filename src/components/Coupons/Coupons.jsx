import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Share, Clipboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const coupons = [
    {
      id: 1,
      title: '20% Off',
      image: require('../../../assets/product1.jpg'),
      description: 'Get 20% off on your next purchase.',
      expiry: 'Expires on 31st August 2023',
      code: 'SAVE20',
    },
    {
      id: 2,
      title: 'Free Shipping',
      image: require('../../../assets/product1.jpg'),
      description: 'Enjoy free shipping on all orders.',
      expiry: 'Expires on 15th September 2023',
      code: 'FREESHIP',
    },
    // Additional category coupons
    {
      id: 3,
      title: 'Flash Sale',
      image: require('../../../assets/product1.jpg'),
      description: 'Extra 15% off on flash sale items.',
      expiry: 'Expires on 30th September 2023',
      code: 'FLASH15',
    },
    {
      id: 4,
      title: 'Clearance Sale',
      image: require('../../../assets/product1.jpg'),
      description: 'Up to 50% off on clearance items.',
      expiry: 'Expires on 30th September 2023',
      code: 'CLEAR50',
    },
    {
      id: 5,
      title: 'Buy One Get One',
      image: require('../../../assets/product1.jpg'),
      description: 'Buy one, get one free on select items.',
      expiry: 'Expires on 30th September 2023',
      code: 'BOGO',
    },
  ];
  
const CouponScreen = () => {
  const handleCopyCode = (code) => {
    Clipboard.setString(code);
    alert('Coupon code copied!');
  };

  const handleShare = async (code) => {
    try {
      await Share.share({
        message: `Use this coupon code: ${code}`,
      });
    } catch (error) {
      console.log('Error sharing coupon:', error);
    }
  };

  const renderCoupon = ({ item }) => (
    <View style={styles.couponContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.codeContainer}>
          <Text style={styles.code}>{item.code}</Text>
          <TouchableOpacity onPress={() => handleCopyCode(item.code)}>
            <Text style={styles.copyButton}>Copy</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => handleShare(item.code)} style={styles.shareButton}>
          <Ionicons name="share-outline" size={24} color="#888" />
        </TouchableOpacity>
        <Text style={styles.expiry}>{item.expiry}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Coupons</Text> */}
      <FlatList
        data={coupons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCoupon}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  couponContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  description: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 2,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  code: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 2,
  },
  copyButton: {
    fontSize: 16,
    color: '#888',
    textDecorationLine: 'underline',
  },
  shareButton: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  expiry: {
    fontSize: 12,
    color: '#888888',
  },
  listContent: {
    paddingBottom: 16,
  },
});

export default CouponScreen;
