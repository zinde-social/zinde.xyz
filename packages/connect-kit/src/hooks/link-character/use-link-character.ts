import { CharacterLinkType } from "@crossbell/indexer";

import { linkCharacter, siweLinkCharacter } from "../../apis";
import {
	AccountTypeBasedMutationOptions,
	createAccountTypeBasedMutationHooks,
} from "../account-type-based-hooks";

export type LinkCharacterOptions = AccountTypeBasedMutationOptions<
	typeof useLinkCharacter
>;

export const useLinkCharacter = createAccountTypeBasedMutationHooks<
	CharacterLinkType,
	{ characterId: number }
>({ actionDesc: "linking character", withParams: true }, (linkType) => ({
	async email({ characterId }, { account }) {
		return linkCharacter({
			token: account.token,
			toCharacterId: characterId,
			linkType,
		});
	},

	async contract({ characterId }, { contract, account }) {
		if (account?.characterId) {
			if (account.siwe) {
				return siweLinkCharacter({
					characterId: account.characterId,
					token: account.siwe.token,
					toCharacterId: characterId,
					linkType,
				});
			} else {
				return contract.linkCharacter(
					account.characterId,
					characterId,
					linkType
				);
			}
		}
	},
}));
