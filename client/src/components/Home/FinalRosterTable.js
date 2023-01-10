import { chakra, Flex, Box } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { useContext } from 'react'

import RosterContext from '../../context/RosterContext'
import TableRow from './TableRow'

const FinalRosterTable = () => {
  const {
    allPlayers,
    setAllPlayers,
    finalRoster,
    setFinalRoster,
    selectFilter,
    filterArray,
    inputFilter,
    setFilterArray,
  } = useContext(RosterContext)

  const handleDelete = (playerName) => {
    // get selected player object from finalRoster
    const removedPlayerObject = finalRoster.filter(
      (player) => player.name === playerName
    )

    // add playerObject to finalRoster
    setAllPlayers([...allPlayers, removedPlayerObject[0]])

    // add playerObject to filterArray if his position matches the filter
    if (
      removedPlayerObject[0].position === selectFilter ||
      inputFilter !== ''
    ) {
      setFilterArray([...filterArray, removedPlayerObject[0]])
    }

    // remove chosen player in finalRaster
    setFinalRoster(
      finalRoster.filter((player) => {
        return player.name !== playerName
      })
    )
  }

  return (
    <Flex w="275px" maxW="350px" alignItems="center" justifyContent="center">
      {finalRoster.length > 0 ? (
        <Box
          border="1px solid black"
          direction={{ base: 'column' }}
          w="full"
          mt="10px"
          shadow="lg"
        >
          {finalRoster.map((p) => {
            return (
              <TableRow
                key={p._id}
                Icon="delete"
                player={p}
                handleAction={handleDelete}
              />
            )
          })}
        </Box>
      ) : (
        <></>
      )}
    </Flex>
  )
}

export default FinalRosterTable
