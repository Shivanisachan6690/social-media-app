import React from "react";
import { Box, Typography, styled } from '@mui/material'
// import Profile from '../story/StoryProfile'
import * as name from '../../utils/constants';


const Logo = styled(Typography)
    (({ theme }) => ({
        padding: '16px 12px 10px 10px',
        marginBottom: 19,
        fontSize: 25,
        fontWeight: 600,
        [theme.breakpoints.down('md')]: {
            display: 'none',
        }
    }));


const SidebarWrapper = styled(Box)(({ theme }) => ({
    margin: '10px 10px ',
    padding: ' 8px 12px 20px 12px',
    backgroundColor: '#fff ',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    }
}));



const Navbar = styled(Typography)
    (({ theme }) => ({
        display: 'flex',
        padding: '10px 12px',
        alignItem: 'center',
        [theme.breakpoints.down('md')]: {

        }
    }));
const NavbarChange = styled(Typography)
    (({ theme }) => ({
        display: 'flex',
        padding: '10px 12px',
        alignItem: 'center',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        }
    }));
const Tab = styled(Box)
    (({ theme }) => ({
        display: 'flex',
        alignItem: 'center',
        [theme.breakpoints.down('md')]: {


        }
    }));
const Icon = styled(Box)`
&>svg{
    font-size:28px;
}
`;
const Name = styled(Box)(({ theme }) => ({
    fontSize: 16,
    padding: '0 10px',
    margin: 'auto 0',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}));


const Categories = ({ selectedCategory, setSelectedCategory }) => (
    <SidebarWrapper>
        <Logo>Instagram</Logo>
        <Navbar>
            <Tab><Icon> {name.n1}</Icon><Name variant="span">Home </Name> </Tab>
        </Navbar>
        <NavbarChange>
            <Tab><Icon> {name.n2}</Icon><Name variant="span">Search</Name> </Tab>
        </NavbarChange>
        <Navbar>
            <Tab><Icon> {name.n3}</Icon><Name variant="span">Explore</Name> </Tab>
        </Navbar>
        <Navbar>
            <Tab><Icon> {name.n4}</Icon><Name variant="span">Reels</Name> </Tab>
        </Navbar>
        <Navbar>
            <Tab><Icon> {name.n7}</Icon><Name variant="span">Create</Name> </Tab>
        </Navbar>
        <NavbarChange>
            <Tab><Icon> {name.n5}</Icon><Name variant="span">Messages</Name> </Tab>
        </NavbarChange>
        <NavbarChange>
            <Tab><Icon> {name.n6}</Icon><Name variant="span">Notification</Name> </Tab>
        </NavbarChange>
        <Navbar>
            <Tab><Icon> {name.n8}</Icon><Name variant="span">Profile</Name> </Tab>
        </Navbar>

    </SidebarWrapper>
);

export default Categories;
