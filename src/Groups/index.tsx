
import { Header } from '../components/Header';
import { Destaques } from '../components/Destaques';
import { GroupCard } from '../components/GroudCards';
import { Container } from './styles'

export  function Groups() {
  return (
    <Container>
      <Header />
      <Destaques title="Grupos" subtitle="Jogue com sua turma" />


      <GroupCard title="Turminha da pesada!" icon="group" onPress={() => {}} />
    </Container>
  );
}


