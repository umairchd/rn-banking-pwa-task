import React from 'react';
import {StyleSheet, View, FlatList, ImageBackground} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import {IconButton} from '../index';
import buttonStyleHooks from '../Hooks/buttonStyleHooks';
import {modalIconData} from '../../../utilities';

const IconButtonModal = ({isModalVisible, onPress, item, user}) => {
  const {getButtonCustomStyle} = buttonStyleHooks();

  const Item = ({item, index}) => {
    return (
      <IconButton
        icon={item?.icon}
        title={item?.title}
        container={{bottom: getButtonCustomStyle(index)}}
      />
    );
  };

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={onPress}
      onBackButtonPress={onPress}
      transparent={true}
      backdropOpacity={0.2}
      animationIn="slideInUp"
      style={styles.modalStyle}>
      <ImageBackground
        source={require('../../assets/images/test.png')}
        blurRadius={30}
        style={styles.imageBg}>
        <View style={styles.modalContainer}>
          <View style={styles.buttonView}>
            <FlatList
              data={modalIconData}
              horizontal
              keyExtractor={(item, index) => item + index.toString()}
              renderItem={({item, index}) => <Item item={item} index={index} />}
              contentContainerStyle={styles.contentContainerStyle}
            />
          </View>
          <IconButton
            containerStyle={styles.mainButton}
            onPress={onPress}
            icon={require('../../assets/icons/cross.png')}
          />
        </View>
      </ImageBackground>
    </Modal>
  );
};

IconButtonModal.propTypes = {
  isModalVisible: PropTypes.bool,
  onPress: PropTypes.func,
  onPressClose: PropTypes.func,
  item: PropTypes.object,
  user: PropTypes.object,
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalStyle: {
    flex: 1,
    paddingBottom: 30,
    margin: 0,
    backgroundColor: '#ffffff00',
  },
  buttonView: {
    position: 'absolute',
    bottom: 100,
    width: '85%',
    height: '22%',
  },
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  mainButton: {
    position: 'absolute',
    bottom: 50,
    padding: 30,
    borderRadius: 70,
    height: 70,
    width: 70,
  },
  iconStyle: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textAlign: 'center',
  },
  text: {
    margin: 12,
    color: 'white',
  },
  imageBg: {
    width: '100%',
    height: '100%',
  },
});

export {IconButtonModal};
