import { createSelector } from "reselect";

const selectorState = state => state.directory;

export const selectDirectorySection = createSelector(
    [selectorState],
    (directory) => directory.section
)