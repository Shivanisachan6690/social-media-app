import { Box, styled, Button } from '@mui/material';
import Categories from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
// import Story from '../middleSection/storySection/Story';
import Header from '../header/Header';
// import Post from '../middleSection/postSection/Post';
// import Seggestion from '../seggestionSection/Seggestion';
const FeedWrapper = styled(Box)`
display:flex;
`;

const Sidebar = styled('div')(({ theme }) => ({
    width: '15%',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        position: 'fixed',
        left: 0,
        roght: 0,
        bottom: 0,
    }
}));



const Navigation = styled(Box)
    (({ theme }) => ({
        height: '90vh',

        display: 'flex',
        [theme.breakpoints.down('md')]: {
            height: '70px',
            justifyContent: 'space-between',
        }
    }));


const StyledButton = styled(Button)
    (({ theme }) => ({
        fontSize: 15,
        padding: '0 24px 20px 24px',
        color: '#000',
        '&>*': {
            fontSize: 35,
            fontWeight: 100,
        },

        [theme.breakpoints.down('md')]: {
            display: 'none',
        }
    }));

const SearchBarWrapper = styled(Box)
    (({ theme }) => ({
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'block',
        }
    }));

    const FrontPageWrapper = styled(Box)`
    width:85%
    background:#dfdfdf;
    `


const Feed = () => {
    return (
        <FeedWrapper>
            <SearchBarWrapper>
                <Header />
            </SearchBarWrapper>
            <Sidebar>
                <Navigation>
                    <Categories />
                </Navigation>
                <StyledButton><MenuIcon />&nbsp; More</StyledButton>
            </Sidebar>

            <Box>




            </Box>
        </FeedWrapper>

    )
}

export default Feed