/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SectionList,
} from 'react-native';

export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      flatData:[
        {key:'1', nome: 'Diogo dos Santos1', idade:33},
        {key:'2', nome: 'Diogo dos Santos2', idade:33},
        {key:'3', nome: 'Diogo dos Santos3', idade:33},
        {key:'4', nome: 'Diogo dos Santos4', idade:33},
        {key:'5', nome: 'Diogo dos Santos5', idade:33},
        {key:'6', nome: 'Diogo dos Santos6', idade:33},
        {key:'7', nome: 'Diogo dos Santos7', idade:33},
        {key:'8', nome: 'Diogo dos Santos8', idade:33},
        {key:'9', nome: 'Diogo dos Santos9', idade:33},
        {key:'10', nome: 'Diogo dos Santos10', idade:33},
        {key:'11', nome: 'Diogo dos Santos11', idade:33},
        {key:'12', nome: 'Diogo dos Santos12', idade:33},
        {key:'13', nome: 'Diogo dos Santos13', idade:33},
        {key:'14', nome: 'Diogo dos Santos14', idade:33},
        {key:'15', nome: 'Diogo dos Santos15', idade:33},
        {key:'16', nome: 'Diogo dos Santos16', idade:33},
        {key:'17', nome: 'Diogo dos Santos17', idade:33},
        {key:'18', nome: 'Diogo dos Santos18', idade:33},
        {key:'19', nome: 'Diogo dos Santos19', idade:33},
        {key:'20', nome: 'Diogo dos Santos20', idade:33},
        {key:'21', nome: 'Diogo dos Santos21', idade:33},
        {key:'22', nome: 'Diogo dos Santos22', idade:33},
        {key:'23', nome: 'Diogo dos Santos23', idade:33},
        {key:'24', nome: 'Diogo dos Santos24', idade:33},
      ],

      sectionList: [
        {categoria: 'Bebidas', data: [{key:'1', produto:'Refrigerante'}, {key:'2', produto: 'Cerveja'}, {key:'3', produto:'Água Mineral'}, {key:'4', produto:'Vinho'}]},
        {categoria: 'Sobremesas', data: [{key:'5', produto:'Pudim'}, {key:'6', produto:'Pavê'}, {key:'7', produto:'Sorvete'}, {key:'8', produto:'Torta de Limão'}, {key:'8', produto:'Trufa de chocolate'}]},
        {categoria: 'Salgados', data: [{key:'9', produto:'Coxinha'}, {key:'10', produto:'Joelho'}, {key:'11', produto:'Kibe'}, {key:'12', produto:'Risole'}]},
      ]
    }
  }

  lista(item)
  {
    return(
      <Text>{item.nome}</Text>
    );
  }

  categoria(categoria)
  {
    return(
      <Text style={styles.tituloCategoria}>{categoria.categoria}</Text>
    );
  }

  subcategoria(subcategoria)
  {
    return(
      <Text>{subcategoria.produto}</Text>
    );
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.containerFlatlist}>
          <View style={styles.containerTitulo}>
            <Text style={styles.titulo}>FlatList</Text>
          </View>
          <View>
            <FlatList
              data={this.state.flatData}
              renderItem={({item})=>this.lista(item)}
            />
          </View>
        </View>

        <View style={styles.containerSectionlist}>
          <View style={styles.containerTitulo}>
            <Text style={styles.titulo}>SectionList</Text>
          </View>
          <View>
            <SectionList 
              sections={this.state.sectionList}
              renderItem={({item})=>this.subcategoria(item)}
              renderSectionHeader={({section})=>this.categoria(section)}
            />
          </View>
          
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
  },

  containerFlatlist:
  {
    height:250,
    marginBottom: 50,
  },

  containerSectionlist:
  {
    height:250,
  },

  containerTitulo:
  {
    height:40,
  },

  titulo:
  {
    fontSize: 22,
    fontWeight: 'bold',
  },

  tituloCategoria:
  {
    fontSize:24,
    backgroundColor: '#CCCCCC',
    padding:5,
    fontWeight: 'bold',
    elevation:3,
  }
 
});
