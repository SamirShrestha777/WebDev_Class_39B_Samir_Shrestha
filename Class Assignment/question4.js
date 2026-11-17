// 4. Login & Role Check
// Task: Create two variables: isLoggedIn (boolean) and role
// (e.g., "admin", "editor", "guest").
// If not logged in, log "Please log in".
// If logged in and role === "admin", log "Welcome,
// Admin".
// If logged in with any other role, log "Welcome, User"

let isLoggedIn = true;
let role = "admin";

let message = !isLoggedIn
    ? "Please log in"
    : role === "admin"
        ? "Welcome, Admin"
        : "Welcome, User";

console.log(message);