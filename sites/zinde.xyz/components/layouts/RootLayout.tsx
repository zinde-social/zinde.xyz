import Head from "next/head";

export default function RootLayout({ children }: any) {
	return (
		<html>
			<body>
				<Head>
					<title>zinde.xyz</title>
					<meta
						name="description"
						content="zinde.xyz - Own Your Social Activities"
					/>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				{children}
			</body>
		</html>
	);
}
