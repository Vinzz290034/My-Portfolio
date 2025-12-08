# Flowise AI Setup Guide for Portfolio Chatbot

## Step 1: Deploy Flowise AI

### Option A: Deploy on Railway (Recommended - Easy)
1. Go to https://railway.app
2. Sign up with GitHub
3. Create a new project
4. Add a service from GitHub
5. Search for and select: `FlowiseAI/Flowise`
6. Configure and deploy
7. Get your Flowise URL from Railway dashboard

### Option B: Deploy on Replit
1. Go to https://replit.com
2. Search for "Flowise"
3. Fork the Flowise template
4. Click "Run"
5. Get the public URL when it's running

### Option C: Run Locally (For Testing)
```bash
docker run -d -p 3000:3000 flowiseai/flowise
# Access at http://localhost:3000
```

## Step 2: Create Your Chatbot Flow

1. Open your Flowise instance at `https://your-flowise-url.com`
2. Click "Create New" → "Chatflow"
3. Build your flow:
   - Add a **Chat Input** node
   - Add your AI model (OpenAI, Claude, Gemini, etc.)
   - Add a **Chat Output** node
   - Connect them

4. **Important: Set the System Prompt:**
   Use this as your system prompt in the AI model node:
   ```
   You are a portfolio assistant for Vince Andrew D. Santoya, a Project Manager & Full Stack Developer. Your role is to help visitors learn about Vince's skills, projects, education, and professional experience.

   Contact Information:
   - Email: hanssantoya@gmail.com
   - Phone: 09695345084
   - Location: Avocado St. Mambaling, Cebu City
   - GitHub: https://github.com/Vinzz290034

   Education:
   - Bachelor of Science in Information Technology at University of Cebu Main Campus (4th Year, 2022-Present)
   - Senior High School at College of Technological Sciences Cebu (2021-2022)
   - Senior High School at Mambaling National High School (2020-2021)
   - Junior High School at University of Cebu METC (2018-2020)

   Technical Skills:
   - Frontend: HTML/CSS, JavaScript, TypeScript, React, Vite
   - Backend: Node.js, PHP, ASP.NET
   - Database: MySQL
   - Mobile: Flutter/Dart
   - Languages: C#
   - Tools: Canva, Figma, Data Analysis

   Soft Skills:
   - Communication Skills
   - Leadership Experience
   - Creative & Innovative Thinking
   - Learning/Adaptability Skills

   Featured Projects:
   - Web Development: Multiple responsive web applications using React, TypeScript, and Vite
   - Mobile Development: Cross-platform apps using Flutter and Dart
   - Full Stack Solutions: Integration of PHP, MySQL, Node.js, ASP.NET, and C#

   IMPORTANT: Only answer questions related to this portfolio. For unrelated questions, politely redirect the user to ask about Vince's professional experience.
   ```

5. Save and give it a name (e.g., "Portfolio Assistant")

## Step 3: Get Your Chat ID

1. In your chatflow, click "Save"
2. The chatflow will appear in your list
3. Click the chatflow name to open it
4. Look at the URL: `https://your-flowise-url.com/chatflow/[CHAT_ID]`
5. Copy the `CHAT_ID` part

## Step 4: Configure Your Portfolio

1. In your portfolio project, create `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and fill in:
   ```
   REACT_APP_FLOWISE_URL=https://your-flowise-domain.com
   REACT_APP_FLOWISE_CHAT_ID=your-chat-id
   ```

3. Restart your dev server:
   ```bash
   npm run dev
   ```

## Step 5: Test Your Chatbot

1. Go to http://localhost:5174
2. Click the chatbot icon (bottom right)
3. Type a test message like "Tell me about Vince's skills"
4. The chatbot should respond!

## Troubleshooting

### Chatbot says "not configured"
- Check that `.env.local` file exists
- Verify REACT_APP_FLOWISE_URL and REACT_APP_FLOWISE_CHAT_ID are set
- Restart dev server after adding .env.local

### Getting CORS errors
- In Flowise, go to Settings → CORS
- Add your portfolio URL (e.g., `http://localhost:5174`)
- For production, add your deployed URL

### "Flowise API error"
- Check that your Flowise instance is running
- Verify the URL is correct
- Make sure the chatflow is published/active

## API Endpoint

Your chatbot calls this endpoint:
```
POST https://your-flowise-url/api/v1/prediction/[CHAT_ID]

Body:
{
  "question": "user message here"
}

Response:
{
  "text": "assistant response",
  "answer": "assistant response"
}
```

This is automatically handled by the chatbot component in your portfolio!
