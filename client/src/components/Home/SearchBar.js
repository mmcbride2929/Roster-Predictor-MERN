import { SearchIcon } from '@chakra-ui/icons'
import RosterContext from '../../context/RosterContext'
import { Input, InputGroup, chakra, InputLeftElement } from '@chakra-ui/react'
import { useContext, useState } from 'react'

const SearchBar = () => {
  const {
    allPlayers,
    setFilterArray,
    selectFilter,
    inputFilter,
    setInputFilter,
    filterByName,
    filterByPosition,
  } = useContext(RosterContext)

  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    setUserInput(e.target.value)
    setInputFilter(e.target.value)

    if (e.target.value === '' && selectFilter === 'All') {
      setFilterArray([])
    }

    if (e.target.value !== '' && selectFilter === 'All') {
      setFilterArray(filterByName(e.target.value))
    }

    if (e.target.value !== '' && selectFilter !== 'All') {
      const matches = filterByName(e.target.value)
      setFilterArray(filterByPosition(matches, selectFilter))
    }

    if (e.target.value === '' && selectFilter !== 'All') {
      setFilterArray(filterByPosition(allPlayers, selectFilter))
    }
  }

  return (
    <InputGroup position={'relative'} mt="15px">
      <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
      <Input
        variant="outline"
        _placeholder="search all players"
        onChange={handleChange}
      />
      <chakra.p
        pointerEvents="none"
        position={'absolute'}
        top={{ base: '8px', sm: '8px' }}
        left={{ base: '40px', sm: '40px' }}
      >
        {inputFilter === '' ? 'Search All Players' : ''}
      </chakra.p>
    </InputGroup>
  )
}
export default SearchBar
