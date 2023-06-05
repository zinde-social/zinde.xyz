import type { NextPage } from "next";
import React from "react";
import Head from "next/head";

import Index from "@/components/pages/products";

const Home: NextPage = () => (
	// Use RootLayout directly would cause hydrogen error

	<>
		<Head>
			<title>zinde.xyz</title>
			<meta
				name="description"
				content="zinde.xyz - Own Your Social Activities"
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Index />
	</>
);

export default Home;
