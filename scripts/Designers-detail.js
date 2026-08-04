// 0. 햄버거 메뉴 기능
const menuBtn = document.querySelector('.menu-toggle-btn');
const navList = document.querySelector('.nav-list');
if(menuBtn) {
  menuBtn.addEventListener('click', () => {
      navList.classList.toggle('is-active');
  });
}

// 1. URL에서 id 파라미터 추출
const urlParams = new URLSearchParams(window.location.search);
const targetId = urlParams.get('id');

// 2. data.js에 있는 학생 창고(designersData)에서 해당 학생 찾기
const targetDesigner = designersData.find(designer => designer.studentId === targetId);

// 3. 화면에 데이터 렌더링
if (targetDesigner) {
  // 1️⃣ 프로필 이미지 렌더링
  const profileImg = document.getElementById('designerProfileImg');
  if (profileImg) {
    profileImg.src = targetDesigner.img || "";
    profileImg.alt = `${targetDesigner.nameKo} 프로필`;
  }

  // 2️⃣ 이름 렌더링
  const nameKoEl = document.getElementById('designerNameKo');
  if(nameKoEl) nameKoEl.textContent = targetDesigner.nameKo || "";

  const nameEnEl = document.getElementById('designerNameEn');
  if(nameEnEl) nameEnEl.textContent = targetDesigner.nameEn || "";

  // 3️⃣ 🎯 [핵심] SNS & EMAIL 스마트 숨김/노출 로직
  const snsEl = document.getElementById('designerSns');
  if (snsEl) {
    if (targetDesigner.snsLink && targetDesigner.snsLink.trim() !== "") {
      snsEl.textContent = targetDesigner.snsLink;
      snsEl.style.display = "block"; // 데이터가 있으면 정상 노출
    } else {
      snsEl.textContent = "";
      snsEl.style.display = "none"; // 데이터가 없으면 아예 안 보이게 숨김!
    }
  }

  const emailEl = document.getElementById('designerEmail');
  if (emailEl) {
    if (targetDesigner.email && targetDesigner.email.trim() !== "") {
      emailEl.textContent = targetDesigner.email;
      emailEl.style.display = "block"; // 데이터가 있으면 정상 노출
    } else {
      emailEl.textContent = "";
      emailEl.style.display = "none"; // 데이터가 없으면 아예 안 보이게 숨김!
    }
  }

  // 5️⃣ [하단 방] 이 디자이너가 참여한 프로젝트 리스트 렌더링
  const worksGrid = document.getElementById('designerWorksGrid');
  if (worksGrid) {
    worksGrid.innerHTML = '';

    const participatedWorks = globalWorksData.filter(work => work.teamIds.includes(targetId));
    const limitedWorks = participatedWorks.slice(0, 3);

    limitedWorks.forEach(work => {
      // 💡 [여기가 핵심 추가 로직!] 이 작품에 참여한 학생 이름 찾기
      // data.js에 적힌 이름(designer나 author)이 있으면 쓰고, 
      // 없으면 teamIds에 적힌 아이디를 바탕으로 학생 창고에서 이름을 자동으로 찾아옵니다!
      let designerNames = work.designer || work.author || "";
      if (!designerNames && work.teamIds) {
        designerNames = work.teamIds
          .map(id => {
            const found = designersData.find(d => d.studentId === id);
            return found ? found.nameKo : "";
          })
          .filter(Boolean)
          .join(", "); // 팀원이 여러 명이면 쉼표(,)로 연결
      }

      // 🎯 [HTML 생성 부분 수정] 카드 안에 <p class="mini-designer"> 한 줄을 추가했습니다!
      worksGrid.innerHTML += `
        <a href="../Works/Detail.html?id=${work.id}" class="mini-work-card">
          <div class="mini-thumbnail">
            <img src="${work.thumbnail}" alt="${work.title} 썸네일">
          </div>
          <h3 class="mini-title">${work.title}</h3>
          <p class="mini-designer">${designerNames}</p> 
        </a>
      `;
    });
  }
} else {
  alert("존재하지 않는 디자이너입니다.");
  window.history.back();
}