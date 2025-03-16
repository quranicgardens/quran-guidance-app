// src/components/ChapterList.js

//import chapters from "../../../Data/Motoon/Shatibya/shatibyaChapters
import { getMatnObject } from "../../../Helper/Utils";
import { MotoonChaptersTemplate } from "../../../Helper/Templates";
const ChapterList = () => {
  const cuurentMatn = getMatnObject();
  const chapters = cuurentMatn.chapters
  return MotoonChaptersTemplate(chapters, cuurentMatn.title);
};

export default ChapterList;


