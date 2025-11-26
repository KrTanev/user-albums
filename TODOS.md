# 📋 User Workflow: User albums

## Overview

Build a modern React application that allows users to browse:

- users
- albums for each user
- photos for each album
- favorite photos

#### Useful links

API - https://jsonplaceholder.typicode.com/

Libraries :

- React Router V6 https://reactrouter.com/6.30.2/start/overview
- React Tanstack Query https://tanstack.com/query/latest/docs/framework/react/overview
- Axios https://axios-http.com/docs/intro
- MUI https://mui.com/material-ui/all-components/

---

# Vol 1

## Task 1: Users Page

- Fetch & display all users

- Each user card shows: name, email, company

- Button → View Albums (navigates to /users/:id/albums)

- Search by user name

## Task 2: Albums Page

- Fetch albums for selected user

- Display album list

- Click album → View Photos

- Show user info at top

## Task 3: Photos Page

- Display photos in a grid

- Button which changes the view from grid to list

- Search photos by title (debounced) - loadash

- Favorite/unfavorite button - with local storage

- Clicking a photo opens modal viewer

## Task 4: Modal Viewer

- Show full-size image

- Show title

- Buttons: next, previous, close

- Keyboard navigation: ← → Esc

## Task 5: Favorites Page

- Show all favorites photos

- Remove from favorites

- Persist favorites in localStorage

---

# Vol 2

## Feature 1: Favorites System with Analytics

**Extends Task 5: Favorites Page**

**Skill Focus:** Context API/custom hooks, localStorage, data persistence

### 1.1 Core Functionality - useFavorites Hook

- [ ] Create `useFavorites` custom hook with:
  - `favorites`: FavoritePhoto[] - array of favorited photos with timestamps
  - `addFavorite(photo)`: Add photo to favorites (auto-timestamp)
  - `removeFavorite(photoId)`: Remove photo from favorites
  - `isFavorite(photoId)`: Check if photo is favorited
  - `clearAllFavorites()`: Clear all favorites
- [ ] Implement localStorage persistence with key: `user-albums-favorites`
- [ ] Handle localStorage errors gracefully (quota exceeded, disabled)

### 1.2 Favorites Page Enhancement

- [ ] Route: `/favorites` - Display all favorited photos
- [ ] Implement Favorites page with:
  - Grid/list view toggle (same as photos page)
  - Remove from favorites button on each photo
  - Empty state when no favorites
  - Sort options: newest first, oldest first, alphabetical
- [ ] Add Favorites nav link to Navbar

### 1.3 Analytics Dashboard

- [ ] Create `/favorites/analytics` route with:
  - **Statistics Cards:**
    - Total favorites count
    - Favorites by album (count)
    - Favorite count by user
  - **Charts (use mui charts):**
    - Pie chart: Distribution of favorites per album
    - Bar chart: Favorites per user
    - Timeline: Favorites added over time
  - **Recently Favorited Section:**
    - Show last 5-10 favorited photos with thumbnails
    - Display timestamp of when favorited
    - Quick remove button

### 1.4 Export Functionality

- [ ] Add "Export Favorites" button in analytics
- [ ] Export as JSON format with structure:
  ```json
  {
    "exportDate": "2025-11-26",
    "totalFavorites": 10,
    "favorites": [
      {
        "id": 1,
        "title": "...",
        "url": "...",
        "albumId": 1,
        "favoritedAt": "2025-11-26T10:30:00Z"
      }
    ]
  }
  ```

### 1.5 Data Structure

- Enhance favorite objects with metadata:
  ```typescript
  interface FavoritePhoto {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    albumId: number;
    favoritedAt: string; // ISO timestamp
  }
  ```

### 1.6 UI/UX Components

- [ ] Favorite star icon button (filled/unfilled state)
- [ ] Toast notification when favorited/removed
- [ ] Loading skeleton for analytics charts
- [ ] Responsive grid for photos (same as photos page)

## Feature 2: User Comparison Tool

**Skill Focus:** Complex component architecture, state lifting, advanced filtering

### Requirements

#### 2.1 Comparison Page Setup

- [ ] Route: `/compare-users` - Comparison page
- [ ] Add link in Navbar to access comparison tool
- [ ] Page layout: User selector panel + Comparison table/cards

#### 2.2 User Selection System

- [ ] Multi-select user picker:
  - Autocomplete search field for users
  - Allow selecting 2-3 users (toggle selection)
  - Visual indicators for selected users
  - "Clear selection" button
  - Show avatars/badges for selected users
- [ ] Preload all user data on page load (useGetUsers hook)
- [ ] Store selected user IDs in state

#### 2.3 Data Aggregation for Comparison

- [ ] Fetch additional data for each selected user:
  - User basic info (name, email, company, location)
  - Album count (via /albums?userId=X)
  - Photo count (aggregate from all albums)
  - Posts count (if adding posts from API)
  - Comments count (if available)
- [ ] Use React Query to parallelize queries for each user

#### 2.4 Comparison Components (Leave to LAST)

- [ ] **ComparisonTable Component:**

  - Rows: Different user attributes (name, email, city, company, etc.)
  - Columns: One per selected user
  - Highlight similar/different values (color coding)
  - Show badges/icons for distinctions (e.g., "Most albums", "Largest city")

- [ ] **ComparisonCards Component (alternative view):**
  - Card per user with side-by-side layout
  - Display stats prominently
  - Toggle between table/card view

#### 2.5 Comparison Features

- [ ] **Stat Comparison:**

  - Album count comparison
  - Photo count comparison
  - Geographic comparison (city, zip code)
  - Company/industry comparison

- [ ] **Highlighting Logic:**

  - Mark identical values (grayed out or muted)
  - Highlight differences (color coded)
  - Show "Similar" badge for matching companies/cities
  - Show max/min values with icons

- [ ] **Filter/Sort Options:**
  - Show/hide certain attribute categories
  - Sort users by selected attribute
  - Toggle detailed view vs. summary view

#### 2.6 Data Structure

```typescript
interface UserComparison {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
    catchPhrase: string;
  };
  address: {
    city: string;
    zipcode: string;
  };
  stats: {
    albumCount: number;
    photoCount: number;
    postCount?: number;
  };
}
```

#### 2.7 UI/UX Components

- [ ] Reusable ComparisonCell component (handles styling)
- [ ] ComparisonSelector component (user picker)
- [ ] ComparisonStats component (stat cards)
- [ ] Empty state when no users selected
- [ ] Loading skeletons while data fetches
- [ ] Responsive layout (stack on mobile, side-by-side on desktop) (Optional)

#### 2.8 URL State Management

- [ ] Use `useSearchParams` to persist selected users
- [ ] Format: `/compare-users?users=1,2,3`
- [ ] Allow shareable comparison links
- [ ] Reset URL params on "Clear selection"

#### 2.9 Performance Considerations

- [ ] Use React Query to cache user/album data
- [ ] Memoize comparison components (React.memo)
- [ ] Debounce user search input
