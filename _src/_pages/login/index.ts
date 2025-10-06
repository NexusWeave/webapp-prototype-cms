
export function loginContent()
{
    return /*HTML*/`
    <h2>Login Page</h2>
    <form onsubmit="handleSubmission(event)" id="loginForm" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <button type="submit">Login</button>
    </form>
    `;
}

// Utility functions
export function handleSubmission(event: Event)
{
    // Prevent default form submission
    event.preventDefault();

    console.log('Form submitted');

    // Send to validation endpoint
}