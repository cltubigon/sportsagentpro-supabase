import { Box, Flex, Skeleton, SkeletonText, Text } from "@chakra-ui/react"
import { comStyle } from "../Dashboard/Opportunities/styleAthleteOpportunities"

export const SkeletonOpportunities = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  const { postContainer } = comStyle
  return (
    <>
      <Flex gap={5} wrap={"wrap"}>
        {number.map((id) => {
          return (
            // <Skeleton
            //   startColor="#d9d9d9"
            //   endColor="#ededed"
            //   key={id}
            //   w={"320px"}
            //   h={"429px"}
            // />
            <Flex sx={postContainer} p={4} gap={2} key={id}>
              <Skeleton
                borderRadius={"md"}
                startColor="#d9d9d9"
                endColor="#ededed"
                w={"272px"}
                h={"24px"}
              />
              <Skeleton
                borderRadius={"md"}
                startColor="#d9d9d9"
                endColor="#ededed"
                w={"200px"}
                h={"16px"}
              />
              <Flex mt={"25px"} flexDirection={"column"} gap={3}>
                <Skeleton
                  borderRadius={"md"}
                  startColor="#d9d9d9"
                  endColor="#ededed"
                  w={"220px"}
                  h={"20px"}
                />
                <SkeletonText
                  startColor="#d9d9d9"
                  endColor="#ededed"
                  noOfLines={3}
                  spacing="2"
                  skeletonHeight="3"
                />
              </Flex>
              <Flex mt={"25px"} flexDirection={"column"} gap={3}>
                <Skeleton
                  borderRadius={"md"}
                  startColor="#d9d9d9"
                  endColor="#ededed"
                  w={"220px"}
                  h={"20px"}
                />
                <SkeletonText
                  startColor="#d9d9d9"
                  endColor="#ededed"
                  noOfLines={3}
                  spacing="2"
                  skeletonHeight="3"
                />
              </Flex>
              <Flex mt={"15px"} flexDirection={"column"} gap={2}>
                <Skeleton
                  borderRadius={"md"}
                  startColor="#d9d9d9"
                  endColor="#ededed"
                  w={"272px"}
                  h={"38px"}
                />
                <Skeleton
                  borderRadius={"md"}
                  startColor="#d9d9d9"
                  endColor="#ededed"
                  w={"272px"}
                  h={"38px"}
                />
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    </>
  )
}
