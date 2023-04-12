
import { Instagram, FavoriteBorderOutlined, MapsUgcOutlined } from '@mui/icons-material';

import { AppBar, Toolbar, styled } from '@mui/material';
import { Box } from '@mui/system';

// component
import Search from './Search';

const StyledHeader = styled(AppBar)`
background:#fff;
box-shadow:none;
height:60px;
`;
const ButtonsWrapper = styled('div')({
    display:'flex',
    alignItems:"center",
    width:'100%',
    justifyContent:'space-between',
    color:'#000'
})



const Header = () => {
    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 60 }} >
            <ButtonsWrapper>
                <Instagram style={{ color: "#000" }} />
                <Search />
                
                    <Box>
                        <FavoriteBorderOutlined />
                    </Box>
                    <Box>
                        <MapsUgcOutlined />
                    </Box>
                </ButtonsWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;