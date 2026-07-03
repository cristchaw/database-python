from pydantic import BaseModel


class DashboardResponse(BaseModel):
    total_products: int
    total_stock: int
    inventory_value: float