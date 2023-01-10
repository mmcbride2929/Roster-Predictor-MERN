import { chakra, Flex } from '@chakra-ui/react'

import { useContext } from 'react'
import RosterContext from '../../context/RosterContext'
const PlayerCounter = () => {
  const { finalRoster } = useContext(RosterContext)
  return (
    <Flex mb="15px">
      <chakra.h3 fontWeight="500" fontSize="1.2rem" mr="5px">
        Final Roster Players:
      </chakra.h3>
      <chakra.p fontSize="1.2rem">{finalRoster.length}</chakra.p>
    </Flex>
  )
}
export default PlayerCounter
