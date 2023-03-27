import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import OptionsMenu from 'react-native-option-menu';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

const FlatlistComp = ({data}) => {
  const navigation=useNavigation()
  const myIcon = <Feather name="more-vertical" size={26} color="grey" />;
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
  return (

    <View style={styles.conatiner}>
      <View style={styles.topContainer}>
        <Image source={{uri: data?.avatar}} style={styles.avatar} />
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{data?.name}</Text>
          <Text style={styles.folowerText}>
            {data?.followers}
            {'\b'}Followers{'\b'}
            {'\u2022'}
            {'\b'}
            {moment.utc(data?.weeksAgo).local().startOf('seconds').fromNow()}
            {'\b'}
          </Text>
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
      <View>
        <Image style={styles.postImage} source={{uri: data?.postImage}} />
        <Text style={styles.postText}>{data?.message}</Text>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.bottomContainer}>
        {/* like button */}
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
          <Text style={styles.likeText}>
            {like === 'first' && likeArr.includes(data?.id)
              ? data?.like + 1
              : data?.like}
          </Text>
        </TouchableOpacity>
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
          <Text style={styles.likeText}>
            {like === 'second' && likeArr.includes(data?.id)
              ? data?.unlike + 1
              : data?.unlike}
          </Text>
        </TouchableOpacity>
        {/* comment button */}
        <TouchableOpacity onPress={() => {navigation.navigate('comments',{id:data?.id})}}>
          <Image
            style={styles.likeIcon}
            source={require('../Images/Comment-Add.png')}
          />
          <Text style={styles.likeText}>{data?.comment?.length}</Text>
        </TouchableOpacity>
        {/* share button */}
        <TouchableOpacity onPress={() => {navigation.navigate('add')}}>
          <Image
            style={[styles.likeIcon]}
            source={require('../Images/share.png')}
          />
          <Text style={styles.likeText}>Share</Text>
        </TouchableOpacity>
        {/* save button */}
        <View style={styles.saveButton}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={styles.likeIcon}
            source={require('../Images/save.png')}
          />
          <Text style={styles.likeText}>Save</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FlatlistComp;
const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff',
    width: windowW / 1.1,
    padding: 10,
    margin: '2%',
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
    margin: 5,
    alignSelf: 'center',
    width: '73%',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  optionIcon: {
    margin: 5,
    alignSelf: 'center',
  },
  folowerText: {
    color: 'grey',
    fontSize: 15,
    fontVariant: 'bold',
    marginTop: 3,
  },
  postImage: {
    height: windowH / 3,
    width: windowW / 1.2,
    margin: 10,
  },
  postText: {
    margin: 10,
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  horizontalLine: {
    borderColor: '#f7f7f7',
    borderWidth: 1,
    margin: '3%',
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
  saveButton:{
    width:'48%',
    // backgroundColor:'yellow',
    margin:-8,
    padding:0,
    alignSelf:'center',
    alignItems:'flex-end'
  }
});
