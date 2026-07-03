from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.block import (
    BlockCreate,
    BlockResponse,
)

from app.services import block_service

router = APIRouter(
    prefix="/blocks",
    tags=["Blocks"],
)


@router.get(
    "/",
    response_model=list[BlockResponse],
)
def get_blocks(db: Session = Depends(get_db)):
    return block_service.get_all(db)


@router.post(
    "/",
    response_model=BlockResponse,
)
def create_block(
    block: BlockCreate,
    db: Session = Depends(get_db),
):
    return block_service.create(db, block)