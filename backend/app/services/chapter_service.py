from sqlalchemy.orm import Session, joinedload

from app.models.chapter import Chapter


def get_all(db: Session):
    return (
        db.query(Chapter)
        .options(joinedload(Chapter.blocks))
        .order_by(Chapter.order_number)
        .all()
    )


def create(db: Session, chapter):
    new_chapter = Chapter(**chapter.model_dump())

    db.add(new_chapter)

    db.commit()

    db.refresh(new_chapter)

    return new_chapter