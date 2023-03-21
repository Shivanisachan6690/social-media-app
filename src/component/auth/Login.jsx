import React from 'react'
import { Box, TextField, Typography, Button, styled } from '@mui/material';
import {Link} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@mui/material';

const Logo = styled(Typography)`
margin:20px auto 10px auto;
font-size:35px;
font-weight:600;
`;

const SignUpWrapper = styled(Box)
(({theme})=>({
 display:'flex',
 marginTop:'10%',
 alignItem: 'center',
 justifyContent:'center',
 flexDirection: 'column',
 flexShrink: 0,
 padding: '10px 0',
 verticalAlign: 'baseline',

 [theme.breakpoints.down('sm')]:{
  marginTop:'30%',
}
}))
;

const Container = styled(Box)`
width:350px;
margin-top:10px;
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
(({theme})=>({
textAlign:'center',
 width:'100%',
border:"2px solid #dfdfdf",
BorderRadius:2,
padding:'25px 0',
margin:'10px 0',
    [theme.breakpoints.down('sm')]:{
        position:'relative',
        bottom:-180,
    }
  }))
  ;

 
const Text = styled(Typography)`
 font-size: 12px;
 font-weight: 400;
 color:#8e8e8e;
 margin-top:15px;
 `;
const SignUp = styled(Link)`
text-decoration:none;
color:#1895f6;
`;
const Login = () => {

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
                    <Wrapper>
                        <TextArea placeholder='username Or email address' />
                        <TextArea placeholder='Password' />
                        <StyledButton variant='contained'>Log In</StyledButton>
                        <Text>Forgotten your password?</Text>
                    </Wrapper>
                   
                </SignUpCard>
                <NoAccount>
                    <Typography style ={{fontSize:'12px'}}> don't Have an account?&nbsp;
                        <SignUp>Sign Up</SignUp> </Typography>
                </NoAccount>
            </Container>
        </SignUpWrapper>
    )
}

export default Login;