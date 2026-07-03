from app.database.database import Base, SessionLocal, engine

from app.models.chapter import Chapter
from app.models.block import Block
from app.models.product import Product

from seeds.course_data import COURSE

Base.metadata.create_all(bind=engine)

db = SessionLocal()

# Clear existing data
db.query(Block).delete()
db.query(Chapter).delete()
db.query(Product).delete()
db.commit()

# Seed chapters & blocks
for chapter_data in COURSE:
    blocks = chapter_data["blocks"]

    chapter = Chapter(
        title=chapter_data["title"],
        icon=chapter_data["icon"],
        order_number=chapter_data["order_number"],
    )

    db.add(chapter)
    db.commit()
    db.refresh(chapter)

    for block in blocks:
        db.add(
            Block(
                chapter_id=chapter.id,
                **block,
            )
        )

db.commit()

# Seed products
products = [
    Product(
        name="Keyboard",
        stock=20,
        price=50000,
    ),
    Product(
        name="Mouse",
        stock=35,
        price=30000,
    ),
    Product(
        name="Monitor",
        stock=10,
        price=1800000,
    ),
    Product(
        name="SSD 512GB",
        stock=18,
        price=900000,
    ),
]

db.add_all(products)
db.commit()

db.close()

print("Database seeded successfully 🚀")