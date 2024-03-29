import { GridItem, Flex, Box } from "@chakra-ui/react";
import CardArt from "../components/CardArt";
import MyGrid from "../components/Grid";
import Navbar from "../components/Navbar";
import Categ from "../components/Categories";
import Image from "next/image";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Status from "../components/Status";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Artificium</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar />

        <Flex
          w="100%"
          bgColor="#151515"
          bgGradient="radial(1000px 900px at top  ,rgba(69, 60, 25, 0.6) , transparent)"
        >
          <MyGrid minH="100vh" overX="hidden" bgColor="transparent" mb="90px">
            <GridItem
              colStart={1}
              colSpan={2}
              mt="290px"
              filter="auto"
              blur="3px"
              opacity="0.4"
            >
              <Image src="/moonlight.png" width="150" height="150" />
            </GridItem>
            <GridItem
              colStart={11}
              colSpan={2}
              mt="300px"
              filter="auto"
              blur="3px"
            >
              <Image src="/kolobok.png" width="150" height="150" />
            </GridItem>

            <GridItem colStart={4} colSpan={7} ml="20px" mt="-350px ">
              <Image src="/nightstar.png" width="500" height="300" />
            </GridItem>
            <GridItem colStart={1} colSpan={4} mt="-200px">
              <Introduction />
            </GridItem>
            <GridItem colStart={9} colSpan={4} mt="-100px">
              <Status />
            </GridItem>
            <GridItem colStart={1} colSpan={7} mt="300px">
              <Box color="#1D1D1D" fontSize={96} fontWeight="bold">
                ARTEFATOS
              </Box>
            </GridItem>
            <GridItem colStart={1} colSpan={3} rowSpan={4}>
              <Categ />
            </GridItem>

            <GridItem colStart={4} colSpan={3} rowSpan={1}>
              <CardArt
                name="NIGHT STAR"
                artifactImg="/nightstar.png"
                colorRare="#F1AE49"
                rare="ULTRA RARO"
              >
                Um artefato caro e raro, este maravilhoso artefato é formado
                pela anomalia Springboard.
              </CardArt>
            </GridItem>

            <GridItem colStart={7} colSpan={3}>
              <CardArt
                name="KOLOBOK"
                artifactImg="/kolobok.png"
                colorRare="#A749F1"
                rare="RARO+"
                _Hover={{}}
              >
                Um artefato relativamente raro que se forma em áreas
                contaminadas com produtos químicos.
              </CardArt>
            </GridItem>

            <GridItem colStart={10} colSpan={3}>
              <CardArt
                name="MOONLIGHT"
                artifactImg="/moonlight.png"
                colorRare="#4978F1"
                rare="RARO"
              >
                O Moonlight é um artefato raro, caso degenerado da atividade da
                Electro anomalia.
              </CardArt>
            </GridItem>
            <GridItem colStart={4} colSpan={3}>
              <CardArt
                name="MOONLIGHT"
                artifactImg="/moonlight.png"
                colorRare="#4978F1"
                rare="RARO"
              >
                O Moonlight é um artefato raro, caso degenerado da atividade da
                Electro anomalia.
              </CardArt>
            </GridItem>
            <GridItem colStart={7} colSpan={3}>
              <CardArt
                name="MOONLIGHT"
                artifactImg="/moonlight.png"
                colorRare="#4978F1"
                rare="RARO"
              >
                O Moonlight é um artefato raro, caso degenerado da atividade da
                Electro anomalia.
              </CardArt>
            </GridItem>
          </MyGrid>
        </Flex>
        <Footer />
      </body>
    </>
  );
}
