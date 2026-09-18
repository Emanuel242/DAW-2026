const categoryLinks = document.querySelectorAll('nav a');
const selectedCategory = document.querySelector('#selected-category');
const itemCount = document.querySelector('#item-count');
const products = document.querySelectorAll('.product');

categoryLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const categoryName = event.currentTarget.dataset.category;

        // Ativa o botão clicado
        categoryLinks.forEach((l) => l.classList.remove('active'));
        event.currentTarget.classList.add('active');

        // Atualiza o nome da categoria
        selectedCategory.textContent = categoryName;

        // Filtra os produtos
        let visibleCount = 0;

        products.forEach((product) => {
            const productCategory = product.dataset.category;

            if (categoryName === 'Todos' || productCategory === categoryName) {
                product.style.display = '';
                visibleCount++;
            } else {
                product.style.display = 'none';
            }
        });

        // Atualiza a contagem
        itemCount.textContent = visibleCount;
    });
});