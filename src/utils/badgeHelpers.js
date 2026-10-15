import {
  CheckCircle2,
  Clock,
  CircleDot,
  Code2,
  GitBranch,
  Terminal,
  Laptop,
} from "lucide-react";

export const getDifficultyBadge = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    case "Medium":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
    case "Hard":
      return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
    default:
      return "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20";
  }
};

export const getCategoryDetails = (category) => {
  switch (category) {
    case "DSA":
      return {
        icon: Code2,
        color:
          "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
        bgColor: "bg-indigo-500/10",
        textColor: "text-indigo-600 dark:text-indigo-400",
        barColor: "bg-indigo-500",
      };
    case "Interview Questions":
      return {
        icon: Terminal,
        color:
          "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
        bgColor: "bg-purple-500/10",
        textColor: "text-purple-600 dark:text-purple-400",
        barColor: "bg-purple-500",
      };
    case "Git Questions":
      return {
        icon: GitBranch,
        color:
          "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
        bgColor: "bg-orange-500/10",
        textColor: "text-orange-600 dark:text-orange-400",
        barColor: "bg-orange-500",
      };
    case "Machine Coding":
      return {
        icon: Laptop,
        color:
          "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
        bgColor: "bg-cyan-500/10",
        textColor: "text-cyan-600 dark:text-cyan-400",
        barColor: "bg-cyan-500",
      };
    default:
      return {
        icon: Code2,
        color:
          "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
        bgColor: "bg-slate-500/10",
        textColor: "text-slate-600 dark:text-slate-400",
        barColor: "bg-slate-500",
      };
  }
};

export const getStatusDetails = (status) => {
  switch (status) {
    case "Completed":
      return {
        icon: CheckCircle2,
        color:
          "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
        dotColor: "bg-emerald-500",
      };
    case "In Progress":
      return {
        icon: Clock,
        color:
          "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
        dotColor: "bg-blue-500 animate-pulse",
      };
    case "Pending":
      return {
        icon: CircleDot,
        color:
          "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/30",
        dotColor: "bg-slate-400",
      };
    default:
      return {
        icon: CircleDot,
        color: "bg-slate-500/10 text-slate-500 border-slate-500/30",
        dotColor: "bg-slate-400",
      };
  }
};
