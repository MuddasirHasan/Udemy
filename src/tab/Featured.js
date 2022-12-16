import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Viewport} from '@skele/components';

const Featured = () => {
  const navigation = useNavigation();
  const courses = [
    {
      title: 'Learn React Native',
      banner: require('../image/React-Native.jpg'),
      author: 'Gillip Thusaan',
      ratingNumber: '4.0',
      price: '$59',
      cutPrice: '$80',
      btn: 'Best Seller',
      user: '(445)',
    },
    {
      title: 'Learn Python Master Class',
      banner: require('../image/python.png'),
      author: 'Erume Deliva',
      ratingNumber: '5.0',
      price: '$70',
      cutPrice: '$99',
      btn: 'Best Seller',
      user: '(465)',
    },
    {
      title: 'Learn Node JS Master Class',
      banner: require('../image/nodejs.jpg'),
      author: 'Willson David',
      ratingNumber: '4.5',
      price: '$29',
      cutPrice: '$60',
      btn: 'Best Seller',
      user: '(305)',
    },

    {
      title: 'Learn JavaScript',
      banner: require('../image/javascript.png'),
      author: 'Henary Luu',
      ratingNumber: '4.0',
      price: '$20',
      cutPrice: '$80',
      btn: 'Best Seller',
      user: '(38)',
    },
    {
      title: 'C++ Complete Course',
      banner: require('../image/c++.jpg'),
      author: 'Sumaid Berlon',
      ratingNumber: '4.6',
      price: '$40',
      cutPrice: '$50',
      btn: 'Best Seller',
      user: '(395)',
    },
    {
      title: 'Learn Advance Java',
      banner: require('../image/java.jpg'),
      author: 'Kai Tyson',
      ratingNumber: '4.8',
      price: '$59',
      cutPrice: '$80',
      btn: 'Best Seller',
      user: '(604)',
    },
    {
      title: 'Android Master Class',
      banner: require('../image/android.jpg'),
      author: 'Mosh Hamedani',
      ratingNumber: '4.4',
      price: '$49',
      cutPrice: '$60',
      btn: 'Best Seller',
      user: '(72)',
    },
    {
      title: 'Flutter Mobile Developer',
      banner: require('../image/flutter.png'),
      author: 'Aruki Jemina',
      ratingNumber: '4.0',
      price: '$29',
      cutPrice: '$40',
      btn: 'Best Seller',
      user: '(125)',
    },
    {
      title: 'Learn Angular from Experts',
      banner: require('../image/angular.png'),
      author: 'Gellio Xiee',
      ratingNumber: '4.2',
      price: '$45',
      cutPrice: '$70',
      btn: 'Best Seller',
      user: '(225)',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../image/presenting.jpg')}
          style={{width: '100%', height: 300}}
        />
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 10,
            }}>
            {'Learn From\nTheir Experiences'}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <Text style={{textAlign: 'center', fontSize: 15}}>
            Absolutely one of the best courses I've taken. Excellent pacing and
            explanations. Practical apps and setups within the apps. This in
            combination with Academind's React - The Complete Guide took me from
            barely able to work within JS files to React & React Native
            competent. I recommend this course to anyone that is interested in
            learning React Native.
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 10,
            backgroundColor: '#ffff31',
            marginHorizontal: 20,
            height: 70,
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>Learn from Experts</Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            End in 10 Day
          </Text>
        </View>
        <View style={{marginLeft: 10, marginTop: 15}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Featured
          </Text>
        </View>

        <View>
          <FlatList
            horizontal
            data={courses}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: 300,
                    height: 400,

                    marginLeft: 10,
                    marginTop: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ViewCourse', {
                        data: item,
                      })
                    }>
                    <Image
                      source={item.banner}
                      style={{
                        width: '100%',
                        height: 180,
                      }}
                      resizeMode={'contain'}
                    />

                    <View
                      style={{
                        marginTop: 5,
                        marginBottom: 5,

                        height: 50,
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: 'black',
                          fontWeight: 'bold',
                        }}>
                        {item.title}
                      </Text>
                      <Text style={{fontSize: 15, fontWeight: '500'}}>
                        {item.author}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 15}}>{item.ratingNumber}</Text>
                    <View style={{marginLeft: 10, flexDirection: 'row'}}>
                      <Image
                        source={require('../image/star.png')}
                        style={{width: 18, height: 18}}
                      />
                      <Image
                        source={require('../image/star.png')}
                        style={{width: 18, height: 18}}
                      />
                      <Image
                        source={require('../image/star.png')}
                        style={{width: 18, height: 18}}
                      />
                      <Image
                        source={require('../image/star.png')}
                        style={{width: 18, height: 18}}
                      />
                      <Image
                        source={require('../image/star.png')}
                        style={{width: 18, height: 18}}
                      />
                      <View style={{marginLeft: 5}}>
                        <Text style={{fontWeight: '500'}}>{item.user}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{marginTop: 5, flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      {item.price}
                    </Text>
                    <View style={{marginLeft: 10}}>
                      <Text
                        style={{
                          fontSize: 16,
                          textDecorationLine: 'line-through',
                          color: 'black',
                        }}>
                        {item.cutPrice}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{
                      marginTop: 10,
                      backgroundColor: '#ffff33',
                      width: 110,
                      height: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: 'black',
                      }}>
                      {item.btn}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          width: '100%',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 18}}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 0.9,
  },
});
export {Featured};
