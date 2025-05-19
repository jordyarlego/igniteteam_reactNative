import { Container, HeaderList, NumberOfPlayers } from "./styles";
import { Header } from "../../components/Header";
import { Destaques } from "../../components/Destaques";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Input } from "../../components/Input";
import { Form } from "./styles";
import { Filter } from "../../components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { ListEmpty } from "../../components/ListEmpty";
import { PlayerCard } from "../../components/PlayerCard";
import { Button } from "../../components/Button";

export function Players() {

    const [team, setTeam] = useState("Time A");
    const [players, setPlayers] = useState([]);
    return (
        <Container>
            <Header showBackButton />
            <Destaques title="Grupos" subtitle="Jogue com sua turma" />
            <Form>
                <Input placeholder="Nome da pessoa"
                autoCorrect={false}
                />
                <ButtonIcon icon="add" />
            </Form>
            <HeaderList>
                <FlatList
                data={["Time A", "Time B"]}
                keyExtractor={item => item}
            renderItem={( { item } ) => (
                <Filter title={item} 
                isActive={item === team}
                onPress={() => setTeam(item)}
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 24 }}
            />

            <NumberOfPlayers>{players.length}</NumberOfPlayers>
            </HeaderList>
            <FlatList
            data={players}
            keyExtractor={item => item}
            renderItem={({item})=>(
                <PlayerCard name={item} 
                onRemove={() => {}} />
            )}
            ListEmptyComponent={() => (
                <ListEmpty message="Nenhum jogador adicionado 😢" />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
                { paddingBottom: 100 },
                players.length === 0 && { flex: 1 }
            ]}
            />
            
         <Button title="Remover Turma" type="SECONDARY" />
        </Container>
    )
}