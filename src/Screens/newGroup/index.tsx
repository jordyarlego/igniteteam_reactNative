import { Header } from '../../components/Header';
import { Container, Content, Icon } from './styles';
import { Destaques } from '../../components/Destaques';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';




export function NewGroup() {
    const navigation = useNavigation();

    const [group, setGroup] = useState('');

    

    function handleNewGroup() {
        navigation.navigate('players', { group });
    }
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <Destaques title="Nova turma" subtitle="Crie a turma para adicionar pessoas" />


                <Input placeholder="Nome da turma" 
                onChangeText={setGroup}
                value={group}
                />


                <Button title="Criar" onPress={() => {}}
                style={{ marginTop: 20 }} 
                onPressIn={handleNewGroup}/>
            </Content>
        </Container>
    )
}