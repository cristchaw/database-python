from pydantic import BaseModel

from app.schemas.block import BlockResponse


class ChapterBase(BaseModel):
    title: str
    icon: str
    order_number: int


class ChapterCreate(ChapterBase):
    pass


class ChapterResponse(ChapterBase):
    id: int

    blocks: list[BlockResponse] = []

    class Config:
        from_attributes = True