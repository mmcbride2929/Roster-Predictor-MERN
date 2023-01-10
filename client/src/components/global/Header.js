import Logo from '../../images/Logo.png'
import { Link } from 'react-router-dom'
import { chakra, Image, Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import RosterContext from '../../context/RosterContext'

const Header = () => {
  const { setClipboard } = useContext(RosterContext)
  return (
    <Flex
      flexDirection="column"
      bg="gray"
      justifyContent="
    center"
      alignItems="center"
      p="20px"
    >
      <Link to="/" onClick={() => setClipboard([])}>
        <Image src={Logo} w="80px" alt="Ravens Logo" />
      </Link>

      <chakra.h1 color="black" fontSize="1.2rem" fontWeight="500">
        Ravens Roster Builder
      </chakra.h1>
    </Flex>
  )
}
export default Header
