export const getProjectTypeColor = (type: string): string =>
  type === "portfolio" ? "bg-blue-600" : "bg-green-600";

export const getButtonText = (type: string): string =>
  type === "portfolio" ? "View Project" : "Start Challenge";


export const getRankColor = (rank?: string): string => {
  if (!rank) return "bg-gray-200 text-gray-800"; 

  switch (rank.toLowerCase()) {
    case "gold":
      return "bg-yellow-500 text-white";
    case "silver":
      return "bg-gray-400 text-white";
    case "bronze":
      return "bg-orange-400 text-white";
    default:
      return "bg-gray-200 text-gray-800";
  }
};
