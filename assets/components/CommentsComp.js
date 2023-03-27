import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import OptionsMenu from 'react-native-option-menu';
import {ScrollView} from 'react-native-gesture-handler';

const CommentsComp = ({data, navigation}) => {
  const myIcon = <Feather name="more-vertical" size={18} color="grey" />;
  const [like, setLike] = useState('');
  const [likeArr, setLikeArr] = useState([]);
  const Top = () => {};
  const Newest = () => {};
  const likeFunc = id => {
    if (likeArr.includes(id)) {
      setLikeArr(likeArr.filter(val => val !== id));
    } else {
      setLikeArr([...new Set([...likeArr, id])]);
    }
  };
  console.log('log', data?.reply);
  return (
    <>
      <ScrollView>
        <View style={styles.conatiner}>
          <Image source={{uri: data?.avatar}} style={styles.avatar} />
          <View style={styles.topContainer}>
            <View style={styles.nameView}>
              <Text style={styles.nameText}>
                {data?.name}
                <Text style={{color: 'grey', fontSize: 15}}>
                  {'\b'}
                  {moment
                    .utc(data?.weekAgo)
                    .local()
                    .startOf('seconds')
                    .fromNow()}
                </Text>
              </Text>
              <Text style={styles.message}>{data?.message}</Text>
              <View style={styles.bottomContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setLike('first'), likeFunc(data?.id);
                  }}>
                  {like == 'first' && likeArr.includes(data?.id) ? (
                    <Image
                      style={styles.likeIcon}
                      source={require('../Images/Thumbs-Up.png')}
                    />
                  ) : (
                    <Image
                      style={styles.likeIcon}
                      source={require('../Images/Thumbs-Up-no.png')}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.likeText}>
                  {like === 'first' && likeArr.includes(data?.id)
                    ? data?.like + 1
                    : data?.like}
                </Text>
                {/* unlike button */}
                <TouchableOpacity
                  onPress={() => {
                    setLike('second');
                    likeFunc(data?.id);
                  }}>
                  {like === 'second' && likeArr.includes(data?.id) ? (
                    <Image
                      style={styles.likeIcon}
                      source={require('../Images/Thumbs-down-color.png')}
                    />
                  ) : (
                    <Image
                      style={styles.likeIcon}
                      source={require('../Images/Thumps-down.png')}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.likeText}>
                  {like === 'second' && likeArr.includes(data?.id)
                    ? data?.unlike + 1
                    : data?.unlike}
                </Text>
                {/* comment button */}
                <TouchableOpacity
                  onPress={() => {
                    // navigation.navigate('comments', {id: data?.id});
                  }}>
                  <Image
                    style={styles.likeIcon}
                    source={require('../Images/Comment-Add.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.likeText}>Replay</Text>
              </View>
              {/* reply back section */}
              <View style={styles.conatiner}>
                <Image source={{uri: data?.avatar}} style={styles.avatar} />
                <View style={[styles.topContainer, {width: '80%'}]}>
                  <View style={[styles.nameView, {width: '60%'}]}>
                    <Text style={[styles.nameText, {fontSize: 14}]}>
                      {data?.name}
                      <Text style={{color: 'grey', fontSize: 14}}>
                        {'\b'}
                        {moment
                          .utc(data?.weekAgo)
                          .local()
                          .startOf('seconds')
                          .fromNow()}
                      </Text>
                    </Text>
                    <Text style={styles.message}>{data?.message}</Text>
                    <View style={styles.bottomContainer}>
                      <TouchableOpacity
                        onPress={() => {
                          setLike('first'), likeFunc(15);
                        }}>
                        {like == 'first' && likeArr.includes(15) ? (
                          <Image
                            style={styles.likeIcon}
                            source={require('../Images/Thumbs-Up.png')}
                          />
                        ) : (
                          <Image
                            style={styles.likeIcon}
                            source={require('../Images/Thumbs-Up-no.png')}
                          />
                        )}
                      </TouchableOpacity>
                      <Text style={styles.likeText}>
                        {like === 'first' && likeArr.includes(15)
                          ? data?.like + 1
                          : data?.like}
                      </Text>
                      {/* unlike button */}
                      <TouchableOpacity
                        onPress={() => {
                          setLike('second');
                          likeFunc(15);
                        }}>
                        {like === 'second' && likeArr.includes(15) ? (
                          <Image
                            style={styles.likeIcon}
                            source={require('../Images/Thumbs-down-color.png')}
                          />
                        ) : (
                          <Image
                            style={styles.likeIcon}
                            source={require('../Images/Thumps-down.png')}
                          />
                        )}
                      </TouchableOpacity>
                      <Text style={styles.likeText}>
                        {like === 'second' && likeArr.includes(15)
                          ? data?.unlike + 1
                          : data?.unlike}
                      </Text>
                      {/* comment button */}
                      <TouchableOpacity
                        onPress={() => {
                          // navigation.navigate('comments', {id: data?.id});
                        }}>
                        <Image
                          style={styles.likeIcon}
                          source={require('../Images/Comment-Add.png')}
                        />
                      </TouchableOpacity>
                      <Text style={styles.likeText}>Replay</Text>
                    </View>
                  </View>
                  <View style={styles.optionIcon}>
                    <OptionsMenu
                      customButton={myIcon}
                      destructiveIndex={1}
                      options={['Top', 'Newest']}
                      actions={[Top, Newest]}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.optionIcon}>
              <OptionsMenu
                customButton={myIcon}
                destructiveIndex={1}
                options={['Top', 'Newest']}
                actions={[Top, Newest]}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CommentsComp;
const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff',
    width: windowW / 1,
    padding: 5,
    margin: '1%',
    flexDirection: 'row',
  },
  topContainer: {
    flexDirection: 'row',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 100 / 2,
    margin: 5,
  },
  nameView: {
    width: '73%',
  },
  nameText: {
    margin: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  optionIcon: {
    marginTop: 7,
    width: '15%',
    alignItems: 'flex-end',
  },
  folowerText: {
    color: 'grey',
    fontSize: 15,
    fontVariant: 'bold',
    marginTop: 7,
  },
  postImage: {
    height: windowH / 3,
    width: windowW / 1.2,
    margin: 10,
  },
  message: {
    margin: 3,
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    margin: 10,
    marginLeft: '2%',
  },
  likeIcon: {
    height: 25,
    width: 25,
    margin: '3%',
    alignSelf: 'center',
  },
  likeText: {
    fontSize: 14,
    color: 'grey',
    fontWeight: '600',
    padding: 5,
    alignSelf: 'center',
  },
});
