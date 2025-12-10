const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];

const gallery = document.getElementById('gallery');

images.forEach((src) => {
  const item = document.createElement('div');
  item.classList.add('gallery-item');

  const img = document.createElement('img');
  img.src = `gallery/${src}`;

  item.appendChild(img);
  gallery.appendChild(item);

  item.addEventListener('click', () => {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').style.display = 'flex';
  });
});

// 라이트박스 닫기
document.getElementById('lightbox').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});
