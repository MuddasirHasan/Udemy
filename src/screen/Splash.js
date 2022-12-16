import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../image/udemy.png')}
        style={{width: 250, height: 250}}
        resizeMode={'contain'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
export {Splash};
