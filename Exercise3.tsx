import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const Exercise3 = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}> My Profile </Text>
      </View>

      {/* Foto Profil */}
      <View style={styles.profileImageWrapper}>
        <Image source={require('./assets/adam.jpg')} style={styles.profileImage} />
      </View>

      {/* Card Biodata */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Biodata</Text>

        <View style={styles.row}>
          <Text style={styles.icon}>👤</Text>
          <Text style={styles.cardText}>Nama: Andreas</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.icon}>🏷️</Text>
          <Text style={styles.cardText}>Marga: Maengkom</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.icon}>🎓</Text>
          <Text style={styles.cardText}>Universitas: Universitas Sam Ratulangi</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.icon}>🆔</Text>
          <Text style={styles.cardText}>NIM: 210211060001</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.icon}>🏠</Text>
          <Text style={styles.cardText}>Tempat Tinggal: Manado</Text>
        </View>
      </View>
    </View>
  );
};

export default Exercise3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingVertical: 25,
    backgroundColor: '#4a90e2',
    alignItems: 'center',
    elevation: 4,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileImageWrapper: {
    marginTop: 20, // dulu -50, sekarang 20 supaya tidak tumpang tindih
    borderRadius: 100,
    padding: 5,
    backgroundColor: '#fff',
    elevation: 8,
  },
  profileImage: {
    width: 250,
    height: 300,
    borderRadius: 60,
  },
  card: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#4a90e2',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});
