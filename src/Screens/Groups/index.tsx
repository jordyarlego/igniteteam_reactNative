
import { Header } from '../../components/Header';
import { FlatList } from 'react-native';
import { Destaques } from '../../components/Destaques';
import { GroupCard } from '../../components/GroudCards';
import { Container } from './styles'
import { ListEmpty } from '../../components/ListEmpty';
import { useState } from 'react';
import { Button } from '../../components/Button';

export  function Groups() {

  const [groups, setGroups] = useState<string[]>([]);



  return (
    <Container>
      <Header />
      <Destaques title="Grupos" subtitle="Jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => <GroupCard title={item} icon="group" onPress={() => {}} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Nenhum grupo cadastrado.. 😢" />}
      />


      <Button title="Criar novo grupo" onPress={() => {}} />
    </Container>
  );
}


