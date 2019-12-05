import React from 'react'
import { View, Image } from 'react-native'

class App extends React.Component {
  render() {
    return(
      <View>
        <Image source={{ uri: 'https://awesomereactnative.com/images/react-logo.png' }}
            style={{ width: 400, height: 400 }}></Image>
      </View>
    )
  }
}

export default App