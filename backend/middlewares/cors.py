from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:5050",
    "http://localhost:8000",
    "https://quivr.app",
    "https://www.quivr.app",
    "http://quivr.app",
    "http://www.quivr.app",
    "http://wildcatgpt.com",
    "http://www.wildcatgpt.com",
    "https://wildcatgpt.com",
    "https://www.wildcatgpt.com",
    "*",
]


def add_cors_middleware(app):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
