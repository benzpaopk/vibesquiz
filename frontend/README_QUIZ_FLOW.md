# Quiz Flow Architecture

## Route Structure

The quiz flow uses a clean, performant route structure optimized for user experience and session tracking:

```
/quiz/[slug]/start          → Initialize session, redirect to Q1
/quiz/[slug]/question/[1-10] → Individual question pages
/quiz/[slug]/results         → Results page
```

## Key Features

### 1. **Session Management**
- **Unique Session IDs**: Generated on quiz start (`quiz_timestamp_random`)
- **Dual Storage**: Uses both `localStorage` (persistence) and `sessionStorage` (performance)
- **Auto-save**: Answers saved immediately when selected
- **Session Recovery**: Users can refresh page and resume where they left off
- **24-hour Expiry**: Sessions expire after 24 hours

### 2. **Performance Optimizations**

#### Route Structure Benefits:
- **Single Question Per Page**: Only loads one question at a time (smaller bundle)
- **Client-side Navigation**: Fast transitions between questions
- **Lazy Loading**: Questions loaded on-demand
- **Prefetching**: Next question can be prefetched while user reads current

#### Code Splitting:
- Each route is a separate chunk
- Question component only loaded when needed
- Results page separate from question flow

#### State Management:
- Minimal state in components
- Session data in localStorage (persistent)
- No unnecessary re-renders

### 3. **User Experience**

#### Progress Tracking:
- Visual progress bar at top
- Question dots showing answered/completed status
- Current question highlighted
- Can see which questions are answered

#### Navigation:
- Previous/Next buttons
- Can go back to review answers
- Smooth transitions between questions
- Loading states during navigation

#### Answer Selection:
- Large, touch-friendly buttons (A-E)
- Visual feedback on selection
- Auto-save (no "Save" button needed)
- Clear indication of selected answer

### 4. **Session Tracking**

#### Analytics Events:
- `quiz_started`: When user clicks "Start Quiz"
- `quiz_answer`: Each answer selection (with question number and answer)
- `quiz_completed`: When quiz is finished (with duration)

#### Session Data Stored:
```typescript
{
  sessionId: string;
  slug: string;
  startedAt: number;
  completedAt?: number;
  answers: string[];  // Array of 10 answers (A-E)
  currentQuestion?: number;
}
```

### 5. **Error Handling**

- Invalid session → Redirect to start
- Missing question → Show error, allow retry
- Network errors → Graceful fallback
- Expired session → Clean up and restart

## Flow Diagram

```
User clicks "Start Quiz"
    ↓
/quiz/[slug]/start
    ↓
Generate sessionId
Initialize session in localStorage
    ↓
Redirect to /quiz/[slug]/question/1?session=xxx
    ↓
Load Question 1
User selects answer → Auto-save
    ↓
Click "Next" → /quiz/[slug]/question/2?session=xxx
    ↓
... (repeat for questions 2-9)
    ↓
Question 10 → Click "See Results"
    ↓
/quiz/[slug]/results?session=xxx
    ↓
Calculate results
Display character + description
Allow sharing
```

## Best Practices Implemented

1. **URL-based State**: Session ID in query params (shareable, bookmarkable)
2. **Progressive Enhancement**: Works without JavaScript (with fallbacks)
3. **Accessibility**: Keyboard navigation, ARIA labels, semantic HTML
4. **Mobile-first**: Touch-friendly buttons, responsive design
5. **Performance**: Minimal JavaScript, optimized images, lazy loading
6. **SEO**: Proper meta tags, structured data (for results page)
7. **Security**: Session validation, input sanitization
8. **Analytics**: Comprehensive event tracking

## Future Enhancements

- [ ] Server-side session storage (for multi-device support)
- [ ] Real-time progress sync (if user switches devices)
- [ ] Question randomization
- [ ] Adaptive difficulty
- [ ] Time tracking per question
- [ ] Pause/resume functionality
- [ ] Social sharing with result images
- [ ] Leaderboard integration
