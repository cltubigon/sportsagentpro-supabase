import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'

const ExTeams = () => {
  const flexLogoStyle = {
    alignItems: "center",
    color: "gray.200",
    justifyContent: "center",
    w: "50px",
    h: "50px",
    fontSize: "2xl",
    bg: "gray.500",
    borderRadius: "100px"
  }
  const teamNameStyle = {
    alignItems: "center",
    ml: "15px",
    fontSize: "md",
    lineHeight: "1.4em",
  }
  const teamContainerStyle = {
    p: "30px",
    border: "1px solid #cdcdcd",
    borderRadius: "8px",
    minHeight: "62px",
    alignItems: "flex-center",
  }
  return (
      <Box>
      <Heading as={"h3"} size={"md"} letterSpacing={"1px"} mb={"12px"}>EXPLORE TEAMS</Heading>
      <SimpleGrid columns={2} minChildWidth={"285px"} spacing='var(--chakra-space-4)'>
        <Flex sx={teamContainerStyle}>
          <Flex sx={flexLogoStyle}>L</Flex>
          <Flex sx={teamNameStyle} >Oregon Ducks</Flex>
        </Flex>
        <Flex sx={teamContainerStyle}>
          <Flex sx={flexLogoStyle}>L</Flex>
          <Flex sx={teamNameStyle} >Oregon Ducks</Flex>
        </Flex>
        <Flex sx={teamContainerStyle}>
          <Flex sx={flexLogoStyle}>L</Flex>
          <Flex sx={teamNameStyle} >Oregon Ducks</Flex>
        </Flex>
        <Flex sx={teamContainerStyle}>
          <Flex sx={flexLogoStyle}>L</Flex>
          <Flex sx={teamNameStyle} >Oregon Ducks</Flex>
        </Flex>
        <Flex sx={teamContainerStyle}>
          <Flex sx={flexLogoStyle}>L</Flex>
          <Flex sx={teamNameStyle} >Oregon Ducks</Flex>
        </Flex>
        <Flex sx={teamContainerStyle}>
          <Flex sx={flexLogoStyle}>L</Flex>
          <Flex sx={teamNameStyle} >Oregon Ducks</Flex>
        </Flex>
        <Flex sx={teamContainerStyle}>
          <Flex sx={flexLogoStyle}>L</Flex>
          <Flex sx={teamNameStyle} >Oregon Ducks</Flex>
        </Flex>
        <Flex sx={teamContainerStyle}>
          <Flex sx={flexLogoStyle}>L</Flex>
          <Flex sx={teamNameStyle} >Oregon Ducks</Flex>
        </Flex>
      </SimpleGrid>
    </Box>
  )
}

export default ExTeams
