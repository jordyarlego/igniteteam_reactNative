import { Container, HeaderList } from "./styles";
import { Header } from "../../components/Header";
import { Destaques } from "../../components/Destaques";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Input } from "../../components/Input";
import { Form } from "./styles";
import { Filter } from "../../components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";

export function Players() {

    const [team, setTeam] = useState("Time A");
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
            </HeaderList>
        </Container>
    )
}