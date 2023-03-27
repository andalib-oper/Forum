import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useEffect,useState} from 'react';
import CustomHeader from '../../../assets/components/CustomHeader';
import CommentsComp from '../../../assets/components/CommentsComp';
import {useDispatch, useSelector} from 'react-redux';
import {addCommentById, getAllCommentsById} from '../../../redux/Feeds/actions';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay'
const Comments = ({route, navigation}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const [comment,setComment] = useState('')
  const feedState = useSelector(state => state.feedState);
  useEffect(() => {
    dispatch(getAllCommentsById(id));
  }, []);
  const users={
    createdAt: new Date(),
    name: 'Myself Here',
    avatar:'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    weekAgo: new Date(),
    like: 0,
    unlike:0
  }
  const postComment= (id) =>{
    dispatch(addCommentById(users?.createdAt,users?.name,users?.avatar,users?.weekAgo,users?.like,users?.unlike,comment,id))
  }
  return (
    <View style={styles.container}>
      <OrientationLoadingOverlay
          visible={feedState.loading}
          color="white"
          indicatorSize="large"
          messageFontSize={24}
          />
      <CustomHeader
        backButton={() => navigation.goBack()}
        headerName="Comments"
        rightbutton={true}
      />
      <ScrollView>
      <FlatList
        style={styles.flatlist}
        data={feedState.commentData}
        renderItem={({item}) => <CommentsComp data={item} />}
        keyExtractor={item => item.id}
      />
      </ScrollView>
      <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Add a comment"
            onChangeText={(e) => setComment(e)}
          />
        <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>postComment(id)}>
          <Image
            style={styles.send}
            source={require('../../../assets/Images/send.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Comments;
const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatlist: {
    padding: 10,
    width: windowW / 1,
    marginBottom:'5%'
  },
  textInputView: {
    flexDirection: 'row',
    marginTop: 10,
    position: 'absolute',
    bottom: 0,
    height: 90,
    width: windowW / 1,
    backgroundColor: '#fff',
    elevation: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  textInput: {
    height: 50,
    alignSelf: 'center',
    marginLeft: 15,
    padding: 10,
    width: windowW / 1.3,
    borderRadius: 20,
    backgroundColor: '#f0f3f4',
  },
  send: {
    margin:5,
    alignSelf: 'center',
    height: 40,
    width: 40,
  },
});
