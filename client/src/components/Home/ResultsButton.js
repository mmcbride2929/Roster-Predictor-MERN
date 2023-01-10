import { Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import RosterContext from '../../context/RosterContext'

const ResultsButton = () => {
  const { finalRoster, setTeamAmount, rosterLocked, setRosterLocked } =
    useContext(RosterContext)

  const handleTeamAmount = () => {
    if (rosterLocked === false) {
      setRosterLocked(true)
      finalRoster.forEach((player) => {
        if (player.team === 'Offense') {
          setTeamAmount((teamAmount) => ({
            ...teamAmount,
            offense: teamAmount.offense + 1,
          }))
        }

        if (player.team === 'Defense') {
          setTeamAmount((teamAmount) => ({
            ...teamAmount,
            defense: teamAmount.defense + 1,
          }))
        }

        if (player.team === 'SpecialTeams') {
          setTeamAmount((teamAmount) => ({
            ...teamAmount,
            specialTeams: teamAmount.specialTeams + 1,
          }))
        }
      })
    }
  }

  return (
    <Box textAlign="center" mt="15px">
      <Link to="/results">
        {' '}
        <Button size="sm" variant="outline" onClick={handleTeamAmount}>
          Results
        </Button>
      </Link>
    </Box>
  )
}
export default ResultsButton
