import React from "react";
import { LayoutDashboard, ListTodo, X, Sparkles } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const navigation = [
    {
      title: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Manage Questions",
      path: "/manage-ques",
      icon: ListTodo,
    },
  ];

  return (
    <>
      {/* Sidebar Container */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-64 bg-surface-card border-r border-borderline flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 `}
      >
        {/* Navigation Area */}
        <div className="p-4 space-y-6">
          {/* Mobile Header Close Button */}
          <div className="flex items-center justify-between lg:hidden pb-2 border-b border-borderline">
            <span className="text-xs font-semibold uppercase tracking-wider text-content-muted">
              Menu
            </span>
          </div>

          <div>
            {navigation.map(({ title, path, icon: Icon }) => (
              <NavLink
                to={path}
                key={title}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-surface-muted text-content-secondary hover:text-content-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
                {title}
              </NavLink>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
