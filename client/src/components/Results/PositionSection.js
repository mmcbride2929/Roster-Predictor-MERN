import { useState, useEffect, useContext } from 'react'
import { Box, chakra } from '@chakra-ui/react'
import RosterContext from '../../context/RosterContext'

const PositionSection = ({ finalRoster, playerPosition }) => {
  const [positionRoom, setPositionRoom] = useState([])

  const { setClipboard, rosterLocked } = useContext(RosterContext)

  const filterPosition = () => {
    const filteredPlayers = finalRoster.filter(
      (player) => player.position === playerPosition
    )
    return filteredPlayers
  }

  // adding position room to state for copy
  const handleClipboard = (results) => {
    if (rosterLocked === true) {
      setClipboard((prevState) => [
        ...prevState,
        playerPosition,
        ...results.map((p) => {
          return p.name
        }),
      ])
    }

    if (rosterLocked === false) {
      setClipboard([])
    }
  }

  // on page load we are filtering players by position
  useEffect(() => {
    const results = filterPosition()
    setPositionRoom(results)
    handleClipboard(results)
  }, [])

  return (
    <Box
      textAlign="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderBottom="1px solid black"
    >
      <Box w="25%">
        <chakra.p fontWeight="500" h="100%">
          {playerPosition}
        </chakra.p>
      </Box>
      <Box w="75%" display="flex" justifyContent="center" flexDir="column">
        {positionRoom.map((player) => {
          return <chakra.p key={player._id}>{player.name}</chakra.p>
        })}
      </Box>
    </Box>
  )
}
export default PositionSection
