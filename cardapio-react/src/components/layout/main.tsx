import type { Product } from "../../cases/products/dtos/product"
import { ProductCard } from "../../cases/products/components/product-card"

export function Main() {
  const products: Product[] = []

  return (
    <main>
      <section>
        <header>
          <h2>Produtos</h2>
          <div className="header-info">
            <p>
              Categoria: <span>Todos</span> — <span>{products.length}</span> itens
            </p>
          </div>
        </header>

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <aside>
        <h2>Seu Pedido</h2>
        <div className="cart-empty">
          <img src="/assets/img/cart.svg" alt="Carrinho" />
          <p>Seu carrinho está vazio</p>
          <p>Escolha um item do cardápio para começar</p>
        </div>
      </aside>
    </main>
  )
}