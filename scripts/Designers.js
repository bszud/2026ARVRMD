// 💡 주의: 파일 상단에 데이터를 직접 적지 않습니다! 
// html 파일에서 <script src="data.js">를 먼저 불렀기 때문에 자동으로 창고를 쓸 수 있습니다.

// 1. 페이지가 모두 로드되면 실행되도록 안전장치 걸기
document.addEventListener('DOMContentLoaded', () => {
  
  // 2. HTML에서 우리가 만들어둔 빈 바구니(그리드) 찾아오기
  // (만약 html에 설정한 것이 class라면 document.querySelector('.designers-grid') 로 바꿔주세요!)
  const grid = document.getElementById('designersGrid');

  // 바구니를 잘 찾았다면 실행
  if (grid) {
    grid.innerHTML = ''; // 시작 전 바구니 깨끗하게 비우기

    // 3. 섞기 전 원본 데이터를 건드리지 않기 위해 복사본을 만들고 랜덤으로 섞기(Shuffle)
    const shuffledDesigners = [...designersData].sort(() => Math.random() - 0.5);

    // 4. 섞인 배열을 하나씩 돌면서 HTML 카드로 조립하기
    shuffledDesigners.forEach(designer => {
      
      // 🎯 [핵심] 우리가 통합 data.js에 적어둔 이름표(studentId, img, nameKo, nameEn)를 정확히 사용합니다!
      const cardHTML = `
        <a href="Detail.html?id=${designer.studentId}" class="designer-card">
          <div class="profile-img-box">
            <img src="${designer.img}" alt="${designer.nameKo} 프로필">
          </div>
          <div class="name-kor">${designer.nameKo}</div>
          <div class="name-eng">${designer.nameEn}</div>
        </a>
      `;
      
      // 완성된 카드를 빈 바구니에 차곡차곡 추가하기
      grid.innerHTML += cardHTML;
    });
  }
});