export const getProjectTypeColor = (type: string): string =>
  type === "portfolio" ? "bg-blue-600" : "bg-green-600";

export const getButtonText = (type: string): string =>
  type === "portfolio" ? "View Project" : "Start Challenge";


export const getRankColor = (rank?: string): string => {
  switch (rank) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-orange-600 bg-orange-100';
      case 'Elite': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
  }
};
