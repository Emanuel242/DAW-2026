import { api } from "../../../lib/axios"
import type { Product } from "../dtos/product"

const ENDPOINT = "/products?key=e088a160"

function normalizeProduct(product: Partial<Product> & { price?: string | number }): Product {
    return {
        id: Number(product.id) || 0,
        name: String(product.name ?? "").trim(),
        description: String(product.description ?? "").trim(),
        price: Number(product.price) || 0,
        category: String(product.category ?? "geral").trim().toLowerCase(),
        image: String(product.image ?? "").trim(),
    }
}

export const productService = {
    async listAll(): Promise<Product[]> {
        try {
            const result = await api.get<Array<Partial<Product> & { price?: string | number }>>(ENDPOINT)
            return Array.isArray(result.data) ? result.data.map(normalizeProduct) : []
        } catch {
            return []
        }
    },
}
