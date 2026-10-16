import React from "react";
import { CheckSquare, Sun, Moon, Menu } from "lucide-react";
import useTheme from "../hooks/useTheme";

const Navbar = ({ onToggleSidebar = () => {} }) => {
  const { theme, toggleTheme } = useTheme();
  console.log("theme is", theme);

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-surface-card/80 border-b border-borderline transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-xl border border-borderline bg-surface-card hover:bg-surface-muted text-content-secondary hover:text-content-primary transition-colors cursor-pointer"
              aria-label="Toggle Sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 sm:gap-3 select-none">
              <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand text-white shadow-md shadow-brand/25">
                <CheckSquare className="text-[#000000] w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.4]" />
              </div>

              <div className="flex flex-col">
                <div className="font-montserrat tracking-tight leading-none text-base sm:text-xl font-bold flex items-center gap-1.5">
                  <span className="text-content-primary font-bold tracking-tight">
                    Practice
                  </span>
                  <span className="text-brand font-bold font-black">
                    Tracker
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-content-muted tracking-wide font-medium">
                  Prep & Progress
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 sm:p-2.5 rounded-xl border border-borderline bg-surface-card hover:bg-surface-muted text-content-secondary hover:text-content-primary transition-all shadow-sm cursor-pointer flex items-center gap-2"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
