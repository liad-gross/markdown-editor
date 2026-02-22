MILESTONE 1 QUIZ:
1. What is the purpose of `git commit` ?
    Git commit saves a snapshot of your project at a specific point in time in your local repository.
2. What happens when you push to GitHub?
    When you run git push, your local commits are uploaded to the remote repository on GitHub. This updates the online version of your project so others can see your most recent changes.
3. Why should we commit multiple times instead of once at the end?
    Comitting multiple times is important because it acts as checkpoints/progress updates in your development process. 
4. What is the difference between local repository and remote repository?
    A local repository i sthe verson of the project stored on your own computer and a remote repository is the version stored on GitHub.

MILESTONE 2 QUIZ:
1. What does `display: flex` do?
    Display: flex turns an element into a flex container, which allows you to easily control the layout of its child elements.
2. What is a media query?
    A media query is a CSS rule that applies specific styes only when certain conditions are met, like screen width.
3. Why should responsive design be handled in CSS, not JavaScript?
    Responsive design should be handled in CSS, not JavaScript because CSs is more specifically designed for layout and styling and is thus more efficient.
4. What happens if media query is placed before base styles?
    If the media query is placed before base styles, the base styles may override due to CSS's cascading order. 

MILESTONE 3 QUIZ:
1. What is the difference between `data` and `computed` in Vue?
    The differnece between 'data' and 'computed' in Vue is that data stores reactive state variables that hold values while computed properties are derived values that automatically update when the data they are dependent on changes.
2. Why should we not manipulate DOM manually in Vue?
    We should not manipulate DOM manually in Vue because it can conflict with VUe's updates and cause bugs.
3. What does `v-html` do?
    V-html renders raw HTML content inside an element.
4. Why must we strip HTML before counting characters?
    We strip HTML before counting characters to ensure we count only the actual text content.

MILESTONE 4 QUIZ:
1. What is localStorage?
    LocalStorage is a browser storage feature that allows you to store key–value data directly in the user’s browser. The data persists even after the browser is closed and reopened.
2. When does `mounted()` run?
    mounted() runs after the Vue app is fully initialized and the component is added to the DOM.
3. What is a Vue watcher?
    A Vue watcher monitors a specific reactive property and runs a function whenever that property changes.
4. Why should theme state also be persisted?
    Theme should be persisted so the user’s preference (light or dark mode) is saved and restored when they return to the app.

FINAL REFLECTION QUIZ:
1. How did you utilise AI to help you code the app, show some examples.
    I used AI to help me understand terms and specific code usages that I did not understand so that I could understand the building blocks to use them properly.
    For example in milestone 1, I asked ChatGPT about GitHub pushing vs committing vs add, because I have limited GitHub experience.
2. What part of the build was most challanging?
    The most challenging part of the build was managing reactivity and connecting different features together, such as live preview, character counting, theme toggling, and persisting data with localStorage.
3. What is the benefit of using a framework such as Vue for forntend development
    Using a framework like Vue makes frontend development more structured, efficient, and maintainable. It provides built-in reactivity, component-based architecture, and tools for managing state and UI updates without manually manipulating the DOM.