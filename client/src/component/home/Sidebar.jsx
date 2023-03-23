import React from "react";
import { Box, Typography, styled } from '@mui/material'
import { categories } from "../../utils/constants";


const Logo = styled(Typography)
(({theme})=>({
    // padding :'16px 12px 10px 10px',
    // marginBottom:19,
    // fontSize:25,
    // fontWeight:600,
    [theme.breakpoints.down('md')]:{
     display:'none',
    }
  }));


const SidebarWrapper = styled(Box)(({theme})=>({
    // margin:'10px 10px ',
    // padding:' 8px 12px 20px 12px',
    // width:'100%',
    [theme.breakpoints.down('md')]:{
     display:'flex',
    //  width:"100%",
     justifyContent:'space-between',
    }
  }));



const Navbar = styled(Typography)
(({theme})=>({
    // display:'flex',
    // padding:'10px 12px',
    // alignItem:'center',
    [theme.breakpoints.down('md')]:{
       
    }
  }));
const Tab = styled(Box)
(({theme})=>({
    // display:'flex',
    // alignItem:'center',
    [theme.breakpoints.down('md')]:{
        // width:'100%',
        // margin:0,
        // padding:0,
        // justifyContent:'space-between',
    }
  }));
const Icon = styled(Box)`
&>svg{
    font-size:28px;
}
`;
const Name = styled(Box)(({theme})=>({
    fontSize:16,
    padding: '0 10px',
    margin:'auto 0',
    [theme.breakpoints.down('md')]:{
        display:'none',
    }
}));




const Categories = ({ selectedCategory, setSelectedCategory }) => (
    <SidebarWrapper>
        <Logo>Instagram</Logo>
        {categories.map((category) => (
            <Navbar>
                <Tab><Icon> {category.icon}</Icon><Name variant="span">{category.name}</Name> </Tab>
            </Navbar>
        ))}
    </SidebarWrapper>
);

export default Categories;
