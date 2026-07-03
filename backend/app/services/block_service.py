from sqlalchemy.orm import Session, joinedload

from app.models.block import Block


def get_all(db: Session):
    return (
        db.query(Block)
        .order_by(Block.sort_order)
        .all()
    )


def create(db: Session, block):
    new_block = Block(**block.model_dump())

    db.add(new_block)

    db.commit()

    db.refresh(new_block)

    return new_block