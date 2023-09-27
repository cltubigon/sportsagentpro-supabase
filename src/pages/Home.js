import { Container } from "@chakra-ui/react"
import Content from "../components/Home/Content"
import HeroSection from "../components/Home/HeroSection/HeroSection"
import Footer from "../components/layouts/Footer"

const Home = () => {
  const containerStyle = {
    maxW: "1440px",
    px: 0,
  }

  return (
    <>
      <Container sx={containerStyle} tabIndex={0}>
        <HeroSection />
        <Content />
      </Container>
      <Footer />
    </>
  )
}

export default Home
