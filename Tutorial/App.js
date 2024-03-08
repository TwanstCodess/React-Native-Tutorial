import { StatusBar } from 'expo-status-bar';
import {  View ,Text,Image, ImageBackground} from 'react-native';
const Imagest=require("./assets/favicon.png");

export default function App() {
  return (
    <View style={{flex:1,backgroundColor:"plum",alignItems:"center",justifyContent:"center"}}>

{/* static Image */}
{/* <Image source={require("./assets/favicon.png")}></Image> */}
{/* <Image source={Imagest}></Image> */}


{/* Network Image */}
{/* <Image source={{ uri: 'https://picsum.photos/300' }}  style={{ width: 300, height: 300 }} />
 */}

{/* Image Background */}

{/* <ImageBackground source={{ uri: 'https://picsum.photos/300' }} style={{ width: 300, height: 300 }}>
<Text>Image Background</Text>
</ImageBackground> */}

    </View>
  );
}

