import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import {React} from 'react';

type Filme = {
  titulo: string;
  diretor: string;
  origem: string;
  cartaz: any;
  ano: number;
};

const filmes: Filme[] = [
  {
    titulo: 'A Viagem de Chihiro',
    diretor: 'Hayao Miyazaki',
    origem: 'Japão',
    cartaz: require('./assets/filme1.jpg'),
    ano: 2001,
  },

  {
    titulo: 'Parasita',
    diretor: 'Bong Joo Ho',
    origem: 'Coréia do Sul',
    cartaz: require('./assets/filme2.jpg'),
    ano:2019,
  },

  {
    titulo: 'Ponyo',
    diretor: 'Hayao Miyazaki',
    origem: 'Japão',
    cartaz: require('./assets/filme3.png'),
    ano:2008,
  },

  {
    titulo: 'O tempo com você',
    diretor: 'Makoto Shinkai',
    origem: 'Japão',
    cartaz: require('./assets/filme4.png'),
    ano:2019,
  },
]


export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
      data={filmes}
      keyExtractor={(item: { titulo: any; }) => item.titulo}
        renderItem={({ item }) => (
          <View style={styles.card}>
          <Image source={item.cartaz}
          style={styles.image}/>
          <View style={styles.info}> 
          <Text style={styles.title}>{item.titulo}</Text>
            <Text>Diretor: {item.diretor}</Text>
            <Text>Origem: {item.origem}</Text>
            <Text>Ano: {item.ano}</Text>
            </View> 
          </View>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40, 
    paddingHorizontal: 10  
  },

  card: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
  },

  image: {
    width: 100,
    height: 150,
    borderRadius: 8
  },

  info: {
    marginLeft: 10,
    justifyContent: 'space-around',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});
