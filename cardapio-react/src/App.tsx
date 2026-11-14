import { useState } from "react"
import { Header } from "./components/layout/header"
import { Footer } from "./components/layout/footer"
import { NavigationBar } from "./components/layout/nav"
import { categories } from "./data/categories"
import { ProductCard } from "./cases/products/components/product-card"
import { useProducts } from "./cases/products/hooks/use-product"

function App() {
  const [activeCategory, setActiveCategory] = useState("todos")
  const { products, loading, error } = useProducts()

  const visibleProducts = activeCategory === "todos"
    ? products
    : products.filter((product) => product.category.toLowerCase() === activeCategory.toLowerCase()
    )

  function handleSelectCategory(alias: string) {
    setActiveCategory(alias)
  }

  return (
    <>
      <Header />
      <NavigationBar
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      <main>
        <section>
          <header>
            <h2>Produtos</h2>
            <p>
              Categoria: <span>{activeCategory}</span> — <span>{visibleProducts.length}</span> itens
            </p>
          </header>

          {loading && <p className="panel-loading">Carregando produtos...</p>}

          {error && <p className="panel-error">Erro ao carregar produtos: {error}</p>}

          {visibleProducts.map((product) => (
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

      <Footer />
    </>
  )
}

export default App
