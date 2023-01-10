import { useState, createContext } from 'react'

const RosterContext = createContext()

export const RosterProvider = ({ children }) => {
  // rosters state
  const [allPlayers, setAllPlayers] = useState([])
  const [finalRoster, setFinalRoster] = useState([])
  const [filterArray, setFilterArray] = useState([])
  const [teamAmount, setTeamAmount] = useState({
    offense: 0,
    defense: 0,
    specialTeams: 0,
  })
  const [clipboard, setClipboard] = useState([])

  const [rosterLocked, setRosterLocked] = useState(false)

  // filters state
  const [selectFilter, setSelectFilter] = useState('All')
  const [inputFilter, setInputFilter] = useState('')

  // functions
  const filterByName = (input) => {
    // filtering players by matching letter
    const matches = allPlayers.filter(
      (player) => player.name.toLowerCase().indexOf(input.toLowerCase()) > -1
    )
    return matches
  }

  const filterByPosition = (players, filter) => {
    const results = players.filter((player) => player.position === filter)
    return results
  }

  return (
    <RosterContext.Provider
      value={{
        allPlayers,
        setAllPlayers,
        finalRoster,
        setFinalRoster,
        filterArray,
        setFilterArray,
        selectFilter,
        setSelectFilter,
        inputFilter,
        setInputFilter,
        filterByName,
        filterByPosition,
        teamAmount,
        setTeamAmount,
        rosterLocked,
        setRosterLocked,
        clipboard,
        setClipboard,
      }}
    >
      {children}
    </RosterContext.Provider>
  )
}

export default RosterContext
