import { TransitionStartFunction } from "react";

export type SearchParamsOptionsT = {
    history?: "push" | "replace";
    scroll?: boolean;
    shallow?: boolean;
    throttleMs?: number;
    startTransition?: TransitionStartFunction;
    // startTransition?: (callback: () => void | {} | Promise<void | {}>) => void
    clearOnDefault?: boolean;
};

export const DEFAULT_SEARCH_PARAMS_OPTIONS = {
    shallow: false,
};