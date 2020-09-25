import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar, 
  Image, 
  TouchableOpacity,
  Dimensions, 
  ImageBackground
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const SearchResult = ({ navigation }) => {

  return (
    <>
      <StatusBar 
      backgroundColor='black'
      barStyle='light-content'
      />
      <LinearGradient colors={['#023047', '#000000']} style={styles.linearGradient}
      style={styles.container}
      >
        <ScrollView>
      
        <View style={styles.boxTop}>
          <Image 
            source={require('../../res/img/lendo_musica_logo.png')}
            style={styles.logo}
          />
          <Text style={styles.letraEncontrada}>Letra encontrada</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.boxMeio}
          onPress={() => navigation.navigate('Result')}
        >
          <ImageBackground
            source={require('../../res/img/imagem.png')}
            style={styles.imagem}
          >
            <View style={styles.textosImagem}>
              <Text style={styles.textoArtistaImagem}>Elis Regina</Text>
              <Text style={styles.textoNomeMusicaImagem}>O bêbado e o equilibrista</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        
        <Text style={styles.pergunta}>Não encontrou o que procurava?</Text>
        
        <TouchableOpacity 
          style={styles.buscarButton}
          onPress={() => navigation.navigate('Home')}
        >
          <View style={styles.dentroButton}>
            <Image 
              source={require('../../res/img/buscar.png')}
              style={styles.imgBuscar}
            />
            <Text style={styles.buscar}>Nova Busca</Text>
          </View>
        </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

const largura = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  container:{
    flex: 1,
    alignItems: 'center'
  },
  boxTop:{
    marginTop: 60,
    alignItems: 'center'
  },
  logo:{
    width: 232,
    height: 30,
  },
  letraEncontrada:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginTop: 49,
  },
  boxMeio:{
    marginTop: 38,
    alignItems: 'center',
  },
  textosImagem:{
    marginLeft: 20,
    marginBottom: 13,
    backgroundColor: 'transparent',
    opacity: 1
  },
  textoArtistaImagem:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 1
  },
  textoNomeMusicaImagem:{
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: "#FFFFFF",
    opacity: 1
  },
  imagem:{
    justifyContent: 'flex-end',
    width: 274,
    height: 152,
    backgroundColor: 'black',
    opacity: 0.5
  },
  pergunta:{
    marginTop: 40,
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: '#FFFFFF'
  },
  buscarButton:{
    marginTop: 30,
    paddingLeft: largura/6,
    paddingRight: largura/6,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#FFB703",
  },
  dentroButton:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgBuscar:{
    width: 22,
    height: 24
  },
  buscar:{
    marginTop: 13,
    marginLeft: 15,
    marginBottom: 13,
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#FFB703'
  },
});

export default SearchResult;
