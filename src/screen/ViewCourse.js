import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Viewport} from '@skele/components';
import VideoPlayer from 'react-native-video-player';

const ViewportAware = Viewport.Aware(TouchableOpacity);
const ViewCourse = () => {
  const [visibleFooter, setVisibleFooter] = useState(false);
  const route = useRoute();

  const videoDetails = [
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
    {
      videoNumber: 'Video 1',
      videoDuration: 'video 1 min',
      indexNumber: '1',
      subtitle: require('../icons/subtitle.png'),
      playButton: require('../icons/play.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <Viewport.Tracker>
        <ScrollView>
          <View>
            <VideoPlayer
              video={require('../image/video.mp4')}
              autoplay={false}
              defaultMuted={true}
              videoWidth={1500}
              videoHeight={1000}
              thumbnail={route.params.data.banner}
            />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>
              {route.params.data.title}
            </Text>
            <View style={{marginTop: 5}}>
              <Text style={{fontSize: 16}}>
                Join the most comprehensive and bestselling Angular course on
                Udemy and learn all about this amazing framework from the ground
                up, in great depth! This course starts from scratch, you neither
                need to know Angular 1 nor Angular 2! From Setup to Deployment,
                this course covers it all! You'll learn all about Components,
                Directives, Services, Forms.
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 15}}>
            <Text style={{fontSize: 15}}>posted by</Text>
            <View style={{marginLeft: 12}}>
              <Text style={{color: 'purple', fontWeight: '600', fontSize: 17}}>
                {route.params.data.author}
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 15}}>
            <View>
              <Image
                source={require('../icons/update.png')}
                style={{width: 20, height: 20, tintColor: '#8e8e8e'}}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text>Last updated 20 Aug 2022</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 15}}>
            <View>
              <Image
                source={require('../icons/language.png')}
                style={{width: 20, height: 20, tintColor: '#8e8e8e'}}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text>English</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 15}}>
            <View>
              <Image
                source={require('../icons/subtitle.png')}
                style={{width: 20, height: 20, tintColor: '#8e8e8e'}}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text>English</Text>
            </View>
          </View>

          <View style={{marginLeft: 15, marginTop: 12}}>
            <Text style={{fontSize: 28, color: 'black', fontWeight: 'bold'}}>
              $39.00
            </Text>
          </View>

          <TouchableOpacity>
            <View
              style={{
                width: '80%',
                backgroundColor: '#9900cc',
                alignSelf: 'center',
                marginTop: 15,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Text style={{color: '#fff', fontWeight: '500', fontSize: 22}}>
                Buy Now
              </Text>
            </View>
          </TouchableOpacity>
          <ViewportAware
            onViewportEnter={() => setVisibleFooter(false)}
            onViewportLeave={() => setVisibleFooter(true)}>
            <View
              style={{
                width: '80%',
                backgroundColor: '#fff',
                alignSelf: 'center',

                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <Text style={{color: 'black', fontWeight: '500', fontSize: 22}}>
                Add to Cart
              </Text>
            </View>
          </ViewportAware>

          <View style={{marginLeft: 15, marginTop: 15, marginBottom: 30}}>
            <Text
              style={{
                color: 'black',
                fontWeight: '700',
                fontSize: 24,
              }}>
              Curiculam
            </Text>
            <Text style={{fontSize: 17}}>
              10 section, 64 video lectures, 12 notes
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              width: '100%',
              height: '100%',
            }}>
            <FlatList
              data={videoDetails}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 15,
                      }}>
                      <View style={{marginLeft: 20}}>
                        <Text style={{fontSize: 18}}>{item.indexNumber}</Text>
                      </View>
                      <View style={{marginLeft: 25}}>
                        <Text
                          style={{
                            fontSize: 22,

                            fontWeight: 'bold',
                          }}>
                          {item.videoNumber}
                        </Text>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={{fontSize: 16, fontWeight: '500'}}>
                            {item.videoDuration}
                          </Text>
                          <View style={{marginLeft: 15}}>
                            <Image
                              source={item.subtitle}
                              style={{width: 15, height: 15}}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={{left: 190}}>
                        <Image
                          source={item.playButton}
                          style={{width: 25, height: 25}}
                          resizeMode={'contain'}
                        />
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </ScrollView>
        </ScrollView>
      </Viewport.Tracker>
      {visibleFooter ? (
        <View style={{flexDirection: 'row', width: '100%'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#9900cc',
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#fff', fontWeight: '500', fontSize: 22}}>
              Buy Now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '50%',
              backgroundColor: '#fff',
              alignSelf: 'center',

              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
            }}>
            <Text style={{color: 'black', fontWeight: '500', fontSize: 22}}>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export {ViewCourse};
