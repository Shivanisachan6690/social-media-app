import React from 'react'
import { Box, TextField, Typography, Button, styled } from '@mui/material';
import {Link} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const Logo = styled(Typography)`
margin:20px auto 10px auto;
font-size:35px;
font-weight:600;
`;
const Subtitle = styled(Typography)`
color:#8e8e8e;
font-size: 17px;
font-weight: 600;
line-height: 20px;
margin: 0 40px 0px 40px;
text-align: center;
`
const SignUpWrapper = styled(Box)`
 display:flex;
 align-item: center;
 flex-direction: column;
 flex-shrink: 0;
 padding: 10px 0;
 vertical-align: baseline;
margin:15px 0;
 `;
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
width:75%;
height:30px;
font-size:12px;
border-radius:8px;
background:#0095f6
`;
const NoAccount = styled(Box)
(({theme})=>({
textAlign:'center',
 width:'100%',
border:"2px solid #dfdfdf",
BorderRadius:2,
padding:'25px 0',
margin:'10px 0',
    [theme.breakpoints.down('sm')]:{
        position:'relative',
        bottom:-160,
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
color:#1895f6;
`;
const SignUp = () => {

    const theme = createTheme({
        Typography: { fontFamily: ['Handlee', 'cursive'].join(','), }
    });


    return (
        <SignUpWrapper>
            <Container>
                <SignUpCard>
                    <ThemeProvider theme={theme}>
                        <Logo>Instagram</Logo>
                    </ThemeProvider>
                    <Subtitle>Sign up to see potos and videos from your friend</Subtitle>
                    <Wrapper>
                        <TextArea placeholder='Mobile Number Or email address' />
                        <TextArea placeholder='Full Name' />
                        <TextArea placeholder='username' />
                        <TextArea placeholder='Password' />

                        <Text>People who use our service may have uploaded your contact information to instagram.
                        <span style={{color:'#00376b'}}>Learn More</span>
                        </Text>
                        <Text>By signing up, you agree to our <span style={{color:'#00376b'}}>Terms, Privacy Policy</span> and <span style={{color:'#00376b'}}>Cookies Policy</span>.</Text>
                    </Wrapper>
                    <StyledButton variant='contained'>Sign Up</StyledButton>

                </SignUpCard>
                <NoAccount>
                    <Typography style ={{fontSize:'12px'}}>Have an account?&nbsp;
                        <Login to = '/'>Log in</Login> </Typography>
                </NoAccount>
            </Container>
        </SignUpWrapper>
    )
}

export default SignUp;