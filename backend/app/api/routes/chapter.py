from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.chapter import (
    ChapterCreate,
    ChapterResponse,
)

from app.services import chapter_service

router = APIRouter(
    prefix="/chapters",
    tags=["Chapters"],
)


@router.get(
    "/",
    response_model=list[ChapterResponse],
)
def get_chapters(db: Session = Depends(get_db)):
    return chapter_service.get_all(db)


@router.post(
    "/",
    response_model=ChapterResponse,
)
def create_chapter(
    chapter: ChapterCreate,
    db: Session = Depends(get_db),
):
    return chapter_service.create(db, chapter)