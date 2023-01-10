import { Box, chakra } from '@chakra-ui/react'
import PositionSelect from './PositionSelect'
import SearchBar from './SearchBar'

const FilterByContainer = () => {
  return (
    <Box border="1px solid gray" p="15px">
      <chakra.h3 fontWeight="bolder" fontSize="1rem" mb="8px">
        Filter Players
      </chakra.h3>
      <PositionSelect />
      <SearchBar />
    </Box>
  )
}
export default FilterByContainer
