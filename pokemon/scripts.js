const progressX = document.getElementById('progressX');
const btnPokemon = document.getElementById('btn-pokemon');

btnPokemon.addEventListener('click', async () => {
    // 1. สุ่มโปเกมอน
    const randomPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 800) + 1}`);
    const randomData = await randomPokemon.json();

    // 2. สร้างกล่องการ์ด
    const newCard = document.createElement('div');
    newCard.classList.add('pokemon-card'); // ใส่คลาส CSS เพื่อจัดหน้าตาการ์ด

    // 3. สร้างรูปภาพจากข้อมูลที่สุ่มได้
    const randomImg = document.createElement('img');
    randomImg.src = randomData.sprites.front_default;
    newCard.append(randomImg);

    // 4. สร้างข้อความชื่อโปเกมอน
    const p = document.createElement('p');
    p.innerHTML = randomData.name;
    newCard.append(p);

    // 5. นำการ์ดที่เสร็จแล้วไปใส่ไว้ใน progressX บนหน้าเว็บ
    progressX.append(newCard);
});