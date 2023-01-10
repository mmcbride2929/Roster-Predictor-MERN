import RosterContext from '../../context/RosterContext'
import { useContext } from 'react'
import { chakra, Flex, Box } from '@chakra-ui/react'
import { AddIcon, CloseIcon } from '@chakra-ui/icons'

const TableRow = ({ player, handleAction, Icon }) => {
  const { setRosterLocked, setTeamAmount, teamAmount } =
    useContext(RosterContext)

  // formatting players name for display
  const firstInitial = player.name[0] + '.'
  const lastName = player.name.split(' ', 2)

  const handleEdit = () => {
    setTeamAmount(() => ({
      offense: 0,
      defense: 0,
      specialTeams: 0,
    }))
    setRosterLocked(false)
  }

  return (
    <Flex key={player._id}>
      <Box
        w={{ base: '100%', md: 'full' }}
        bg="gray"
        color="black"
        fontSize="0.8rem"
        fontWeight="500"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box w="100%">
          <Box
            textTransform="uppercase"
            bg="#bcbcbc"
            w={{ base: 'full', md: 'full' }}
            display="flex"
            justifyContent="space-between"
          >
            <chakra.p textAlign="center" w="33%">
              Name
            </chakra.p>
            <chakra.p w="33%" textAlign="center">
              Position
            </chakra.p>
            <chakra.p w="33%" textAlign="center">
              Number
            </chakra.p>
          </Box>
          <Box
            bg="white"
            display="flex"
            justifyContent="space-between"
            fontSize="0.75rem"
            fontWeight="400"
          >
            <chakra.p w="33%" textAlign="center">
              {firstInitial + ' ' + lastName[1]}
            </chakra.p>
            <chakra.p w="33%" textAlign="center">
              {player.position}
            </chakra.p>
            <chakra.p w="33%" textAlign="center">
              {player.number}
            </chakra.p>
          </Box>
        </Box>
        <Box
          borderBottom="1px solid black"
          borderLeft="1px solid black"
          h="100%"
          w="8%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          _hover={{ cursor: 'pointer' }}
        >
          {Icon === 'add' ? (
            <Box
              h="100%"
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={() => handleAction(player.name)}
            >
              <AddIcon
                color="#515050"
                onClick={() => handleEdit()}
                _hover={{ color: 'black' }}
              />
            </Box>
          ) : (
            <Box
              h="100%"
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={() => handleAction(player.name)}
            >
              <CloseIcon
                boxSize="0.75rem"
                color="#515050"
                onClick={() => handleEdit()}
                _hover={{ color: 'black' }}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Flex>
  )
}
export default TableRow
