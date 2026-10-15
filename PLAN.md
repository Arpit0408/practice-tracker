# Interview Practice Tracker - Feature Architecture & Plan

A structured breakdown of features, views, and step-by-step implementation for the Interview Practice Tracker web application.

---

## Page Architecture & Layout

The application consists of a persistent top header and a dedicated navigation sidebar with 2 core views:

```
[ Top Header / Navbar ]
  |-- Left: Brand Logo & Title (Montserrat font) + Mobile Menu Trigger
  \-- Right: Dark / Light Mode Switcher

[ Left Sidebar Navigation ]
  |-- View 1: Dashboard (Overview, Analytics & Metrics)
  |-- View 2: Manage Questions (CRUD, Search, Multi-Filter, Status Toggles)
  \-- Actions: Reset All Data ("Fresh Start") & Load Sample Questions
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

### A. Top Control Bar (Search, Filter & Actions)
* Real-time Search Bar: Instant search by question title or topic.
* Category Filter: Filter by All, DSA, Git, Technical.
* Difficulty Filter: Filter by All, Easy, Medium, Hard.
* Status Filter: Filter by All, Pending, In Progress, Completed.
* Reset Filters Button: One-click clear for all active filters.
* Quick Data Controls: "Fresh Start" (Reset all with confirmation) and "Load Sample Data".

### B. Add Question Form / Modal
* Built with React Hook Form + Toast notifications.
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

## 3. Core Capabilities & Edge Cases

* Local Persistence:
  * All question data, filter states, and theme preferences persist in browser LocalStorage.
* Empty & Edge States:
  * Empty State: Friendly message and "Add your first question" button when no questions exist.
  * No Search Results: "No questions found matching your filters" with a "Clear Filters" button.
* Responsive Layout:
  * Header with mobile drawer toggle.
  * Sidebar transitions into an overlay drawer on mobile screens.
* Visual Polish:
  * Clear color-coded category and difficulty tags.
  * Smooth transitions and hover states.
  * Centralized CSS variables for easy future color theme customization.

---

## Step-by-Step Implementation Roadmap

1. Phase 1: Project Setup & Design System (Done)
   * Setup React with Vite.
   * Centralized color palette in index.css and tailwind.config.js.
   * Brand Logo with Montserrat font and Dark/Light theme toggle in Navbar.
   * Responsive Sidebar navigation.

2. Phase 2: State Management & LocalStorage Hook
   * Implement custom useQuestions hook for LocalStorage persistence.
   * Add initial dummy data seed utility.

3. Phase 3: Manage Questions Page (CRUD + Search/Filter)
   * Build Question Form with React Hook Form & validation.
   * Build Question Card/Table list with quick status toggle and delete.
   * Build real-time search and multi-filtering logic.
   * Implement Empty & No-Results states.

4. Phase 4: Dashboard Page
   * Compute aggregate metrics dynamically from questions state.
   * Build metric counter cards and visual progress bars.

5. Phase 5: Polish & Deliverables
   * Responsive testing across desktop and mobile.
   * Finalize README with features, setup steps, and assumptions for evaluation.
