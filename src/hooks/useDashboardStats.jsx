import { useSelector } from "react-redux";
import { getCategoryDetails } from "../utils/badgeHelpers";

const useDashboardStats = () => {
  const { data = [] } = useSelector((state) => state.data);

  const totalCount = data.length;
  const completedCount = data.filter((q) => q.status === "Completed").length;
  const inProgressCount = data.filter((q) => q.status === "In Progress").length;
  const pendingCount = data.filter((q) => q.status === "Pending").length;
  const overallPercentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const getCategoryStats = (categoryName) => {
    const questions = data.filter((q) => q.category === categoryName);
    const completed = questions.filter((q) => q.status === "Completed").length;
    const inProgress = questions.filter(
      (q) => q.status === "In Progress",
    ).length;
    const pending = questions.filter((q) => q.status === "Pending").length;
    const percentage =
      questions.length > 0
        ? Math.round((completed / questions.length) * 100)
        : 0;

    return {
      total: questions.length,
      completed,
      inProgress,
      pending,
      percentage,
    };
  };

  const dsaStats = getCategoryStats("DSA");
  const interviewStats = getCategoryStats("Interview Questions");
  const gitStats = getCategoryStats("Git Questions");
  const machineStats = getCategoryStats("Machine Coding");

  const combinedTotal = interviewStats.total + gitStats.total;
  const combinedCompleted = interviewStats.completed + gitStats.completed;
  const combinedPercentage =
    combinedTotal > 0
      ? Math.round((combinedCompleted / combinedTotal) * 100)
      : 0;

  const interviewGitStats = {
    total: combinedTotal,
    completed: combinedCompleted,
    percentage: combinedPercentage,
  };

  const categoryCards = [
    { name: "DSA", stats: dsaStats, ...getCategoryDetails("DSA") },
    {
      name: "Interview Questions",
      stats: interviewStats,
      ...getCategoryDetails("Interview Questions"),
    },
    {
      name: "Git Questions",
      stats: gitStats,
      ...getCategoryDetails("Git Questions"),
    },
    {
      name: "Machine Coding",
      stats: machineStats,
      ...getCategoryDetails("Machine Coding"),
    },
  ];

  const easyCount = data.filter((q) => q.difficulty === "Easy").length;
  const mediumCount = data.filter((q) => q.difficulty === "Medium").length;
  const hardCount = data.filter((q) => q.difficulty === "Hard").length;

  const getDifficultyPercent = (count) =>
    totalCount > 0 ? Math.round((count / totalCount) * 100) : 0;

  const recentQuestions = [...data].reverse().slice(0, 5);

  return {
    totalCount,
    completedCount,
    inProgressCount,
    pendingCount,
    overallPercentage,
    dsaStats,
    interviewStats,
    gitStats,
    machineStats,
    interviewGitStats,
    categoryCards,
    easyCount,
    mediumCount,
    hardCount,
    getDifficultyPercent,
    recentQuestions,
  };
};

export default useDashboardStats;
