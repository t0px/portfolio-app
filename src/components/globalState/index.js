import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState } = createGlobalState({
    isAnimating: false,
});

export {useGlobalState, setGlobalState};