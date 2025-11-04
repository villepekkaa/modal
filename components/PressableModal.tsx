import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';

interface PressableModalProps {
  visible: boolean;
  onClose: () => void;
  message: string;
}

const PressableModal = ({visible, onClose, message}: PressableModalProps) => {
  return (
    <Modal transparent={false} visible={visible} onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{message}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 120,
  },
  modalView: {
    margin: 20,
    width: '100%',
    backgroundColor: 'rgba(237, 233, 233, 1)',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000000ff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
  },
  buttonClose: {
    backgroundColor: 'rgba(237, 233, 233, 1)',
  },
  textStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 50,
    textAlign: 'center',
  },
});

export default PressableModal;
