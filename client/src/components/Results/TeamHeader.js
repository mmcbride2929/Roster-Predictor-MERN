import { Box, chakra } from '@chakra-ui/react'
const TeamHeader = ({ team, teamAmount }) => {
  return (
    <Box
      bg="whitesmoke"
      fontWeight="500"
      p="5px"
      fontSize="1.1rem"
      textAlign="center"
    >
      {team + ': ' + teamAmount}
    </Box>
  )
}
export default TeamHeader
