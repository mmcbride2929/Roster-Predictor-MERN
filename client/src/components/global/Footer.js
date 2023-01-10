import Logo from '../../images/Logo.png'
import { Link } from 'react-router-dom'
import { chakra, Box, Image, Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import RosterContext from '../../context/RosterContext'

const Footer = () => {
  const { setClipboard } = useContext(RosterContext)

  return (
    <Flex
      marginTop="auto"
      flexDirection="column"
      bg="gray"
      justifyContent="
    center"
      alignItems="center"
      p="20px"
    >
      <Link to="/" onClick={() => setClipboard([])}>
        <Image src={Logo} w="40px" alt="Ravens Logo" />
      </Link>
    </Flex>
  )
}
export default Footer
