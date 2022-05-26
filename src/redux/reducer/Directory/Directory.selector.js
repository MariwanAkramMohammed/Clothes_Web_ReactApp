import {createSelector}from 'reselect';
const selectDirectoryInput=state=>state.Directory;
export const selectSectionDirectory=createSelector(selectDirectoryInput,Directory=>Directory.sections);
