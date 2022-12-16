import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const User = () => {
  const titles = [
    {
      title: 'About Udemy',
      icon: true,
    },

    {title: 'About Udemy Business', icon: true},
    {
      title: 'Help and Support',
      icon: false,
    },
    {
      title: 'Share the Udemy App',
      icon: false,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Account</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'center',
          paddingLeft: 20,

          borderColor: '#909090',
        }}>
        <Text style={{fontSize: 17, color: ''}}>Support</Text>
      </View>
      <View>
        <FlatList
          data={titles}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '100%',

                  height: 40,
                  borderEndColor: '#909090',
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                }}>
                <Text style={{color: 'black', fontWeight: '400', fontSize: 16}}>
                  {item.title}
                </Text>
                <View style={{paddingRight: 15}}>
                  {item.icon ? (
                    <Image
                      source={require('../icons/next.png')}
                      style={{width: 10, height: 10}}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,

          height: 55,
        }}>
        <Text style={{fontSize: 18, fontWeight: '700', color: 'purple'}}>
          Sign in
        </Text>
        <Text style={{fontSize: 12, fontWeight: '500'}}>Udemy v27742 67</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    width: '100%',
    borderBottomWidth: 0.6,
    borderColor: '#909090',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },
});

export {User};
