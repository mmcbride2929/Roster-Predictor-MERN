import { Box, chakra, Flex } from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import RosterContext from '../../context/RosterContext'
import PositionSection from './PositionSection'
import TeamHeader from './TeamHeader'

const SectionContainer = () => {
  const { finalRoster, teamAmount } = useContext(RosterContext)

  return (
    <Flex
      m="10px auto"
      display={{ base: 'flex', md: 'flex' }}
      justifyContent="space-around"
      alignItems={{ base: 'center', md: 'start' }}
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Box mt={{ base: '15px', md: '0px' }} border="1px solid gray" w="275px">
        <TeamHeader team={'Offense'} teamAmount={teamAmount.offense} />
        <PositionSection finalRoster={finalRoster} playerPosition={'QB'} />
        <PositionSection finalRoster={finalRoster} playerPosition={'RB'} />
        <PositionSection finalRoster={finalRoster} playerPosition={'FB'} />
        <PositionSection finalRoster={finalRoster} playerPosition={'TE'} />
        <PositionSection finalRoster={finalRoster} playerPosition={'WR'} />
        <PositionSection
          finalRoster={finalRoster}
          playerPosition={'T'}
          team={'Offense'}
        />
        <PositionSection finalRoster={finalRoster} playerPosition={'IOL'} />
      </Box>
      <Box mt={{ base: '15px', md: '0px' }} border="1px solid gray" w="275px">
        <TeamHeader team={'Defense'} teamAmount={teamAmount.defense} />
        <PositionSection finalRoster={finalRoster} playerPosition={'DT'} />
        <PositionSection finalRoster={finalRoster} playerPosition={'OLB'} />
        <PositionSection finalRoster={finalRoster} playerPosition={'LB'} />
        <PositionSection finalRoster={finalRoster} playerPosition={'CB'} />
        <PositionSection finalRoster={finalRoster} playerPosition={'S'} />
      </Box>
      <Box mt={{ base: '15px', md: '0px' }} border="1px solid gray" w="275px">
        <TeamHeader team="Special Teams" teamAmount={teamAmount.specialTeams} />
        <PositionSection finalRoster={finalRoster} playerPosition={'K'} />
        <PositionSection finalRoster={finalRoster} playerPosition={'P'} />
      </Box>
    </Flex>
  )
}

export default SectionContainer
