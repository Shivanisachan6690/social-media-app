
import { InputBase, Box,styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
background : #fff;
width:70%;
border-radius:2px;
margin-left:10px;
display:flex;
`;
const InputSearchBase = styled(InputBase)`
padding-left: 20px;
background:#dfdfdf;
width:100%;
font-size:unset;
`;
const SearchIconWrapper = styled(Box)`
color:#000;
background:#dfdfdf;
padding:5px;
dispaly:flex;
`;


const Search = () => {

    return (
        <SearchContainer>
            <InputSearchBase
                placeholder='Search'
            />

            <SearchIconWrapper>

                <SearchIcon />
            </SearchIconWrapper>
        </SearchContainer>

    )

}

export default Search;