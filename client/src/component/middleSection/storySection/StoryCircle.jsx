import { Box,styled } from "@mui/material"


const Aveator = styled('img')({
height:66,
width:66,
borderRadius:'50%',
})

const AveatorWrapper = styled(Box)`
padding:10px;
`;


const StoryCircle = () => {
  return (
   <AveatorWrapper>
    <Aveator src="https://assets.vogue.in/photos/5d81e9680757f000087797c0/1:1/w_909,h_909,c_limit/f.jpg" alt="" />
   </AveatorWrapper>
  )
}

export default StoryCircle