// src/components/ChapterList.js

import chapters from "../../../Data/Motoon/Shatibya/shatibyaChapters";
import{MotoonChaptersTemplate} from "../../../Helper/Templates";
const ChapterList = () => {
  return MotoonChaptersTemplate(chapters);
};

export default ChapterList;


