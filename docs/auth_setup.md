# Auth Setup

Supabase is configured as the authentication provider for both email/password and Google OAuth.

## Google OAuth Configuration

### 1. Google Cloud Console
- Create an OAuth 2.0 application in [Google Cloud Console](https://console.cloud.google.com/)
- Add the **Supabase redirect URI** (not your app URL) as an authorized redirect URI:
  ```
  https://your-project-ref.supabase.co/auth/v1/callback
  ```
- Copy your Client ID and Client Secret

### 2. Supabase Dashboard
- Go to **Authentication → Providers → Google**
- Enable Google provider
- Enter your Google OAuth Client ID and Client Secret
- In **Authentication → URL Configuration**, add your app's callback URL:
  - Development: `http://localhost:3000/**`
  - Production: `https://your-domain.com/**`

**Important:** The Google Console redirect URI points to Supabase, while Supabase's authorized URLs point to your app.
