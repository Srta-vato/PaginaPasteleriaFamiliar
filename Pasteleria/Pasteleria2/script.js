(() => {
  const products = [
    { name: 'Torta de chocolate', category: 'tortas', description: 'Bizcocho de cacao con relleno y ganache oscuro.', photo: 'chocolate' },
    { name: 'Vainilla con fresas', category: 'tortas', description: 'Bizcocho suave, chantilly y fresas frescas.', photo: 'fresas' },
    { name: 'Tres leches', category: 'tortas', description: 'Bizcocho bañado en tres leches y canela.', photo: 'pasteles' },
    { name: 'Torta de zanahoria', category: 'tortas', description: 'Zanahoria, nueces y frosting de queso crema.', photo: 'pasteles' },
    { name: 'Torta personalizada', category: 'tortas', description: 'Cuéntanos tu idea y revisamos qué podemos preparar.', photo: 'fresas' },
    { name: 'Chips de chocolate', category: 'galletas', description: 'Borde dorado, centro suave y trozos de chocolate.', photo: 'galletas' },
    { name: 'Avena y canela', category: 'galletas', description: 'Avena, canela y un toque de miel.', photo: 'galletas' },
    { name: 'Polvorosas', category: 'galletas', description: 'De mantequilla y azúcar glas, delicadas y suaves.', photo: 'galletas' },
    { name: 'Alfajores', category: 'galletas', description: 'Maicena, arequipe y coco rallado.', photo: 'galletas' },
    { name: 'Brownies', category: 'postres', description: 'Cacao intenso, corteza fina y centro denso.', photo: 'brownies' },
    { name: 'Oreo en vaso', category: 'postres', description: 'Capas de crema, Oreo y salsa de chocolate.', photo: 'mousse' },
    { name: 'Mousse de maracuyá', category: 'postres', description: 'Suave, aireado y con el punto ácido de la fruta.', photo: 'mousse' },
    { name: 'Pie de limón', category: 'postres', description: 'Base de galleta, relleno cítrico y merengue.', photo: 'pasteles' }
  ];

  const photos = {
    chocolate: 'https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=900',
    fresas: 'https://images.pexels.com/photos/37262556/pexels-photo-37262556/free-photo-of-delicious-strawberry-cake-with-fresh-berries.jpeg?auto=compress&cs=tinysrgb&w=900',
    galletas: 'https://images.pexels.com/photos/11127418/pexels-photo-11127418.jpeg?auto=compress&cs=tinysrgb&w=900',
    brownies: 'https://images.pexels.com/photos/36500587/pexels-photo-36500587/free-photo-of-delicious-chocolate-brownies-on-plate.jpeg?auto=compress&cs=tinysrgb&w=900',
    mousse: 'https://images.pexels.com/photos/27525473/pexels-photo-27525473/free-photo-of-a-dessert-with-a-red-and-white-striped-top.jpeg?auto=compress&cs=tinysrgb&w=900',
    pasteles: 'https://images.pexels.com/photos/31332192/pexels-photo-31332192/free-photo-of-assorted-pastry-display-in-bakery-showcase.jpeg?auto=compress&cs=tinysrgb&w=900'
  };

  const grid = document.getElementById('products');
  const whatsapp = '573332558193';

  grid.innerHTML = products.map(product => {
    const message = encodeURIComponent(`Hola, quiero consultar por ${product.name}. ¿Me confirman presentación, disponibilidad y precio?`);
    return `
      <article class="product-card" data-category="${product.category}">
        <a class="product-image" href="${photos[product.photo]}" target="_blank" rel="noopener" aria-label="Ver fotografía ilustrativa de ${product.name}">
          <img src="${photos[product.photo]}" alt="Fotografía ilustrativa de referencia para ${product.name}" loading="lazy">
          <span class="product-tag">${product.category.toUpperCase()}</span>
        </a>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a class="product-link" href="https://wa.me/${whatsapp}?text=${message}" target="_blank" rel="noopener">Consultar ↗</a>
      </article>`;
  }).join('');

  document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(filter => {
        const selected = filter === button;
        filter.classList.toggle('active', selected);
        filter.setAttribute('aria-pressed', String(selected));
      });
      grid.querySelectorAll('.product-card').forEach(card => {
        card.hidden = button.dataset.kind !== 'todos' && card.dataset.category !== button.dataset.kind;
      });
    });
  });
})();
