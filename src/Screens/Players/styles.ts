import { styled , css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
${({ theme }) => css`
flex: 1;
background-color: ${theme.COLORS.GRAY_700};
padding: 24px;
`}
`;


export const Form = styled.View`
width: 100%;
background-color: ${({ theme }) => theme.COLORS.GRAY_700};

flex-direction: row;
justify-content: center;
border-radius: 6px;
`;


export const HeaderList = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
margin: 36px 0 16px;
`;

export const NumberOfPlayers = styled.Text`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.BOLD};
font-size: ${theme.FONT_SIZE.SM}px;
color: ${theme.COLORS.GRAY_200};
`}

margin-right: 24px;
`;