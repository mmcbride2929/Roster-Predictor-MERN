import { Box } from '@chakra-ui/react'
const TableHeader = ({ title }) => {
  return (
    <Box fontWeight="500" mt="10px" fontSize="1.1rem" textAlign="center">
      {title}
    </Box>
  )
}
export default TableHeader
