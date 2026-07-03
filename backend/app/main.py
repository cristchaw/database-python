from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import Base, engine
import app.models  # load semua model

from app.api.routes.product import router as product_router
from app.api.routes.chapter import router as chapter_router
from app.api.routes.block import router as block_router
from app.api.routes.dashboard import router as dashboard_router

app = FastAPI(
    title="DBVerse API",
    version="1.0.0",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# CREATE TABLES hanya sekali saat startup
@app.on_event("startup")
def on_startup():
    Base.metadata.create_all(bind=engine)

# Routers
app.include_router(product_router)
app.include_router(chapter_router)
app.include_router(block_router)
app.include_router(dashboard_router)


@app.get("/")
def root():
    return {
        "message": "DBVerse Backend Running 🚀"
    }