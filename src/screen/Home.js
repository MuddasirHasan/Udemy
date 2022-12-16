import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

import {Featured} from '../tab/Featured';
import {MyLearning} from '../tab/MyLearning';
import {Search} from '../tab/Search';
import {User} from '../tab/User';
import {WishList} from '../tab/WishList';
const Home = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <View style={styles.container}>
      {selectedTab == 1 ? (
        <Featured />
      ) : selectedTab == 2 ? (
        <Search />
      ) : selectedTab == 3 ? (
        <MyLearning />
      ) : selectedTab == 4 ? (
        <WishList />
      ) : (
        <User />
      )}

      <View style={styles.tabContainer}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(1);
            }}>
            <Image
              source={
                selectedTab == 1
                  ? require('../icons/star-filled.png')
                  : require('../icons/star.png')
              }
              style={{width: 40, height: 40}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text style={styles.bottomFont}>Featured</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(2);
            }}>
            <Image
              source={
                selectedTab == 2
                  ? require('../icons/search-filled.png')
                  : require('../icons/search.png')
              }
              style={{width: 38, height: 38}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text style={styles.bottomFont}>Search</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(3);
            }}>
            <Image
              source={
                selectedTab == 3
                  ? require('../icons/play-button.png')
                  : require('../icons/play.png')
              }
              style={{width: 40, height: 40}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text style={styles.bottomFont}>My Learning</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(4);
            }}>
            <Image
              source={
                selectedTab == 4
                  ? require('../icons/heart-fill.png')
                  : require('../icons/heart.png')
              }
              style={{width: 40, height: 40}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text style={styles.bottomFont}>WishList</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(5);
            }}>
            <Image
              source={
                selectedTab == 5
                  ? require('../icons/user-filled.png')
                  : require('../icons/user.png')
              }
              style={{width: 40, height: 40}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text style={styles.bottomFont}>User</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 5,
  },
  bottomFont: {
    fontWeight: '500',
    fontSize: 14,
  },
});

export {Home};
