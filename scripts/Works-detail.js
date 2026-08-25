// 0. 햄버거 메뉴 기능
const menuBtn = document.querySelector('.menu-toggle-btn');
const navList = document.querySelector('.nav-list');
menuBtn.addEventListener('click', () => {
    navList.classList.toggle('is-active');
});

// 1. URL에서 id 파라미터 추출
const urlParams = new URLSearchParams(window.location.search);
const workId = parseInt(urlParams.get('id'));

// 2. data.js에 있는 통합 데이터(globalWorksData)에서 해당 작품 찾기
const targetWork = globalWorksData.find(work => work.id === workId);

// 3. 화면에 데이터 렌더링
if (targetWork) {
  // 1️⃣ 작품 기본 정보 매핑
  // 💡 [안전장치] 카테고리가 ["VR", "게임"] 처럼 배열일 수 있으니 쉼표로 연결해줍니다.
  const categoryText = Array.isArray(targetWork.category) ? targetWork.category.join(', ') : targetWork.category;
  
  document.querySelector('.project-category').textContent = categoryText;
  document.querySelector('.project-title').textContent = targetWork.title;
  const descKoEl = document.querySelector('.project-desc-ko');
if(descKoEl) descKoEl.textContent = targetWork.descKo || "";

const descEnEl = document.querySelector('.project-desc-en');
if(descEnEl) descEnEl.textContent = targetWork.descEn || "";

  // 2️⃣ 하단: Designers 프로필 상세 리스트 렌더링
  const teamList = document.querySelector('.team-list');
  if (teamList) {
    teamList.innerHTML = '';

    // 🎯 [핵심 수정!] targetWork.team 대신 targetWork.teamIds를 꺼냅니다!
    targetWork.teamIds.forEach(studentId => {
      // designersData 창고에서 아이디표(studentId)가 일치하는 학생을 찾아옵니다.
      const member = designersData.find(designer => designer.studentId === studentId);

      // 학생을 성공적으로 찾았다면 HTML을 그려줍니다.
      if (member) {
        teamList.innerHTML += `
          <li class="team-member">
            <div class="member-info">
              <div class="member-name-group">
                <span class="name-ko">${member.nameKo}</span>
                <span class="name-en">${member.nameEn}</span>
              </div>
              <span class="member-id">${member.snsLink}</span>
              <span class="member-email">${member.email}</span>
            </div>
          </li>
        `;
      }
    });
  }

  // 3️⃣ 우측: 작품 이미지 리스트 렌더링 (기존과 100% 동일)
  const mediaSide = document.querySelector('.detail-media-side');
  if (mediaSide) {
    mediaSide.innerHTML = '';
    targetWork.images.forEach(imgUrl => {
      mediaSide.innerHTML += `
        <div class="image-box">
          <img src="${imgUrl}" alt="${targetWork.title} 이미지">
        </div>
      `;
    });
  }
}