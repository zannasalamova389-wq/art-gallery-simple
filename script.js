// Список картинок — все 31 файл
const arts = [
  'art1.jpg', 'art2.jpg', 'art3.jpg', 'art4.jpg', 'art5.jpg',
  'art6.jpg', 'art7.jpg', 'art8.jpg', 'art9.jpg', 'art10.jpg',
  'art11.jpg', 'art12.jpg', 'art13.jpg', 'art14.jpg', 'art15.jpg',
  'art16.jpg', 'art17.jpg', 'art18.jpg', 'art19.jpg', 'art20.jpg',
  'art21.jpg', 'art22.jpg', 'art23.jpg', 'art24.jpg', 'art25.jpg',
  'art26.jpg', 'art27.jpg', 'art28.jpg', 'art29.jpg', 'art30.jpg',
  'art31.jpg'
];

// Находим галерею и модальное окно
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close-btn');

// Создаём карточки для каждой картинки
arts.forEach(function(file, index) {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = 'images/' + file;
  img.alt = 'Рисунок ' + (index + 1);

  const caption = document.createElement('p');
  caption.textContent = 'Рисунок ' + (index + 1);

  card.appendChild(img);
  card.appendChild(caption);

  // Клик по карточке — открыть модальное окно
  card.addEventListener('click', function() {
    modalImg.src = 'images/' + file;
    modalImg.alt = 'Рисунок ' + (index + 1);
    modal.classList.add('active');
  });

  gallery.appendChild(card);
});

// Кнопка «Закрыть»
closeBtn.addEventListener('click', function() {
  modal.classList.remove('active');
});

// Клик по фону — тоже закрыть
modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});