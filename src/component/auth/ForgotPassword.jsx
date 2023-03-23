import React from 'react'
import { Box, TextField, Typography, Divider, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@mui/material';

const Logo = styled(Typography)`
margin:20px auto 10px auto;
font-size:35px;
font-weight:600;
`;
const Subtitle = styled(Typography)`
color:#000;
font-size: 17px;
font-weight: 600;
line-height: 20px;
margin: 0 40px 0px 40px;
text-align: center;
`
const Solution = styled(Typography)`
color:#8e8e8e;
font-size: 12px;
font-weight: 400;
line-height: 20px;
text-align: center;
margin:15px;
`;
const SignUpWrapper = styled(Box)
    (({ theme }) => ({
        display: 'flex',
        alignItem: 'center', marginTop: '5%',
        justifyContent: 'center',
        flexDirection: 'column',
        flexShrink: 0,
        padding: '10px 0',
        verticalAlign: 'baseline',

        [theme.breakpoints.down('sm')]: {
            marginTop: '10%',
        }
    }))
    ;
const Container = styled(Box)`
width:380px;
// margin-top:10px;
margin-left:auto;
margin-right:auto;
`
const SignUpCard = styled(Box)`
text-align:center;
Border:2px solid #dfdfdf;
Border-radius:2px;
padding:25px 0;
`;
const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:10px 35px;
`;

const TextArea = styled(TextField)`
margin-bottom:10px;
&>div{
    Border-radius:10px;
};
&>div>input{
    background-color:#fafafa;
    Border-radius:10px;
    padding:9px 0 7px 8px;
}
`;

const StyledButton = styled(Button)`
width:100%;
height:30px;
font-size:12px;
border-radius:8px;
background:#0095f6
`;
const NoAccount = styled(Box)
    (({ theme }) => ({
        textAlign: 'center',
        width: '100%',
        border: "2px solid #dfdfdf",
        BorderRadius: 2,
        padding: '15px 0',
        margin: '10px 0',
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            bottom: -140,
        }
    }))
    ;


const Text = styled(Typography)`
 font-size: 12px;
 font-weight: 400;
 color:#8e8e8e;
 margin-top:15px;
 `;
const Login = styled(Link)`
text-decoration:none;
color:#000;
`;
const ForgotPassword = () => {

    const theme = createMuiTheme({
        Typography: { fontFamily: ['Handlee', 'cursive'].join(','), }
    });


    return (
        <SignUpWrapper>
            <Container>
                <SignUpCard>
                    <ThemeProvider theme={theme}>
                        <Logo>Instagram</Logo>
                    </ThemeProvider>
                    <Subtitle>Trouble with logging in?</Subtitle>
                    <Wrapper>
                        <Solution>Enter your email address, phone number or username, and we'll send you a link to get back into your account.</Solution>
                        <TextArea placeholder='Mobile Number Or email address' />
                        <StyledButton variant='contained'>Sign Up</StyledButton>
                        <Text>can't reset your Password?</Text><br />
                        <Divider />
                        <Typography style={{ color: '#8e8e8e', fontSize: '16px' }}>OR</Typography>
                        <Typography ><Login to='/signup'>Create New Account</Login> </Typography>
                    </Wrapper>
                </SignUpCard>
                <NoAccount>
                    <Typography ><Login to='/'>Back to Login</Login> </Typography>
                </NoAccount>
            </Container>
        </SignUpWrapper>
    )
}

export default ForgotPassword;