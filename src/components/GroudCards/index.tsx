import { Container, Icon, Title } from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {  
    title: string;
    icon: string;
}

export function GroupCard({title, icon, ...rest}: Props){
    return (

        <Container {...rest}>
            <Icon />
            <Title>{title}</Title>
        </Container>

    );}