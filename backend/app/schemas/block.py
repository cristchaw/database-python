from pydantic import BaseModel


class BlockBase(BaseModel):
    chapter_id: int
    type: str
    title: str | None = None
    content: str
    sort_order: int


class BlockCreate(BlockBase):
    pass


class BlockResponse(BlockBase):
    id: int

    class Config:
        from_attributes = True