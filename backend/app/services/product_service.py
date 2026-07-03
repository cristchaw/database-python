from sqlalchemy.orm import Session

from app.models.product import Product
from app.schemas.product import ProductCreate
from app.schemas.product import ProductUpdate


def get_products(
    db: Session,
    search: str | None = None,
):
    query = db.query(Product)

    if search:
        query = query.filter(
            Product.name.ilike(f"%{search}%")
        )

    return query.all()


def get_product(
    db: Session,
    product_id: int,
):
    return (
        db.query(Product)
        .filter(Product.id == product_id)
        .first()
    )


def create_product(
    db: Session,
    product: ProductCreate,
):
    new_product = Product(
        name=product.name,
        stock=product.stock,
        price=product.price,
    )

    db.add(new_product)
    db.commit()
    db.refresh(new_product)

    return new_product


def update_product(
    db: Session,
    product_id: int,
    product: ProductUpdate,
):
    db_product = get_product(
        db,
        product_id,
    )

    if not db_product:
        return None

    db_product.name = product.name
    db_product.stock = product.stock
    db_product.price = product.price

    db.commit()
    db.refresh(db_product)

    return db_product


def delete_product(
    db: Session,
    product_id: int,
):
    db_product = get_product(
        db,
        product_id,
    )

    if not db_product:
        return None

    db.delete(db_product)
    db.commit()

    return db_product
