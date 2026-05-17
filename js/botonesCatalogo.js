document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los botones de filtro y todos los productos
    const filterBtns = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que la página salte hacia arriba al hacer clic en el enlace "#"

            // 1. Quitar estilos de "activo" a TODOS los botones
            filterBtns.forEach(b => {
                b.classList.remove('active', 'text-white');
                b.classList.add('text-muted', 'border');
                b.style.backgroundColor = ''; // Limpiamos el color de fondo
            });

            // 2. Agregar estilos de "activo" SOLO al botón que se le hizo clic
            this.classList.add('active', 'text-white');
            this.classList.remove('text-muted', 'border');
            this.style.backgroundColor = '#5D4037'; // Tu color café

            // 3. Filtrar los productos
            const filterValue = this.getAttribute('data-filter');

            products.forEach(product => {
                // Si el filtro es "todo" o la categoría del producto coincide con el filtro, lo mostramos
                if (filterValue === 'todo' || product.getAttribute('data-category') === filterValue) {
                    product.style.display = 'block'; // Oculto el producto
                    // Nota: Si usas clases flexbox de Bootstrap en la tarjeta (ej. d-flex), 
                    // cámbialo a product.style.display = 'flex'; o lo que corresponda a tu maquetación.
                } else {
                    // Si no coincide, lo ocultamos
                    product.style.display = 'none';
                }
            });
        });
    });
});