export interface TravelTip {
  id: number;
  titleKey: string;
  descriptionKey: string;
  icon: string;
}

export const travelTips: TravelTip[]= [
  {
    id: 1,
    titleKey: "tips.documents.title",
    descriptionKey: "tips.documents.description",
    icon: "📄"
  },
  {
    id: 2,
    titleKey: "tips.health.title",
    descriptionKey: "tips.health.description",
    icon: "💊"
  },
  {
    id: 3,
    titleKey: "tips.money.title",
    descriptionKey: "tips.money.description",
    icon: "💰"
  },
  {
    id: 4,
    titleKey: "tips.packing.title",
    descriptionKey: "tips.packing.description",
    icon: "🎒"
  }
];
