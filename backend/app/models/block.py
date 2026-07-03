from sqlalchemy import Column, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship

from app.database.database import Base


class Block(Base):
    __tablename__ = "blocks"

    id = Column(Integer, primary_key=True, index=True)

    chapter_id = Column(
        Integer,
        ForeignKey("chapters.id"),
        nullable=False,
    )

    type = Column(String, nullable=False)

    title = Column(String)

    content = Column(Text, nullable=False)

    sort_order = Column(Integer, nullable=False)

    chapter = relationship(
        "Chapter",
        back_populates="blocks",
    )