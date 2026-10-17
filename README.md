# Reality RPG ⚔️
**Turn real life into an RPG.** A Flask + SQLite web app for quests, XP, levels, attributes, activity evidence, mindset, and developer progress.

## Features
- Dark navy + violet glass-style responsive theme with animated XP bars (single consolidated stylesheet).
- First-run email/password account setup and login; passwords are hashed.
- Change login email/password in Settings after confirming the current password; logout included.
- Quest board with XP rewards and attributes: Coding, Strength, Discipline, Knowledge, Mental Health, Self Building, and Daily Chores.
- Level and XP progress calculated from completed quests.
- Add custom quests and remove unfinished ones.
- Evidence logs for study sessions, workouts, quiz scores, and GitHub public push events.
- Daily motivational thought system with personal thought library, favorites, archive, and mental-reset rotation.
- Coding Practice Tracker: log language, problem, topic, time, independent-solve status, notes, and code without requiring GitHub commits.
- Local Code Vault with downloadable saved solutions plus coding analytics (practice count, minutes, languages, and 7-day activity).
- Evidence-based quests: study/workout/quiz/coding quests are completed by matching activity records instead of a simple click.
- GitHub sync checks recent public account events. Optional token can help with API rate limits.
- SQLite database is created automatically on first launch.

## Run on Windows (PowerShell)
1. Install Python 3.11+.
2. Extract the ZIP and open the `Reality-RPG` folder in VS Code.
3. Open Terminal in that folder and run:

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe app.py
```

4. Open http://127.0.0.1:5000

If PowerShell blocks virtual-environment activation, use the explicit `.venv\Scripts\python.exe` commands above. You do not need to activate the environment.

## Account setup
- First launch opens `/setup`; create an account with your email and a password of at least 8 characters.
- Later visits require login. Update email/password in Settings; current password is required for account changes.
- This starter supports one local account. Keep the database private. Public deployment needs CSRF protection, rate limiting, HTTPS, and a strong environment-based secret key.

## How XP works
- Manual quests can be completed from the quest card.
- Evidence quest types (`study`, `workout`, `quiz`, `coding`) are completed by submitting a matching record.
- Quiz quests require a score of at least 70%.
- One evidence event completes at most one waiting quest of the matching type, avoiding bulk XP farming.
- GitHub sync uses the most recent public push event found in the latest 30 public events. This is evidence of a push event, not a guarantee that every commit represents meaningful work.

## GitHub setup
1. In Settings, enter your GitHub username.
2. Click **Sync GitHub evidence**.
3. Optional: create a fine-grained or classic token with the minimum permissions needed for your own use. Store it only on your own computer; do not share it or commit the database/token to GitHub.
4. This version checks public user events. It does not yet validate private repositories, pull-request reviews, calendar events, or third-party workout apps.

The token is stored locally in `reality_rpg.db` in this starter version. Keep the database private and do not deploy this build for multiple users without moving secrets to environment variables and adding authentication.

## Project structure
```text
Reality-RPG/
├── app.py
├── requirements.txt
├── templates/
│   └── index.html
├── static/
│   ├── css/style.css
│   └── js/app.js
├── .env.example
├── .gitignore
├── Procfile
├── runtime.txt
└── README.md
```

## Next upgrades
- Login / multiple player profiles
- Streaks and achievements
- Calendar integration
- Real study timer with anti-cheat safeguards
- Private repository integration and verified commit quality signals
- Exportable character sheet and backup/restore

## Security note
This is a local-first learning project. Before public deployment, add authentication, CSRF protection, secure secret storage, rate limiting, and a proper production database configuration. Do not expose personal GitHub tokens.


## Render deployment

This version uses PostgreSQL in production and Gunicorn as the Render web server. Configure these Render environment variables:

- `SECRET_KEY` — a long random secret used for Flask sessions.
- `DATABASE_URL` — the internal PostgreSQL connection string from your Render PostgreSQL database.
- `GITHUB_TOKEN` — a GitHub personal access token used for authenticated repository/commit sync.

Do not commit real secrets to GitHub. The application no longer stores the GitHub token in the database.
