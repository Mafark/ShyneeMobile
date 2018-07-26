import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Platform from 'Platform';
import {View, Text, TouchableNativeFeedback, TouchableOpacity} from 'react-native';

import styles from './styles';

class Button extends PureComponent {
  render() {
    const {
      onPress = () => {},
      title,
      disabled,
      style: customStyles,
    } = this.props;
    // const accessibilityTraits = ['button'];
    // if (disabled) {
    //   // Change button styles
    //   accessibilityTraits.push('disabled');
    // }
    const formattedTitle = title.toUpperCase();
    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
      <View style={{...styles.container, ...customStyles}}>
        <Touchable
          disabled={disabled}
          onPress={onPress}>
          <View style={styles.button}>
            <Text style={styles.text} disabled={disabled}>
              {formattedTitle}
            </Text>
          </View>
        </Touchable>
      </View>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.func,
  style: PropTypes.object
};

export default Button;