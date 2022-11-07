import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import styled from "@emotion/styled";
import styles from "./Page404.styles";
import Link from "next/link";
import Head from "next/head";

export const PageCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Page404: React.FC = () => (
  <>
    <Head>
      <title>Pokedex - 404</title>
    </Head>
    <PageCenterContainer>
      <Box sx={styles.wrapper404}>
        <Typography sx={styles.four}>4</Typography>
        <Image src={"/404.png"} alt="404 image" width="130" height="130" />
        <Typography sx={styles.four}>4</Typography>
      </Box>
      <Typography variant="h5" sx={styles.text404}>
        Pokemon not found
      </Typography>
      <Button
        size="large"
        variant="outlined"
        component={Link}
        href="/"
        sx={styles.link}
      >
        Back Home
      </Button>
    </PageCenterContainer>
  </>
);

export default Page404;
