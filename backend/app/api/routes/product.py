from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.product import ProductCreate
from app.schemas.product import ProductUpdate
from app.schemas.product import ProductResponse

from app.services import product_service

from typing import Optional

router = APIRouter(
    prefix="/products",
    tags=["Products"],
)

from typing import Optional

@router.get(
    "/",
    response_model=list[ProductResponse],
)
def get_products(
    search: Optional[str] = None,
    db: Session = Depends(get_db),
):
    return product_service.get_products(
        db,
        search,
    )

@router.post(
    "/",
    response_model=ProductResponse,
)
def create_product(
    product: ProductCreate,
    db: Session = Depends(get_db),
):
    return product_service.create_product(
        db,
        product,
    )


@router.put(
    "/{product_id}",
    response_model=ProductResponse,
)
def update_product(
    product_id: int,
    product: ProductUpdate,
    db: Session = Depends(get_db),
):
    result = product_service.update_product(
        db,
        product_id,
        product,
    )

    if result is None:
        raise HTTPException(
            status_code=404,
            detail="Product not found",
        )

    return result


@router.delete(
    "/{product_id}",
)
def delete_product(
    product_id: int,
    db: Session = Depends(get_db),
):
    result = product_service.delete_product(
        db,
        product_id,
    )

    if result is None:
        raise HTTPException(
            status_code=404,
            detail="Product not found",
        )

    return {
        "message": "Product deleted successfully"
    }