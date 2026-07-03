from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import Base, engine

# Import models supaya SQLAlchemy membuat tabel
from app.models.product import Product
from app.models.chapter import Chapter
from app.models.block import Block

# Import routers
from app.api.routes.product import router as product_router
from app.api.routes.chapter import router as chapter_router
from app.api.routes.block import router as block_router
from app.api.routes.dashboard import router as dashboard_router

# Aplikasi FastAPI
app = FastAPI(
    title="DBVerse API",
    version="1.0.0",
)

# Middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# All tabel
Base.metadata.create_all(bind=engine)

# Register routers
app.include_router(product_router)
app.include_router(chapter_router)
app.include_router(block_router)
app.include_router(dashboard_router)


@app.get("/")
def root():
    return {
        "message": "DBVerse Backend Running 🚀"
    }