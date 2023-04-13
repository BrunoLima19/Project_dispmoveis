import {View, Text} from 'react-native'
export default function HelloWorld1() {
  return (
    <View
    style={{
      flex:1, 
      justifyContent: "center", /* alinhando no centro */
      alignItems: "center", /* alinhando no centro */
      backgroundColor: "red" /* definindo a cor do fundo */
    }}>
    <Text
      style={{
        fontSize: 30, /* definindo o tamanho da fonte */
        fontWheight: "bold", /* definindo a fonte */ 
        color: "white", /* definindo a cor da fonte */
        textTransform: "uppercase", /* transformando o texto */
      }}> Boa noite a todos </Text>
    </View>
  )
}
