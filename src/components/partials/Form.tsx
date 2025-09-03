import { useState } from 'react';
import { ScrollView, View, TextInput, Image, Button, Alert } from 'react-native';

type FormProps = {
    visible: boolean;
    onClose: () => void;
};

export default function Form({ visible, onClose }: FormProps) {
    if (!visible) return null;

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [observation, setObservation] = useState('');

    function sendInformations() {
        Alert.alert('Sucesso', 'Informações enviadas com sucesso!');
        onClose();
    }

    return (
        <View style={{ width: '100%', alignItems: 'center' }}>
            <ScrollView
                style={{ width: '80%', padding: 10, borderWidth: 1, borderRadius: 5, borderColor: '#fff' }}
                contentContainerStyle={{ padding: 10 }}
                keyboardShouldPersistTaps="handled"
            >

                {/* imagem de fundo */}
                <Image source={require('./../../../assets/batsinal.png')}
                    style={{ height: 50, width: '100%', resizeMode: 'contain', marginBottom: 20 }}
                />

                <TextInput
                    value={name}
                    onChangeText={setName}
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderRadius: 5, borderColor: '#FFF200', marginTop: 10, marginBottom: 10 }}
                    placeholder='Digite seu nome...'
                />

                <TextInput
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderRadius: 5, borderColor: '#FFF200', marginTop: 10, marginBottom: 10 }}
                    placeholder='Digite seu telefone...'
                />

                <TextInput
                    value={location}
                    onChangeText={setLocation}
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderRadius: 5, borderColor: '#FFF200', marginTop: 10, marginBottom: 10 }}
                    placeholder='Informe sua localização...'
                />

                <TextInput
                    multiline={true}
                    numberOfLines={5}
                    onChangeText={setObservation}
                    value={observation}
                    style={{
                        backgroundColor: '#fff',
                        borderWidth: 1,
                        borderRadius: 5,
                        borderColor: '#FFF200',
                        marginTop: 10,
                        marginBottom: 10,
                        height: 120,
                        textAlignVertical: 'top'
                    }}
                    placeholder='Observações...'
                />

                <Button onPress={sendInformations} title='Enviar'></Button>

                {/* dando um espaçamento entre os botões */}
                <View style={{ height: 12 }} />

                <Button onPress={onClose} title="Cancelar" />
            </ScrollView>
        </View>
    );
}