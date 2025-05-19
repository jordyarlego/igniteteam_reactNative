import { Header } from '../../components/Header';
import { Container, Content, Icon } from './styles';
import { Destaques } from '../../components/Destaques';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
export function NewGroup() {
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <Destaques title="Nova turma" subtitle="Crie a turma para adicionar pessoas" />
                <Input placeholder="Nome da turma" />
                <Button title="Criar" onPress={() => {}}
                style={{ marginTop: 20 }} />
            </Content>
        </Container>
    )
}