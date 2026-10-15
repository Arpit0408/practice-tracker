import React from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Terminal,
  GitBranch,
  Laptop,
  Layers,
  ArrowRight,
  Plus,
  Zap,
  Award,
} from "lucide-react";
import useDashboardStats from "../hooks/useDashboardStats";
import {
  getDifficultyBadge,
  getCategoryDetails,
  getStatusDetails,
} from "../utils/badgeHelpers";

const Dashboard = () => {
  const {
    totalCount,
    completedCount,
    inProgressCount,
    pendingCount,
    overallPercentage,
    dsaStats,
    machineStats,
    interviewGitStats,
    categoryCards,
    easyCount,
    mediumCount,
    hardCount,
    getDifficultyPercent,
    recentQuestions,
  } = useDashboardStats();

  return (
    <div className="w-full space-y-6 px-1 sm:px-2 pb-10">
      {/* ================= Header Banner ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-borderline">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-brand-light text-brand">
              <Zap className="w-5 h-5 fill-brand/20" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold font-montserrat text-content-primary tracking-tight">
              Interview Dashboard
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-content-secondary mt-1 ml-9">
            Real-time tracking of DSA, Technical Interviews, Git & Machine
            Coding prep.
          </p>
        </div>

        <Link
          to="/manage-ques"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand hover:bg-brand-hover active:scale-95 text-white text-xs sm:text-sm font-medium shadow-md shadow-brand/20 transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Manage Questions</span>
        </Link>
      </div>

      {/* ================= Core Metrics Overview (4 Cards) ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Questions */}
        <div className="p-5 rounded-2xl bg-surface-card border border-borderline shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-content-muted">
              Total Questions
            </span>
            <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Layers className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-content-primary font-montserrat">
              {totalCount}
            </span>
            <span className="text-xs text-content-muted">tracked</span>
          </div>
          <div className="mt-3 flex items-center gap-3 text-xs text-content-secondary pt-2 border-t border-borderline/60">
            <span className="text-emerald-500 font-medium">
              {completedCount} done
            </span>
            <span>•</span>
            <span className="text-blue-500 font-medium">
              {inProgressCount} in progress
            </span>
          </div>
        </div>

        {/* Card 2: Completed DSA */}
        <div className="p-5 rounded-2xl bg-surface-card border border-borderline shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-content-muted">
              DSA Solved
            </span>
            <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Code2 className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-content-primary font-montserrat">
              {dsaStats.completed}
            </span>
            <span className="text-xs text-content-muted">
              / {dsaStats.total} problems
            </span>
          </div>
          <div className="mt-3 pt-2 border-t border-borderline/60">
            <div className="flex items-center justify-between text-[11px] mb-1 font-medium">
              <span className="text-content-secondary">Completion</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                {dsaStats.percentage}%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                style={{ width: `${dsaStats.percentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Card 3: Interview & Git */}
        <div className="p-5 rounded-2xl bg-surface-card border border-borderline shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-content-muted">
              Interview & Git
            </span>
            <span className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Terminal className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-content-primary font-montserrat">
              {interviewGitStats.completed}
            </span>
            <span className="text-xs text-content-muted">
              / {interviewGitStats.total} answered
            </span>
          </div>
          <div className="mt-3 pt-2 border-t border-borderline/60">
            <div className="flex items-center justify-between text-[11px] mb-1 font-medium">
              <span className="text-content-secondary">Completion</span>
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                {interviewGitStats.percentage}%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
              <div
                className="h-full bg-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${interviewGitStats.percentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Card 4: Machine Coding */}
        <div className="p-5 rounded-2xl bg-surface-card border border-borderline shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-content-muted">
              Machine Coding
            </span>
            <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              <Laptop className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-content-primary font-montserrat">
              {machineStats.completed}
            </span>
            <span className="text-xs text-content-muted">
              / {machineStats.total} challenges
            </span>
          </div>
          <div className="mt-3 pt-2 border-t border-borderline/60">
            <div className="flex items-center justify-between text-[11px] mb-1 font-medium">
              <span className="text-content-secondary">Completion</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                {machineStats.percentage}%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
              <div
                className="h-full bg-cyan-500 rounded-full transition-all duration-500"
                style={{ width: `${machineStats.percentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= Hero Progress & Difficulty Mix ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Overall Visual Progress Ring & Goal Banner */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-surface-card border border-borderline shadow-xs flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-light text-brand mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>Preparation Velocity</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-content-primary">
                Overall Practice Completion
              </h2>
              <p className="text-xs sm:text-sm text-content-secondary mt-0.5">
                {completedCount} of {totalCount} total topics solved and
                mastered.
              </p>
            </div>

            {/* Circular Progress Ring */}
            <div className="flex items-center gap-3">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <svg
                  className="w-20 h-20 -rotate-90 transform"
                  viewBox="0 0 36 36"
                >
                  <path
                    className="text-surface-muted"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-brand transition-all duration-700 ease-out"
                    strokeDasharray={`${overallPercentage}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-base font-extrabold text-content-primary">
                    {overallPercentage}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Stack Bar */}
          <div className="mt-6 space-y-2">
            <div className="w-full h-3 rounded-full bg-surface-muted overflow-hidden flex">
              <div
                style={{
                  width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%`,
                }}
                className="bg-emerald-500 transition-all duration-500"
                title={`Completed: ${completedCount}`}
              />
              <div
                style={{
                  width: `${totalCount > 0 ? (inProgressCount / totalCount) * 100 : 0}%`,
                }}
                className="bg-blue-500 transition-all duration-500"
                title={`In Progress: ${inProgressCount}`}
              />
              <div
                style={{
                  width: `${totalCount > 0 ? (pendingCount / totalCount) * 100 : 0}%`,
                }}
                className="bg-slate-400 dark:bg-slate-600 transition-all duration-500"
                title={`Pending: ${pendingCount}`}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs pt-2 text-content-secondary gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Completed: </span>
                <span className="font-semibold text-content-primary">
                  {completedCount}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span>In Progress: </span>
                <span className="font-semibold text-content-primary">
                  {inProgressCount}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-600" />
                <span>Pending: </span>
                <span className="font-semibold text-content-primary">
                  {pendingCount}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Difficulty Breakdown Card */}
        <div className="p-6 rounded-2xl bg-surface-card border border-borderline shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-content-primary">
                Difficulty Level Mix
              </h2>
              <span className="text-xs text-content-muted font-medium">
                {totalCount} Total
              </span>
            </div>

            <div className="space-y-4">
              {/* Easy */}
              <div>
                <div className="flex items-center justify-between text-xs font-medium mb-1">
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    Easy
                  </span>
                  <span className="text-content-secondary">
                    {easyCount} ({getDifficultyPercent(easyCount)}%)
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full"
                    style={{ width: `${getDifficultyPercent(easyCount)}%` }}
                  />
                </div>
              </div>

              {/* Medium */}
              <div>
                <div className="flex items-center justify-between text-xs font-medium mb-1">
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">
                    Medium
                  </span>
                  <span className="text-content-secondary">
                    {mediumCount} ({getDifficultyPercent(mediumCount)}%)
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: `${getDifficultyPercent(mediumCount)}%` }}
                  />
                </div>
              </div>

              {/* Hard */}
              <div>
                <div className="flex items-center justify-between text-xs font-medium mb-1">
                  <span className="text-rose-600 dark:text-rose-400 font-semibold">
                    Hard
                  </span>
                  <span className="text-content-secondary">
                    {hardCount} ({getDifficultyPercent(hardCount)}%)
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
                  <div
                    className="h-full bg-rose-500 rounded-full"
                    style={{ width: `${getDifficultyPercent(hardCount)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-borderline/60 mt-4 text-[11px] text-content-muted flex items-center justify-between">
            <span>Optimal ratio for tech rounds</span>
            <span className="text-brand font-medium">Balanced Prep</span>
          </div>
        </div>
      </div>

      {/* ================= Category Deep-Dive Grid ================= */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base sm:text-lg font-bold text-content-primary">
            Track by Category
          </h2>
          <Link
            to="/manage-ques"
            className="text-xs text-brand hover:underline font-medium inline-flex items-center gap-1"
          >
            <span>Open Tracker</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {categoryCards.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className="p-5 rounded-2xl bg-surface-card border border-borderline hover:border-brand/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`p-2 rounded-xl ${cat.bgColor} ${cat.color}`}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-surface-muted text-content-secondary">
                      {cat.stats.total} items
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-content-primary">
                    {cat.name}
                  </h3>

                  <div className="mt-3 flex items-baseline justify-between text-xs text-content-secondary">
                    <span>Solved</span>
                    <span className="font-semibold text-content-primary">
                      {cat.stats.completed} / {cat.stats.total}
                    </span>
                  </div>

                  <div className="mt-2 w-full h-2 rounded-full bg-surface-muted overflow-hidden">
                    <div
                      className={`h-full ${cat.barColor} rounded-full transition-all duration-500`}
                      style={{ width: `${cat.stats.percentage}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-borderline/60 flex items-center justify-between text-[11px] text-content-muted">
                  <span>{cat.stats.inProgress} in progress</span>
                  <span className="font-semibold text-brand">
                    {cat.stats.percentage}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= Recent Activity Preview ================= */}
      <div className="p-6 rounded-2xl bg-surface-card border border-borderline shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-borderline">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-content-primary">
              Recent Practice Questions
            </h2>
            <p className="text-xs text-content-muted mt-0.5">
              Latest items added to your tracker.
            </p>
          </div>

          <Link
            to="/manage-ques"
            className="text-xs font-semibold text-brand hover:underline inline-flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {recentQuestions.length === 0 ? (
          <div className="py-10 text-center text-content-muted">
            <p className="text-sm font-medium">No questions added yet.</p>
            <p className="text-xs mt-1">
              Start adding your preparation questions in the tracker.
            </p>
            <Link
              to="/manage-ques"
              className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs font-medium cursor-pointer transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Your First Question</span>
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-borderline">
            {recentQuestions.map((item) => {
              const categoryMeta = getCategoryDetails(item.category);
              const CategoryIcon = categoryMeta.icon;
              const statusMeta = getStatusDetails(item.status);
              const StatusIcon = statusMeta.icon;

              return (
                <div
                  key={item.id}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-surface-muted/30 px-2 rounded-xl transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span
                      className={`p-1.5 rounded-lg border shrink-0 ${categoryMeta.color}`}
                    >
                      <CategoryIcon className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-content-primary line-clamp-1">
                        {item.title}
                      </h4>
                      <span className="text-[11px] text-content-muted">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide border uppercase ${getDifficultyBadge(
                        item.difficulty,
                      )}`}
                    >
                      {item.difficulty}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-medium border ${statusMeta.color}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      <span>{item.status}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
