export function Nav() {
    return (
        <nav>
            <div>
                <ul className="container">
                    <li><a href="#" className="active" data-category="Todos">Todos</a></li>
                    <li><a href="#" data-category="Lanches">Lanches</a></li>
                    <li><a href="#" data-category="Porções">Porções</a></li>
                    <li><a href="#" data-category="Bebidas">Bebidas</a></li>
                    <li><a href="#" data-category="Sobremesas">Sobremesas</a></li>
                </ul>
            </div>
        </nav>
    );
}