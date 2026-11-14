import type { Product } from "../dtos/product"

type ProductCardProps = {
    product?: Product
}

export function ProductCard({ product }: ProductCardProps) {
    if (!product) return null

    const price = Number(product.price) || 0

    return (
        <article>
            <figure>
                <img src={product.image} alt={product.name} />
                <figcaption>{product.category}</figcaption>
            </figure>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>R$ {price.toFixed(2)}</p>
            <button type="button">Adicionar</button>
        </article>
    )
}