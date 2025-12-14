## FEATURE:

Build a web-based Multi-Agent AI Application using a split-stack architecture:
1.  **Backend (Python)**: Hosts the Pydantic AI agents with streaming support.
2.  **Frontend (Next.js)**: A modern chat interface to interact with the agents in real-time.

**Core Functionality:**
- **Hierarchical Agent System**:
    - **Primary Agent (Research Agent)**: Uses Brave Search API to gather information from the web. Can search for topics, extract relevant information, and synthesize findings.
    - **Sub-Agent (Email Draft Agent)**: Acts as a tool for the primary agent. Uses Gmail API to draft and send emails based on research findings. The primary agent can invoke this sub-agent when it determines an email should be sent.
- **Real-time Streaming**: The user chats via the Next.js UI, which sends requests to the Python backend. The backend streams the agent's thought process, tool calls, intermediate steps, and final response back to the client using Server-Sent Events (SSE) or FastAPI StreamingResponse.
- **User Experience**: 
    - Clean, modern chat interface with message history
    - Visual indicators for agent thinking, tool usage, and responses
    - Support for markdown rendering in agent responses
    - Error handling and retry mechanisms
    - Loading states and progress indicators

**Tech Stack:**
- **Frontend**: 
    - Next.js 14+ (App Router)
    - TypeScript for type safety
    - Tailwind CSS for styling
    - Vercel AI SDK (`ai` package) for streaming chat interface
    - React hooks for state management
- **Backend**: 
    - Python 3.10+
    - FastAPI for REST API and streaming endpoints
    - Pydantic AI for agent orchestration
    - Uvicorn as ASGI server
    - Python-dotenv for environment management

**Key User Flows:**
1. User opens the web app → sees chat interface
2. User types a research query (e.g., "Research the latest trends in AI and draft an email to my team")
3. Frontend sends request to FastAPI `/api/chat` endpoint
4. Backend Research Agent processes query → uses Brave Search API → gathers information
5. Research Agent determines email is needed → invokes Email Draft Agent as a tool
6. Email Draft Agent uses Gmail API → drafts email → returns to Research Agent
7. Research Agent synthesizes findings and email draft → streams response back
8. Frontend displays streaming response with proper formatting
9. User can continue conversation or start new queries

## EXAMPLES:

In the `examples/` folder, provide comprehensive patterns for both the frontend and backend integration:

**Backend Patterns (`examples/backend/`):**
- `examples/backend/main.py` - FastAPI app setup with:
    - CORS middleware configuration (allow Next.js origin)
    - Streaming endpoint `/api/chat` using FastAPI StreamingResponse
    - Error handling middleware
    - Health check endpoint `/health`
    - Request/response logging
- `examples/backend/agent_graph.py` - Pydantic AI implementation showing:
    - Research Agent definition with system prompt
    - Email Draft Agent definition as a tool/function
    - Agent-to-agent invocation pattern
    - Error handling in agent execution
    - Streaming response generation
- `examples/backend/tools.py` - Tool implementations:
    - `brave_search_tool()` - Brave Search API wrapper with error handling, rate limiting, and result parsing
    - `draft_email_tool()` - Gmail API integration for drafting emails (OAuth2 flow)
    - Tool response formatting and validation
- `examples/backend/dependencies.py` - Dependency injection:
    - API key management (Brave, OpenAI, Gmail)
    - Gmail OAuth2 credential handling
    - Environment variable validation
    - Configuration models using Pydantic
- `examples/backend/models.py` - Pydantic models for:
    - Chat request/response schemas
    - Agent message formats
    - Tool call structures
    - Error response formats
- `examples/backend/utils.py` - Utility functions:
    - Streaming response formatters
    - Error handling helpers
    - Logging configuration
    - API client initialization

**Frontend Patterns (`examples/frontend/`):**
- `examples/frontend/chat-interface.tsx` - Main chat component:
    - `useChat` hook from Vercel AI SDK for streaming
    - Message history management
    - Loading states and error handling
    - Markdown rendering for agent responses
    - Tool call visualization
    - Auto-scroll to latest message
- `examples/frontend/api-route.ts` - Next.js API Route handler (if using proxy):
    - Proxy pattern to FastAPI backend
    - Request forwarding with proper headers
    - Error handling and response transformation
    - Alternative: Direct fetch configuration in `useChat`
- `examples/frontend/components/`:
    - `MessageList.tsx` - Message display component
    - `MessageInput.tsx` - Input field with submit handling
    - `ToolCallIndicator.tsx` - Visual indicator for agent tool usage
    - `LoadingSpinner.tsx` - Loading state component
    - `ErrorMessage.tsx` - Error display component
- `examples/frontend/types.ts` - TypeScript interfaces:
    - Chat message types
    - API request/response types
    - Agent response structures
    - Tool call types
- `examples/frontend/lib/api.ts` - API client utilities:
    - Fetch wrapper for streaming
    - Error handling
    - Request configuration

**Integration Patterns:**
- `examples/integration/streaming-setup.md` - Documentation on:
    - How Server-Sent Events (SSE) work with FastAPI StreamingResponse
    - How Vercel AI SDK handles streaming responses
    - Formatting requirements for compatibility
    - Debugging streaming issues
- `examples/integration/error-handling.md` - Error handling patterns:
    - Network errors
    - API errors (Brave, Gmail, OpenAI)
    - Agent execution errors
    - User-friendly error messages

**Testing Patterns (`examples/tests/`):**
- `examples/tests/test_agents.py` - Unit tests for agents
- `examples/tests/test_tools.py` - Unit tests for tools
- `examples/tests/test_api.py` - Integration tests for API endpoints
- `examples/tests/test_streaming.py` - Tests for streaming functionality

**README in examples:**
- `examples/README.md` - Comprehensive documentation explaining:
    - Purpose of each example file
    - How to adapt patterns for the actual implementation
    - Best practices and common pitfalls
    - Integration points between frontend and backend

Don't copy these examples directly, but use them as comprehensive patterns and best practices for structuring the communication between Next.js and Python, handling streaming, error cases, and agent orchestration.

## DOCUMENTATION:

**Pydantic AI:**
- Main documentation: https://ai.pydantic.dev/
- Agent creation: https://ai.pydantic.dev/agents/
- Tools and functions: https://ai.pydantic.dev/tools/
- Streaming responses: https://ai.pydantic.dev/streaming/
- Multi-agent patterns: https://ai.pydantic.dev/patterns/
- Provider configuration (OpenAI, Anthropic, etc.): https://ai.pydantic.dev/providers/

**FastAPI:**
- Main documentation: https://fastapi.tiangolo.com/
- Streaming responses: https://fastapi.tiangolo.com/advanced/custom-response/#streamingresponse
- CORS middleware: https://fastapi.tiangolo.com/tutorial/cors/
- Background tasks: https://fastapi.tiangolo.com/tutorial/background-tasks/
- Error handling: https://fastapi.tiangolo.com/tutorial/handling-errors/
- Dependency injection: https://fastapi.tiangolo.com/tutorial/dependencies/

**Next.js:**
- App Router documentation: https://nextjs.org/docs/app
- API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- Server Components: https://nextjs.org/docs/app/building-your-application/rendering/server-components
- Client Components: https://nextjs.org/docs/app/building-your-application/rendering/client-components
- Environment variables: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables

**Vercel AI SDK:**
- Main documentation: https://sdk.vercel.ai/docs
- useChat hook: https://sdk.vercel.ai/docs/reference/ai-sdk-ui/hooks/use-chat
- Streaming: https://sdk.vercel.ai/docs/guides/streaming-ui
- Error handling: https://sdk.vercel.ai/docs/guides/error-handling
- Custom providers: https://sdk.vercel.ai/docs/guides/custom-provider

**External APIs:**
- Brave Search API: https://brave.com/search/api/
- Gmail API: https://developers.google.com/gmail/api
- Gmail OAuth2 setup: https://developers.google.com/gmail/api/auth/about-auth
- OpenAI API (for Pydantic AI): https://platform.openai.com/docs/api-reference

**Python Libraries:**
- Pydantic: https://docs.pydantic.dev/
- Python-dotenv: https://pypi.org/project/python-dotenv/
- Uvicorn: https://www.uvicorn.org/

## OTHER CONSIDERATIONS:

**Project Structure:**
- Use a monorepo-style structure:
  - `/frontend`: Next.js application with App Router
  - `/backend`: Python application with FastAPI
  - `/examples`: Example patterns and reference code
  - Root level: `.env.example` files, `README.md`, `requirements.txt`, `package.json`
- Follow Next.js App Router conventions for frontend
- Organize backend into modules: `agents/`, `tools/`, `models/`, `api/`, `utils/`
- Keep files under 500 lines - split large files into modules

**Environment Variables:**
- Backend `.env` (include `.env.example`):
  - `BRAVE_API_KEY` - Brave Search API key
  - `GMAIL_CLIENT_ID` - Gmail OAuth2 client ID
  - `GMAIL_CLIENT_SECRET` - Gmail OAuth2 client secret
  - `GMAIL_REFRESH_TOKEN` - Gmail OAuth2 refresh token (obtained via OAuth flow)
  - `OPENAI_API_KEY` - OpenAI API key for Pydantic AI
  - `BACKEND_PORT` - Port for FastAPI server (default: 8000)
  - `ENVIRONMENT` - `development` or `production`
- Frontend `.env.local` (include `.env.example`):
  - `NEXT_PUBLIC_API_URL` - FastAPI server URL (e.g., http://localhost:8000)
  - `NEXT_PUBLIC_ENVIRONMENT` - Environment identifier

**Gmail Authentication:**
- Since this is a server-side agent, set up Gmail API with OAuth2:
  1. Create Google Cloud Project
  2. Enable Gmail API
  3. Create OAuth2 credentials (Client ID/Secret)
  4. Set up OAuth2 flow to obtain refresh token
  5. Store credentials securely in environment variables
  6. Use `google-auth` and `google-api-python-client` libraries
  7. Implement token refresh logic for long-running sessions
- Document the OAuth2 setup process in README
- Consider using service account for production if appropriate
- Never commit credentials to version control

**CORS Configuration:**
- Configure FastAPI CORS middleware to allow requests from Next.js
- In development: Allow `http://localhost:3000` (or Next.js port)
- In production: Allow specific production domain
- Include credentials if needed: `allow_credentials=True`
- Set appropriate headers: `allow_headers=["*"]` or specific headers

**Type Safety:**
- Use Pydantic models in Python for all API schemas
- Define corresponding TypeScript interfaces in Next.js
- Generate types from Pydantic models if possible (using tools like `pydantic-to-typescript`)
- Validate all API requests and responses
- Use TypeScript strict mode in Next.js

**Streaming Implementation:**
- Use FastAPI `StreamingResponse` for backend streaming
- Format responses as Server-Sent Events (SSE) or newline-delimited JSON
- Handle connection drops gracefully on both ends
- Implement reconnection logic in frontend
- Show loading indicators during streaming
- Handle partial responses and errors during stream

**Error Handling:**
- Implement comprehensive error handling:
  - Network errors (connection failures, timeouts)
  - API errors (Brave Search, Gmail, OpenAI rate limits/errors)
  - Agent execution errors (tool failures, invalid responses)
  - Validation errors (malformed requests)
- Return user-friendly error messages
- Log errors server-side for debugging
- Implement retry logic for transient failures
- Handle rate limiting from external APIs

**Agent Configuration:**
- Configure Pydantic AI agents with appropriate:
  - System prompts (clear instructions for each agent)
  - Model selection (OpenAI GPT-4, GPT-3.5-turbo, or configurable)
  - Temperature and other model parameters
  - Max tokens for responses
  - Timeout settings
- Make agent configuration environment-driven
- Support multiple LLM providers if possible

**Testing Requirements:**
- Create comprehensive unit tests:
  - Test agent logic and tool calls
  - Test API endpoints (including streaming)
  - Test error handling paths
  - Test authentication flows
- Include integration tests:
  - Test full agent workflow
  - Test frontend-backend integration
  - Test streaming functionality
- Use pytest for Python tests
- Use Jest/React Testing Library for frontend tests
- Mock external API calls in tests

**Security Considerations:**
- Never expose API keys in frontend code
- Validate and sanitize all user inputs
- Implement rate limiting on API endpoints
- Use HTTPS in production
- Secure environment variable storage
- Implement proper authentication if user accounts are added later
- Validate Gmail API scopes (request minimum required scopes)

**Performance Optimization:**
- Implement connection pooling for API clients
- Cache API responses where appropriate
- Optimize streaming to reduce latency
- Implement request queuing if needed
- Monitor and log performance metrics
- Consider implementing request debouncing for rapid user inputs

**Dependencies:**
- Backend `requirements.txt`:
  - `pydantic-ai>=0.0.1`
  - `fastapi>=0.104.0`
  - `uvicorn[standard]>=0.24.0`
  - `python-dotenv>=1.0.0`
  - `pydantic>=2.0.0`
  - `httpx>=0.25.0` (for API clients)
  - `google-auth>=2.23.0`
  - `google-api-python-client>=2.100.0`
  - `pytest>=7.4.0` (dev)
  - `pytest-asyncio>=0.21.0` (dev)
- Frontend `package.json`:
  - `next>=14.0.0`
  - `react>=18.0.0`
  - `typescript>=5.0.0`
  - `tailwindcss>=3.3.0`
  - `ai>=2.0.0` (Vercel AI SDK)
  - `@types/node`, `@types/react` (dev)

**Documentation Requirements:**
- Create comprehensive README.md with:
  - Project overview and architecture
  - Setup instructions (frontend and backend)
  - Environment variable configuration
  - Gmail OAuth2 setup guide
  - API documentation
  - Development workflow
  - Testing instructions
  - Deployment guide
- Include inline code comments for complex logic
- Document agent prompts and tool descriptions
- Add docstrings to all Python functions (Google style)
- Document TypeScript interfaces and types

**Deployment Considerations:**
- Backend: Deploy FastAPI to services like:
  - Railway, Render, Fly.io, or AWS/GCP
  - Ensure environment variables are set
  - Configure production CORS settings
- Frontend: Deploy Next.js to:
  - Vercel (recommended for Next.js)
  - Or other static hosting services
  - Configure production API URL
- Set up monitoring and logging for production
- Implement health checks for both services
- Consider containerization (Docker) for easier deployment

**Development Workflow:**
- Use virtual environment for Python (`python -m venv venv`)
- Use consistent code formatting:
  - Python: `black` formatter, `ruff` linter
  - TypeScript: Prettier, ESLint
- Set up pre-commit hooks if possible
- Use git for version control with meaningful commit messages
- Document any gotchas or common issues encountered during development