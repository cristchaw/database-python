from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.product import Product


def get_dashboard(db: Session):
    total_products = db.query(
        func.count(Product.id)
    ).scalar()

    total_stock = db.query(
        func.sum(Product.stock)
    ).scalar()

    inventory_value = db.query(
        func.sum(Product.stock * Product.price)
    ).scalar()

    return {
        "total_products": total_products or 0,
        "total_stock": total_stock or 0,
        "inventory_value": inventory_value or 0,
    }