import { View, Text } from 'react-native';

export default function Greet({ name,age }) {
  return (
    <View>
      <Text>Hello,{name} ,Your Age: {age}</Text>
      
    </View>
  );
}
