// 1. 햄버거 메뉴 기능
const menuBtn = document.querySelector('.menu-toggle-btn');
const navList = document.querySelector('.nav-list');
menuBtn.addEventListener('click', () => {
    navList.classList.toggle('is-active');
});

// 2. 작품 리스트 데이터
const worksData = globalWorksData;

// 🎲 새로고침 할 때마다 순서 랜덤으로 섞기!
worksData.sort(() => Math.random() - 0.5);


// 3. HTML 요소 찾기 (중복 선언 제거 완료!)
const grid = document.querySelector('.works-grid');
const categoryButtons = document.querySelectorAll('.category-item');


// 4. 작품 데이터를 화면에 그려주는 '마법의 함수'
function filterWorks(filter) {
  // ① 일단 바구니(그리드)를 싹 비웁니다.
  grid.innerHTML = ''; 

  // ② 전체(all)면 보따리 전체를, 아니면 선택한 카테고리만 골라냅니다.
  // (category가 배열일 경우 includes가 완벽하게 작동합니다!)
  const filteredData = filter === 'all' 
    ? worksData 
    : worksData.filter(work => work.category.includes(filter));

  // ③ 골라낸 데이터들을 HTML로 만들어서 바구니에 차곡차곡 넣습니다.
  filteredData.forEach(work => {
    
    // 🎯 [핵심 수정!] teamIds를 이용해 designersData 창고에서 학생 이름 찾아오기!
    const authorsString = work.teamIds.map(id => {
      // designersData에서 studentId가 일치하는 학생을 찾습니다.
      const student = designersData.find(designer => designer.studentId === id);
      return student ? student.nameKo : "이름 없음"; // 혹시 아이디를 잘못 적었을 경우를 대비한 안전장치
    }).join(', ');
    
    grid.innerHTML += `
      <a href="Detail.html?id=${work.id}" class="work-card" data-category="${work.category}">
        <div class="card-image">
          <img src="https://via.placeholder.com/600x400?text=Work+${work.id}" alt="썸네일"> 
        </div>
        <div class="card-info">
          <h3 class="title">${work.title}</h3>
          <p class="author">${authorsString}</p> 
        </div>
      </a>
    `;
  });
}


// 5. 카테고리 버튼 '클릭 감시자' 달아주기
categoryButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // 링크 클릭 시 위로 튕겨 올라가는 현상 방지

    // 모든 버튼에서 'active' 이름표를 뺏고, 클릭한 애한테만 줍니다!
    categoryButtons.forEach(btn => {
      btn.classList.remove('active'); 
    });
    button.classList.add('active'); // 클릭한 카테고리 블루 컬러 고정!

    // 어떤 카테고리인지 알아내서 화면 다시 그리기
    const filter = button.getAttribute('data-filter');
    filterWorks(filter); 
  });
});


// 6. 🚀 페이지 처음 들어왔을 때 기본 세팅! (전체 데이터 뿌리기)
filterWorks('all');