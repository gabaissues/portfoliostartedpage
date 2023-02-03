import React from "react";
import Head from "next/head";

import * as G from "../styles/InitialPage.styles";
import DevComponent from "@/components/pages/Dev";
import UIComponent from "@/components/pages/UI";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gaba - Início</title>
      </Head>

      <G.Main>
        
        <UIComponent />
        <G.Image src="eu.png" alt="um desenho cartoon do desenvolvedor" />
        <DevComponent />
        
      </G.Main>
    </>
  );
}
