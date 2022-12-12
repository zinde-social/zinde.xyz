import React from "react";

import { useAccountState } from "../account-state";

import { useCharacterHasOperator } from "./use-character-has-operator";
import { useAddCharacterOperator } from "./use-add-character-operator";
import { useRemoveCharacterOperator } from "./use-remove-character-operator";

export function useToggleCharacterOperator(
	operator: string,
	permissions: string[]
) {
	const characterId = useAccountState((s) => s.computed.account?.characterId);
	const hasOperator = useCharacterHasOperator(operator, permissions);

	const add = useAddCharacterOperator();
	const remove = useRemoveCharacterOperator();
	const mutation = hasOperator ? remove : add;

	const toggleOperator = React.useCallback(async () => {
		if (characterId) {
			await mutation.mutateAsync({ characterId, operator, permissions });
		}
	}, [mutation, characterId, operator, permissions]);

	return [{ hasOperator, toggleOperator }, mutation] as const;
}