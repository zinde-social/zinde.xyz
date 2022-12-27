import React from "react";

export function EmailIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			fill="none"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="m2 6.04002s.04-2.02 2.02-2.02h15.98s1.99 0 1.99 1.99v11.98998s0 1.995-1.995 1.995c0 0-15.995-.005-15.995 0s-1.998.001-1.998-1.997z"
				fill="currentColor"
			/>
			<path
				d="m21.99 6.01002-9.99 4.98998-9.99-4.99998c.01-.29.2-1.98 2.01-1.98h15.98s1.99 0 1.99 1.99zm-9.99 6.98998-10-4.99998v9.99998c0 2 2 2 2 2 0-.01 16 0 16 0 1.99 0 1.99-2 1.99-2v-9.98998z"
				fill="rgba(255,255,255,0.4)"
			/>
		</svg>
	);
}

export function WalletIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			fill="none"
			height="36"
			viewBox="0 0 36 36"
			width="36"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="m33 21v12h-25.5c-2.481 0-4.5-2.019-4.5-4.5v-9c0-2.481 2.019-4.5 4.5-4.5h24v6z"
				fill="#6d4c41"
			/>
			<path
				d="m7.5 18h7.5 16.5v3h-24c-.8265 0-1.5-.6735-1.5-1.5s.6735-1.5 1.5-1.5z"
				fill="#000"
				opacity=".2"
			/>
			<path
				d="m24.75 13.5c-2.895 0-5.25-2.355-5.25-5.25s2.355-5.25 5.25-5.25 5.25 2.355 5.25 5.25-2.355 5.25-5.25 5.25z"
				fill="#fbc02d"
			/>
			<path
				d="m7.5765 18c-.036-.2475-.0765-.4935-.0765-.75 0-2.895 2.355-5.25 5.25-5.25s5.25 2.355 5.25 5.25c0 .2565-.0405.5025-.0765.75z"
				fill="#fbc02d"
			/>
			<path
				d="m24.75 10.5c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25 2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25zm-9.888 7.5c.084-.2355.138-.486.138-.75 0-1.242-1.008-2.25-2.25-2.25s-2.25 1.008-2.25 2.25c0 .264.054.5145.138.75z"
				fill="#000"
				opacity=".2"
			/>
		</svg>
	);
}

export function CrossbellIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			fill="none"
			height="34"
			viewBox="0 0 125 34"
			width="125"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<linearGradient
				id="a"
				gradientUnits="userSpaceOnUse"
				x1="4"
				x2="125"
				y1="21.0001"
				y2="21.0001"
			>
				<stop offset="0" stopColor="#f6c549" />
				<stop offset=".234375" stopColor="#e65040" />
				<stop offset=".505208" stopColor="#9688f2" />
				<stop offset=".760417" stopColor="#5b89f7" />
				<stop offset="1" stopColor="#6ad991" />
			</linearGradient>
			<path d="m4 17.75h121" stroke="url(#a)" strokeWidth="4.5" />
			<path
				d="m19.669 23.78c-.9893 1.1947-2.156 2.1093-3.5 2.744-1.344.616-2.8467.924-4.508.924-1.4933 0-2.884-.2707-4.172-.812-1.26933-.5413-2.37067-1.2787-3.304-2.212s-1.67067-2.0347-2.212-3.304c-.54133-1.288-.812-2.6693-.812-4.144s.27067-2.8467.812-4.116c.54133-1.288 1.27867-2.3987 2.212-3.332.93333-.93333 2.03467-1.67067 3.304-2.212 1.288-.54133 2.6787-.812 4.172-.812 1.6053 0 3.0147.28 4.228.84 1.232.56 2.324 1.372 3.276 2.436l-2.66 2.576c-.5973-.6907-1.288-1.2413-2.072-1.652-.7653-.4107-1.68-.616-2.744-.616-.9333 0-1.81067.168-2.632.504-.82133.3173-1.54.7747-2.156 1.372-.59733.5973-1.07333 1.3253-1.428 2.184-.35467.84-.532 1.7827-.532 2.828s.17733 1.9973.532 2.856c.35467.84.83067 1.5587 1.428 2.156.616.5973 1.33467 1.064 2.156 1.4.82133.3173 1.6987.476 2.632.476 1.12 0 2.1093-.224 2.968-.672.8773-.4667 1.652-1.12 2.324-1.96zm2.3131-10.5h3.444v1.904h.224c.168-.336.392-.644.672-.924s.588-.5227.924-.728c.3546-.2053.728-.364 1.12-.476.4106-.112.812-.168 1.204-.168.4853 0 .896.0467 1.232.14.3546.0933.6533.2147.896.364l-.98 3.332c-.224-.112-.476-.196-.756-.252-.2614-.0747-.588-.112-.98-.112-.504 0-.9614.1027-1.372.308-.4107.1867-.7654.4573-1.064.812-.28.3547-.504.7747-.672 1.26-.1494.4667-.224.98-.224 1.54v6.72h-3.668zm17.0507-.448c1.064 0 2.0346.1867 2.912.56.896.3547 1.6613.8587 2.296 1.512.6533.6347 1.1573 1.4 1.5119 2.296.3734.896.5601 1.876.5601 2.94s-.1867 2.044-.5601 2.94c-.3546.896-.8586 1.6707-1.5119 2.324-.6347.6347-1.4 1.1387-2.296 1.512-.8774.3547-1.848.532-2.912.532s-2.044-.1773-2.94-.532c-.8774-.3733-1.6427-.8773-2.296-1.512-.6347-.6533-1.1387-1.428-1.512-2.324-.3547-.896-.532-1.876-.532-2.94s.1773-2.044.532-2.94c.3733-.896.8773-1.6613 1.512-2.296.6533-.6533 1.4186-1.1573 2.296-1.512.896-.3733 1.876-.56 2.94-.56zm0 11.228c.4666 0 .9146-.084 1.344-.252.448-.1867.84-.448 1.176-.784s.5973-.7467.784-1.232c.2053-.4853.308-1.036.308-1.652s-.1027-1.1667-.308-1.652c-.1867-.4853-.448-.896-.784-1.232s-.728-.588-1.176-.756c-.4294-.1867-.8774-.28-1.344-.28-.4854 0-.9427.0933-1.372.28-.4294.168-.812.42-1.148.756s-.6067.7467-.812 1.232c-.1867.4853-.28 1.036-.28 1.652s.0933 1.1667.28 1.652c.2053.4853.476.896.812 1.232s.7186.5973 1.148.784c.4293.168.8866.252 1.372.252zm14.932 3.388c-.896 0-1.6986-.112-2.408-.336-.6906-.224-1.2973-.5133-1.82-.868-.504-.3733-.9333-.7933-1.288-1.26-.3546-.4853-.6253-.9707-.812-1.456l3.276-1.4c.3174.7093.7374 1.2413 1.26 1.596.5414.336 1.1387.504 1.792.504.672 0 1.204-.1213 1.596-.364s.588-.532.588-.868c0-.3733-.168-.672-.504-.896-.3173-.2427-.8773-.4573-1.68-.644l-1.932-.42c-.4293-.0933-.8773-.2427-1.344-.448-.448-.2053-.8586-.4667-1.232-.784-.3733-.3173-.6813-.7-.924-1.148-.2426-.448-.364-.9707-.364-1.568 0-.672.14-1.2693.42-1.792.2987-.5227.7-.9613 1.204-1.316.504-.3733 1.092-.6533 1.764-.84.6907-.2053 1.428-.308 2.212-.308 1.3067 0 2.4734.2613 3.5.784 1.0267.504 1.7827 1.316 2.268 2.436l-3.164 1.288c-.2613-.5413-.644-.9333-1.148-1.176s-1.008-.364-1.512-.364c-.5226 0-.98.112-1.372.336-.392.2053-.588.476-.588.812 0 .3173.1587.5693.476.756.336.1867.784.3547 1.344.504l2.1.504c1.4.336 2.436.8773 3.108 1.624.6907.728 1.036 1.596 1.036 2.604 0 .5973-.14 1.1667-.42 1.708s-.6813 1.0267-1.204 1.456c-.504.4107-1.12.7373-1.848.98-.7093.2427-1.5026.364-2.38.364zm13.5352 0c-.896 0-1.6987-.112-2.408-.336-.6907-.224-1.2973-.5133-1.82-.868-.504-.3733-.9333-.7933-1.288-1.26-.3547-.4853-.6253-.9707-.812-1.456l3.276-1.4c.3173.7093.7373 1.2413 1.26 1.596.5413.336 1.1387.504 1.792.504.672 0 1.204-.1213 1.596-.364s.588-.532.588-.868c0-.3733-.168-.672-.504-.896-.3173-.2427-.8773-.4573-1.68-.644l-1.932-.42c-.4293-.0933-.8773-.2427-1.344-.448-.448-.2053-.8587-.4667-1.232-.784s-.6813-.7-.924-1.148-.364-.9707-.364-1.568c0-.672.14-1.2693.42-1.792.2987-.5227.7-.9613 1.204-1.316.504-.3733 1.092-.6533 1.764-.84.6907-.2053 1.428-.308 2.212-.308 1.3067 0 2.4733.2613 3.5.784 1.0267.504 1.7827 1.316 2.268 2.436l-3.164 1.288c-.2613-.5413-.644-.9333-1.148-1.176s-1.008-.364-1.512-.364c-.5227 0-.98.112-1.372.336-.392.2053-.588.476-.588.812 0 .3173.1587.5693.476.756.336.1867.784.3547 1.344.504l2.1.504c1.4.336 2.436.8773 3.108 1.624.6907.728 1.036 1.596 1.036 2.604 0 .5973-.14 1.1667-.42 1.708s-.6813 1.0267-1.204 1.456c-.504.4107-1.12.7373-1.848.98-.7093.2427-1.5027.364-2.38.364zm8.1032-20.496h3.668v6.02l-.224 1.96h.224c.336-.5787.8586-1.0733 1.568-1.484.7093-.4107 1.5866-.616 2.632-.616.8773 0 1.708.1867 2.492.56.8026.3547 1.5026.8587 2.1 1.512.616.6347 1.1013 1.4 1.456 2.296.3546.896.532 1.876.532 2.94s-.1774 2.044-.532 2.94c-.3547.896-.84 1.6707-1.456 2.324-.5974.6347-1.2974 1.1387-2.1 1.512-.784.3547-1.6147.532-2.492.532-1.0454 0-1.9227-.2053-2.632-.616-.7094-.4107-1.232-.9053-1.568-1.484h-.224v1.652h-3.444zm7.112 17.108c.4853 0 .9426-.0933 1.372-.28.448-.1867.84-.448 1.176-.784s.6066-.7467.812-1.232c.2053-.4853.308-1.0267.308-1.624s-.1027-1.1387-.308-1.624c-.2054-.4853-.476-.896-.812-1.232s-.728-.5973-1.176-.784c-.4294-.1867-.8867-.28-1.372-.28-.4854 0-.952.0933-1.4.28-.4294.168-.812.42-1.148.756s-.6067.7467-.812 1.232c-.2054.4853-.308 1.036-.308 1.652s.1026 1.1667.308 1.652c.2053.4853.476.896.812 1.232s.7186.5973 1.148.784c.448.168.9146.252 1.4.252zm22.6688-.364c-.634 1.12-1.493 2.0253-2.576 2.716-1.064.6907-2.37 1.036-3.9198 1.036-1.0453 0-2.016-.1773-2.912-.532-.8773-.3733-1.6426-.8867-2.296-1.54-.6533-.6533-1.1666-1.4187-1.54-2.296-.3546-.896-.532-1.876-.532-2.94 0-.9893.1774-1.9227.532-2.8.3547-.896.8494-1.6707 1.484-2.324.6347-.672 1.3814-1.204 2.24-1.596.8774-.392 1.8387-.588 2.884-.588 1.1014 0 2.0818.1867 2.9398.56.859.3547 1.578.8587 2.156 1.512.579.6347 1.018 1.3907 1.316 2.268.299.8773.448 1.8293.448 2.856v.336c-.018.112-.028.2147-.028.308-.018.0933-.028.196-.028.308h-10.3318c.0747.56.224 1.0453.448 1.456.2427.392.532.728.868 1.008.3547.2613.7374.4573 1.148.588.4107.112.8307.168 1.26.168.84 0 1.5308-.1867 2.0718-.56.56-.392.999-.8773 1.316-1.456zm-3.332-5.32c-.018-.2427-.102-.5133-.252-.812-.13-.2987-.336-.5787-.616-.84-.261-.2613-.597-.476-1.008-.644-.3918-.168-.8678-.252-1.4278-.252-.784 0-1.4746.224-2.072.672-.5973.448-1.0173 1.0733-1.26 1.876zm5.899 8.624v-20.048h3.668v20.048zm6.808 0v-20.048h3.668v20.048z"
				fill="currentColor"
			/>
		</svg>
	);
}

export function PasswordIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			fill="none"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<clipPath id="connect-kit-connect-modal-password-icon-clip-a">
				<path d="m0 0h24v24h-24z" />
			</clipPath>
			<g clipPath="url(#connect-kit-connect-modal-password-icon-clip-a)">
				<path
					d="m0 9s0-2 2-2h19s2 0 2 2v6s0 2-2 2h-19s-2 0-2-2z"
					fill="currentColor"
				/>
				<path
					d="m18.52 12 .98.566-.5.868-.98-.568v1.134h-1v-1.135l-.983.568-.5-.867.983-.566-.983-.566.5-.868.983.568v-1.134h1v1.134l.98-.568.5.867zm-6 0 .98.566-.5.868-.98-.568v1.134h-1v-1.135l-.983.568-.50001-.867.98301-.566-.98301-.566.50001-.868.983.568v-1.134h1v1.134l.98-.568.5.867zm-6.00001 0 .98.566-.5.868-.98-.568v1.134h-1v-1.135l-.983.568-.5-.867.983-.566-.983-.566.5-.868.983.568v-1.134h1v1.134l.98-.568.5.867z"
					fill="rgba(255,255,255,0.7)"
				/>
			</g>
		</svg>
	);
}

export function RegisterIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			fill="none"
			height="24"
			viewBox="0 0 25 24"
			width="25"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="m2.09998 20.5248v-2.725c0-.6167.1625-1.1917.4875-1.725s.79583-.9417 1.4125-1.225c1.2-.5333 2.325-.9208 3.375-1.1625s2.075-.3625 3.07502-.3625c.4833 0 1.05.0375 1.7.1125s1.2583.1875 1.825.3375l-1.65 1.65c-.3167-.0333-.6292-.0625-.9375-.0875-.3084-.025-.6209-.0375-.9375-.0375-.93336 0-1.80002.0875-2.60002.2625s-1.78334.5125-2.95 1.0125c-.28334.15-.49167.3417-.625.575-.13334.2333-.2.4667-.2.7v.7h7.72502l1.975 1.975zm14.30002.175-3.625-3.65 1.15-1.15 2.475 2.475 5.325-5.325 1.175 1.15zm-5.95-8.925c-1.20002 0-2.18336-.3833-2.95002-1.15-.76667-.76666-1.15-1.75-1.15-2.95 0-1.21666.38333-2.20833 1.15-2.975.76666-.76666 1.75-1.15 2.95002-1.15 1.2166 0 2.2083.38334 2.975 1.15.7666.76667 1.15 1.75834 1.15 2.975 0 1.2-.3834 2.18334-1.15 2.95-.7667.7667-1.7584 1.15-2.975 1.15zm0-2c.6166 0 1.125-.2 1.525-.6s.6-.9.6-1.5c0-.63333-.2-1.14583-.6-1.5375-.4-.39166-.9084-.5875-1.525-.5875-.60002 0-1.10419.19584-1.51252.5875-.40834.39167-.6125.89584-.6125 1.51251 0 .61666.2 1.12499.6 1.52499s.90833.6 1.52502.6z"
				fill="currentColor"
			/>
		</svg>
	);
}

export function MemberIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			fill="none"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<clipPath id="connect-kit-connect-modal-member-icon-clip-a">
				<path d="m0 0h24v24h-24z" />
			</clipPath>
			<g clipPath="url(#connect-kit-connect-modal-member-icon-clip-a)">
				<path
					d="m22 6c0-1.104-.896-2-2-2h-16c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2z"
					fill="currentColor"
				/>
				<path
					d="m7.5 12c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zm0 1s-3.5 0-3.5 2v2h7s0 0 0-2-3.5-2-3.5-2zm12.5-4h-7v2h7zm0 4h-7v2h7z"
					fill="rgba(255,255,255,0.4)"
				/>
			</g>
		</svg>
	);
}

export function CheckIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			fill="none"
			height="72"
			viewBox="0 0 72 72"
			width="72"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="m28.35 53.5498-16.8-16.8 3.225-3.225 13.575 13.575 28.8-28.8 3.225 3.225z"
				fill="currentColor"
			/>
		</svg>
	);
}

export function CoinbaseIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect rx="27%" width="20" height="20" fill="#0052FF"></rect>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.0001 17C13.8661 17 17.0001 13.866 17.0001 10C17.0001 6.13401 13.8661 3 10.0001 3C6.13413 3 3.00012 6.13401 3.00012 10C3.00012 13.866 6.13413 17 10.0001 17ZM8.25012 7.71429C7.95427 7.71429 7.71441 7.95414 7.71441 8.25V11.75C7.71441 12.0459 7.95427 12.2857 8.25012 12.2857H11.7501C12.046 12.2857 12.2858 12.0459 12.2858 11.75V8.25C12.2858 7.95414 12.046 7.71429 11.7501 7.71429H8.25012Z"
				fill="white"
			></path>
		</svg>
	);
}

export function MetamaskIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			width={318.6}
			height={318.6}
			viewBox="0 0 318.6 318.6"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g strokeLinecap="round" strokeLinejoin="round">
				<path
					d="m274.1 35.5-99.5 73.9 18.4-43.6z"
					fill="#e2761b"
					stroke="#e2761b"
				/>
				<path
					d="m44.4 35.5 98.7 74.6-17.5-44.3zm193.9 171.3-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9 16.2 55.3 56.7-15.6-26.5-40.6z"
					fill="#e4761b"
					stroke="#e4761b"
				/>
				<path
					d="m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zm111.3 0-39-34.8-1.3 61.2 56.2-2.5zm-108.1 109.2 33.8-16.5-29.2-22.8zm71.1-16.5 33.9 16.5-4.7-39.3z"
					fill="#e4761b"
					stroke="#e4761b"
				/>
				<path
					d="m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zm-105 0 31.5 14.9-.2-9.3 2.5-22.1z"
					fill="#d7c1b3"
					stroke="#d7c1b3"
				/>
				<path
					d="m138.8 193.5-28.2-8.3 19.9-9.1zm40.9 0 8.3-17.4 20 9.1z"
					fill="#233447"
					stroke="#233447"
				/>
				<path
					d="m106.8 247.4 4.8-40.6-31.3.9zm100.2-40.6 4.8 40.6 26.5-39.7zm23.8-44.7-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1 20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
					fill="#cd6116"
					stroke="#cd6116"
				/>
				<path
					d="m87.8 162.1 23.6 46-.8-22.9zm120.3 23.1-1 22.9 23.7-46zm-64-20.6-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0-2.7 18 1.2 45 6.7-34.1z"
					fill="#e4751f"
					stroke="#e4751f"
				/>
				<path
					d="m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
					fill="#f6851b"
					stroke="#f6851b"
				/>
				<path
					d="m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
					fill="#c0ad9e"
					stroke="#c0ad9e"
				/>
				<path
					d="m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
					fill="#161616"
					stroke="#161616"
				/>
				<path
					d="m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zm-246.5-40.8 8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
					fill="#763d16"
					stroke="#763d16"
				/>
				<path
					d="m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4 3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
					fill="#f6851b"
					stroke="#f6851b"
				/>
			</g>
		</svg>
	);
}