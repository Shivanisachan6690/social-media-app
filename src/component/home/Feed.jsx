import { Box,styled,Button } from '@mui/material';
import Categories from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';


const FeedWrapper= styled(Box)`
display:flex;
`;

const Sidebar = styled(Box)`
wtdth:100%;
`;

const Navigation = styled(Box)
(({theme})=>({
    height:'90vh',
    display:'flex',
    [theme.breakpoints.down('md')]:{
        justifyContent:'space-between',
       }
}));


const StyledButton = styled(Button)
(({theme})=>({
    fontSize:15,
    padding:'0 24px 20px 24px',
    color:'#000',
    '&>*':{
        fontSize:35,
        fontWeight:100,
    },
    
    [theme.breakpoints.down('md')]:{
     display:'none',
    }
  }));



const Feed = () => {
    return (
        <FeedWrapper>
            <Sidebar>
                <Navigation>
                    <Categories />
                </Navigation>
                <StyledButton><MenuIcon/>&nbsp; More</StyledButton>
            </Sidebar>
            <Box></Box>
            <Box></Box>
        </FeedWrapper>

    )
}

export default Feed