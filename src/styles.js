import { Dimensions, StyleSheet } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    row: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	column: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
    container: {
		flex: 1
	},
    preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: windowHeight,
    width: windowWidth
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

module.exports = styles;