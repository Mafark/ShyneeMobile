import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {VIEW_PROFILE} from '../../../constants/screens';
import styles from './styles';

const ShyneeItem = ({shynee, navigation}) => 
  <View style={styles.sheneeСell}>
    <TouchableOpacity onPress={() => navigation.navigate(VIEW_PROFILE)}>
      <View style={styles.avatarContainer}>
        <View style={styles.nicknameContainer}>
          <Text style={styles.nickname}>{shynee.nickname}</Text>
        </View>
        <View style={styles.blackout}/>
        <Image style={styles.avatar} source={require('./avatar.jpg')}/>
      </View>
    </TouchableOpacity>
  </View>;

ShyneeItem.propTypes = {
  shynee: PropTypes.object,
  navigation: PropTypes.object,
};

export default ShyneeItem;
