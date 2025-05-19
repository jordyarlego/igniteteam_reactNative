
import { TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';


export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonIconTypeStyleProps;
}


export const Container = styled(TouchableOpacity)<Props>`

${({ theme, type }) => css`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    margin-left: 12px;
    background-color: ${type === 'PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.RED_DARK};
`}

`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK,
}))`

`;