export default {
	indexer: {
		endpoint: process.env.INDEXER_ENDPOINT,
	},
	operatorSync: {
		endpoint:
			process.env.NEXT_PUBLIC_OPERATOR_SYNC_ENDPOINT ??
			(process.env.NODE_ENV === "production"
				? "https://opsync.zinde.xyz/v1"
				: "https://test-opsync.zinde.xyz/v1"),
	},
	domain:
		process.env.DOMAIN_NAME ??
		(process.env.NEXT_PUBLIC_VERCEL_URL &&
			`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`) ??
		(process.env.NODE_ENV == "production"
			? "https://zinde.xyz"
			: "http://localhost:3000"),

	xSync: {
		domain: process.env.X_SYNC_WEBSITE || "https://xsync.app",
	},

	xChar: {
		domain: process.env.X_CHAR_WEBSITE || "https://xchar.app",
	},

	xFeed: {
		domain: process.env.X_FEED_WEBSITE || "https://zinde.xyz/feed",
	},

	xShop: {
		domain: process.env.X_SHOP_WEBSITE || "https://zinde.xyz/shop",
	},
} as const;
