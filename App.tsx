import {Text, View} from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <Text style={{color: colors.black}}>Hello</Text> */}
      <Text
        style={{
          color: colors.black,
          fontSize: font.size.lg,
          //   fontWeight: "normal",
        }}>
        <AntDesign name="stepforward" />
      </Text>
    </View>
  );
};

export default App;
