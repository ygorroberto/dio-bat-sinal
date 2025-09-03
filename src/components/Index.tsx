import { Text, Image, Pressable } from 'react-native';
import Form from './partials/Form';
import { useState } from 'react';

export default function Index() {

    const [showForm, setShowForm] = useState(false);

    function activateBatSignal() {
        setShowForm((prev) => !prev);
    }

    return (
        <>
            {!showForm && (
                <>
                    {/* imagem de fundo */}
                    <Image
                        source={require('./../../assets/batsinal.png')}
                        style={{ height: 200, width: '100%', resizeMode: 'contain' }}
                    />

                    {/* botão */}
                    <Pressable
                        onPress={activateBatSignal}
                        style={{ marginTop: 50, padding: 10, borderWidth: 1, borderRadius: 5, borderColor: '#FFF200' }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: '500', color: '#fff' }}>
                            Activate Bat-Signal
                        </Text>
                    </Pressable>
                </>
            )}

            {showForm && (
                <Form visible={showForm} onClose={() => setShowForm(false)} />
            )}
        </>
    );

}