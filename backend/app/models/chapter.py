from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.database.database import Base


class Chapter(Base):
    __tablename__ = "chapters"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String, nullable=False)

    icon = Column(String, nullable=False)

    order_number = Column(Integer, nullable=False)

    blocks = relationship(
        "Block",
        back_populates="chapter",
        cascade="all, delete-orphan",
        order_by="Block.sort_order",
    )