import { Box } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useContext, useEffect } from 'react'

import AllPlayersTable from '../components/Home/AllPlayersTable'
import FinalRosterTable from '../components/Home/FinalRosterTable'
import FilterByContainer from '../components/Home/FilterByContainer'
import RosterContext from '../context/RosterContext'
import PlayerCounter from '../components/Home/PlayerCounter'
import ResultsButton from '../components/Home/ResultsButton'
import TableHeader from '../components/Home/TableHeader'

const Home = () => {
  const { allPlayers, setAllPlayers, finalRoster } = useContext(RosterContext)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRoster = async () => {
      const response = await axios.get(`http://localhost:5000/api/v1/roster`)

      setAllPlayers(response.data)
      setLoading(false)
    }

    if (finalRoster.length === 0) {
      fetchRoster()
    } else {
      setLoading(false)
    }
  }, [])
  return (
    <>
      {loading ? (
        <Box minH="78vh" marginTop="50%" textAlign="center">
          <p>Loading...</p>
        </Box>
      ) : (
        <Box p="15px" m="0 auto" maxW="650px">
          <PlayerCounter />
          <FilterByContainer />
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems={{ base: 'center', sm: 'start' }}
            flexDir={{ base: 'column', sm: 'row' }}
          >
            <Box>
              <TableHeader title={'Full Roster'} />
              <AllPlayersTable roster={allPlayers} />
            </Box>
            <Box>
              <TableHeader title={'Final Roster'} />
              <FinalRosterTable />
            </Box>
          </Box>
          <ResultsButton />
        </Box>
      )}
    </>
  )
}
export default Home
