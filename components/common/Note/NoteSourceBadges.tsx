import { Badge } from "@mantine/core";
import { NoteMetadata } from "crossbell.js";
import { TinyColor, random, mostReadable } from "@ctrl/tinycolor";
import { stringToInteger } from "@/utils/helpers";

const builtInColorMap = {
	["crossbell.io"]: "#E1BE60",
	xlog: "#6466e9",
	operatorsync: "#5298e9",
	crosssync: "#5d87f7",
	medium: "#000000",
	twitter: "#4691dd",
	tiktok: "#000000",
	youtube: "#ea3323",
} as const;

export default function NoteSources({
	noteMetadata,
}: {
	noteMetadata?: NoteMetadata | null;
}) {
	return (
		<div>
			{noteMetadata?.sources?.map((s) => {
				const color = getColorFromSource(s);
				const lighterColor = new TinyColor(color).lighten(10).toHexString();
				const textColor = mostReadable(color, ["#000", "#fff"], {
					includeFallbackColors: true,
					size: "small",
				})?.toHexString();

				return (
					<div className="max-w-10em inline mr-2" key={s}>
						<Badge
							className="transition-shadow hover:shadow-sm active:scale-95 transition"
							variant="gradient"
							gradient={color ? { from: color, to: lighterColor } : undefined}
							style={{ color: textColor }}
							size="sm"
						>
							{s}
						</Badge>
					</div>
				);
			})}
		</div>
	);
}

function isBuiltInSource(
	source: string
): source is keyof typeof builtInColorMap {
	return source in builtInColorMap;
}

function getColorFromSource(source: string) {
	const s = source.toLowerCase();
	return isBuiltInSource(s)
		? builtInColorMap[s]
		: random({ seed: stringToInteger(s) }).toHexString();
}

//TODO: ...
// function getLinkForSource(source: string, noteMetadata: NoteMetadata, ) {
// 	const s = source.toLowerCase();
// 	if (isBuiltInSource(s)) {
//     if (s === "xlog") {

//       // TODO: ...
// 		}

// 		return undefined;
// 	}

// 	return undefined;
// }
