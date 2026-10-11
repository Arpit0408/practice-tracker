# Interview Practice Tracker - Feature Architecture & Plan

A structured breakdown of features, views, and step-by-step implementation for the Interview Practice Tracker web application.

---

## Page Architecture & Views

The application is structured into 3 core views / tabs for a clean, modular, and focused user experience:

```
[ Navigation / Sidebar ]
  |-- Dashboard (Overview, Analytics & Metrics)
  |-- Manage Questions (CRUD, Search, Filter, Status toggles)
  \-- Settings (Theme, Data Reset & Backup)
```

---

## 1. View 1: Dashboard (Analytics & Insights)

The Dashboard provides a high-level view of weekly preparation progress and statistics.

### Key Features:
* Metric Cards:
  * Total Questions Tracked: Overall count of added items.
  * DSA Problems Solved: Count and ratio of completed DSA questions.
  * Technical / Interview Questions: Completed technical and Git questions.
  * Machine Coding Status: Preparation progress/status for machine coding practice.
* Visual Progress Bars:
  * Overall completion percentage: ((Completed / Total) * 100%).
  * Category-wise breakdown progress bars (DSA, Git, Technical).
* Quick Glance:
  * Quick summary of recently completed or in-progress questions.
  * Direct action button to jump to Manage Questions.

---

## 2. View 2: Manage Questions (Core Tracker)

The operational hub where the student tracks, searches, and updates question progress.

### A. Top Control Bar (Search & Filter)
* Real-time Search Bar: Instant search by question title or topic.
* Category Filter: Filter by All, DSA, Git, Technical.
* Difficulty Filter: Filter by All, Easy, Medium, Hard.
* Status Filter: Filter by All, Pending, In Progress, Completed.
* Reset Filters Button: One-click clear for all active filters.

### B. Add Question Form / Modal
* Fields:
  * Question Title (Text input, required)
  * Category (Dropdown: DSA / Git / Technical)
  * Difficulty (Dropdown/Radio: Easy / Medium / Hard)
  * Initial Status (Pending / In Progress / Completed)
  * Optional Notes / Link (e.g. LeetCode or GitHub URL)
* Form Validation: Prevents empty submissions, trims whitespace, displays clear validation errors.

### C. Question Listing (Grid / List View)
* Card/List item showing: Title, Category Badge, Difficulty Badge, Status Indicator.
* Interactive Status Changer: Quick dropdown or one-click toggle to update status (Pending -> In Progress -> Completed).
* Edit & Delete Action: Option to edit question details or delete with confirmation.

---

## 3. View 3: Settings & Preferences

User preferences and storage controls for a personalized experience.

### Key Features:
* Theme Management:
  * Toggle between Dark Mode and Light Mode (persisted in LocalStorage).
* Data Management:
  * Reset Data ("Fresh Start"): Clears all stored questions and resets to fresh state (with confirmation dialog).
  * Load Sample Data: One-click button to load pre-populated dummy interview questions for demo purposes.

---

## 4. Core Capabilities & Edge Cases

* Local Persistence:
  * All question data, filter states, and theme preferences persist in browser LocalStorage.
* Empty & Edge States:
  * Empty State: Friendly message and "Add your first question" button when no questions exist.
  * No Search Results: "No questions found matching your filters" with a "Clear Filters" button.
* Responsive Layout:
  * Fully fluid responsive design (Mobile navbar/tabs, desktop clean grid).
* Visual Polish:
  * Clear category and difficulty tags.
  * Smooth transitions and hover states.

---

## Step-by-Step Implementation Roadmap

1. Phase 1: Project Setup & Design System
   * Setup React with Vite.
   * Define CSS variables (Color palette, dark/light theme tokens, typography).
   * Create navigation layout (Sidebar / Top Navbar for 3 views).

2. Phase 2: State Management & LocalStorage Hook
   * Implement custom useLocalStorage hook for questions and theme.
   * Add initial dummy data seed utility.

3. Phase 3: Manage Questions Page (CRUD + Search/Filter)
   * Build Question Form with validation.
   * Build Question Card/Table list with quick status toggle and delete.
   * Build real-time search and multi-filtering logic.
   * Implement Empty & No-Results states.

4. Phase 4: Dashboard Page
   * Compute aggregate metrics dynamically from state.
   * Build metric counter cards and visual progress bars.

5. Phase 5: Settings Page & Polish
   * Wire theme toggle and fresh-start data reset.
   * Add sample data loader button.
   * Responsive testing (Desktop + Mobile) and README finalization.
