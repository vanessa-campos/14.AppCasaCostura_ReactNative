import React, { Component } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { form, header, footer } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleDown, faArrowLeftLong, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Database from '../database/Database'
import Produto from '../models/Produto'

export class Editar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Categoria: "", Nome: "", Descricao: "", Tamanho: "", Valor: "", Unidade: "", Quantidade: ""
        }
    }

    // EditarProduto = (id) => {
    //     const banco = new Database()
    //     banco.EditarProduto(id)
    // }

    render() {
        return (
            <View style={form.container3}>
                <TextInput style={form.input} placeholder="Categoria (Aviamentos/Tecidos)"
                    onChangeText={(valor) => { this.setState({ Categoria: valor }) }} />
                <TextInput style={form.input} placeholder=" Nome do Produto"
                    onChangeText={(valor) => { this.setState({ Nome: valor }) }} />
                <TextInput style={form.input} placeholder=" Descrição"
                    onChangeText={(valor) => { this.setState({ Descicao: valor }) }} />
                <TextInput style={form.input} placeholder=" Tamanho"
                    onChangeText={(valor) => { this.setState({ Tamanho: valor }) }} />
                <TextInput style={form.input} placeholder=" Valor (R$)"
                    onChangeText={(valor) => { this.setState({ Valor: valor }) }} />
                <TextInput style={form.input} placeholder="Unidade (Und/Metro)"
                    onChangeText={(valor) => { this.setState({ Unidade: valor }) }} />
                <TextInput style={form.input} placeholder=" Quantidade"
                    onChangeText={(valor) => { this.setState({ Quantidade: valor }) }} />
                <TouchableOpacity style={form.button}
                    onPress={() => {
                        this.CadastrarProduto(this.state.Categoria, this.state.Nome, this.state.Descricao,
                            this.state.Tamanho, this.state.Valor, this.state.Unidade, this.state.Quantidade),
                            Alert.alert(
                                "Confira em Lista de Produtos",
                                "Edição realizada com sucesso!",
                                [
                                    { text: "OK", onPress: () => console.log("OK Pressed") }
                                ]
                            );
                    }}>
                    <Text style={form.text}>Salvar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default function EditarProduto({ navigation }) {

    return (
        <View style={form.background}>
            <View style={header.container}>
                <Image source={require('../images/logo.png')} style={header.image} />
            </View>
            <View style={form.container1}>
                <View style={form.container2}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={form.icon}>
                        <FontAwesomeIcon icon={faArrowLeftLong} color={'#999'} size={15} />
                    </TouchableOpacity>
                    <View style={form.containerTitle}><Text style={form.title}>EDITAR PRODUTO</Text></View>
                </View>
                <Cadastro />
            </View>
            <View style={footer.container}>
                <Text style={footer.text}>© 2022 - A Casa da Costura   Todos os direitos reservados</Text>
            </View>
        </View>
    )
}