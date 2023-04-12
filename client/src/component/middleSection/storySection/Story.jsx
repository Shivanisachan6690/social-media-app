import { Box,styled } from "@mui/material"
import StoryCircle from "./StoryCircle";


const AveatorWrapper = styled(Box)`
padding:10px;
display:flex;
background:#abcdef;
border-radius: 8px;
margin-bottom: 0;
margin-top: 16px;
padding: 16px 0;
`


const Story = () => {
  return (

<AveatorWrapper>

<StoryCircle/>
<StoryCircle/>
<StoryCircle/>
<StoryCircle/>
<StoryCircle/>
<StoryCircle/>
<StoryCircle/>
<StoryCircle/>

</AveatorWrapper>

  )
}

export default Story