import { Select } from '@chakra-ui/react'
import { useContext } from 'react'

import RosterContext from '../../context/RosterContext'

const PositionSelect = () => {
  const {
    allPlayers,
    setFilterArray,
    setSelectFilter,
    inputFilter,
    filterByName,
    filterByPosition,
  } = useContext(RosterContext)

  const handleChange = (position) => {
    setSelectFilter(position.target.value)

    if (position.target.value === 'All' && inputFilter === '') {
      setFilterArray([])
    }

    if (position.target.value !== 'All' && inputFilter === '') {
      // filtering players by position
      setFilterArray(filterByPosition(allPlayers, position.target.value))
    }

    if (position.target.value !== 'All' && inputFilter !== '') {
      // filtering players by matching letter
      const matches = filterByName(inputFilter)

      // filtering matches by position
      setFilterArray(filterByPosition(matches, position.target.value))
    }

    if (position.target.value === 'All' && inputFilter !== '') {
      setFilterArray(filterByName(inputFilter))
    }
  }

  return (
    <Select bg="white" shadow="sm" onChange={handleChange}>
      <option value="All">All</option>
      <option value="QB">QB</option>
      <option value="RB">RB</option>
      <option value="FB">FB</option>
      <option value="TE">TE</option>
      <option value="WR">WR</option>
      <option value="T">T</option>
      <option value="IOL">IOL</option>
      <option value="DT">DT</option>
      <option value="OLB">OLB</option>
      <option value="LB">LB</option>
      <option value="CB">CB</option>
      <option value="S">S</option>
      <option value="K">K</option>
      <option value="P">P</option>
    </Select>
  )
}
export default PositionSelect
