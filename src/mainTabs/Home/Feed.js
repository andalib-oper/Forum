import {Dimensions, StyleSheet, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllFeeds} from '../../../redux/Feeds/actions';
import FlatlistComp from '../../../assets/components/FlatlistComp';

const Feed = () => {
  const dispatch = useDispatch();
  const feedState = useSelector(state => state.feedState);
  useEffect(() => {
    dispatch(getAllFeeds());
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={feedState.filtered}
        renderItem={({item}) => <FlatlistComp data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Feed;
const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // // backgroundColor: '#fff',
    // alignSelf: 'center',
    // width: windowW / 1.1,
    // padding: 10,
  },
  topContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  flatlist: {
    padding: 10,
    width: windowW / 1,
  },
});
