import Preparation from "../components/DailyCardPreparation";
import UnloadingPhase from "../components/DailyCardUnloading";
import FastingPhase from "../components/DailyCardFasting";
import LoadingPhase from "../components/DailyCardLoading";
import UsefulTipps from "../components/DailyCardUsefulTipps";

export default {
  title: "Component/DailyCard",
  component: UnloadingPhase,
};

export const DailyCard_Preparation = () => {
  return <Preparation />;
};

export const DailyCard_UnloadingPase = () => {
  return <UnloadingPhase />;
};

export const DailyCard_FastingPase = () => {
  return <FastingPhase />;
};

export const DailyCard_LoadingPase = () => {
  return <LoadingPhase />;
};

export const DailyCard_UsefulTipps = () => {
  return <UsefulTipps />;
};
