import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Animated} from 'react-native';

import Text from '../../Text';
import Button from '../../Button';
import {colors} from '../../../constants/styles';

import styles from './styles';

class Header extends PureComponent {
  render() {
    const {animationParams: params, isReady, onIAmReadyButtonPress} = this.props;
    return (
      <Animated.View style={{height: params.headerHeight}}>
        <View style={styles.headerContainer}>
          <Animated.View style={[styles.titleContainer, {backgroundColor: params.headerBackgoundColor}]}>
            <Text style={[styles.title, {color: params.headerColor}]}>Shynees Around</Text>
          </Animated.View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title={isReady ? 'I AM NOT READY' : 'I AM READY'}
            style={[styles.button, {top: params.headerIndent}]}
            buttonStyle={isReady ? {backgroundColor: colors.grey} : null}
            type='colorful'
            onPress={onIAmReadyButtonPress}
          />
        </View>
      </Animated.View>
    );
  }
}

Header.propTypes = {
  animationParams: PropTypes.object,
  onIAmReadyButtonPress: PropTypes.func,
  isReady: PropTypes.bool
};

export default Header;
