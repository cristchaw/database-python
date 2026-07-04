from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import Base, engine, DATABASE_URL

import app.models

from app.api.routes.product import router as product_router
from app.api.routes.chapter import router as chapter_router
from app.api.routes.block import router as block_router
from app.api.routes.dashboard import router as dashboard_router

print("=" * 80)
print("🚀 DBVERSE BACKEND VERSION 4")
print("DATABASE_URL:")

if DATABASE_URL:
    print(
        DATABASE_URL.replace(
            DATABASE_URL.split(":")[2].split("@")[0],
            "********"
        )
    )
else:
    print("DATABASE_URL NOT FOUND!")

print("=" * 80)

app = FastAPI(
    title="DBVerse API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        # Tambahkan domain frontend nanti
        # "https://your-frontend.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup():
    print("✅ FastAPI Startup")
    print("✅ Loading SQLAlchemy Metadata")
    print("Tables:", list(Base.metadata.tables.keys()))

    Base.metadata.create_all(bind=engine)

    print("✅ Database Connected")


app.include_router(product_router)
app.include_router(chapter_router)
app.include_router(block_router)
app.include_router(dashboard_router)


@app.get("/")
def root():
    return {
        "message": "DBVerse Backend Running 🚀",
        "version": "1.0.0",
    }