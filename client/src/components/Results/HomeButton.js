import { Button, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import RosterContext from '../../context/RosterContext'

const HomeButton = () => {
  const { setClipboard } = useContext(RosterContext)
  return (
    <Box ml="10px">
      <Link to="/" onClick={() => setClipboard([])}>
        <Button size="sm" variant="outline">
          Home
        </Button>
      </Link>
    </Box>
  )
}
export default HomeButton
