const designersData = [
  { 
    studentId: "s-01", // 상세페이지 연결용 고유 키
    nameKo: "김민재", 
    nameEn: "Kim Minjae",
    snsLink: "", // 기존 id를 snsLink로 변경
    email: "mmanjjae@naver.com",
    img: "../../asset/images/Designers/KimMinjae.jpg"
  },
  { 
    studentId: "s-02", 
    nameKo: "박소연", 
    nameEn: "Park Soyeon",
    snsLink: "@desoxdo",
    email: "soxeonn@naver.com",
    img: "../../asset/images/Designers/ParkSoyeon.JPG"
  },
  { 
    studentId: "s-03", 
    nameKo: "신윤경", 
    nameEn: "Shin Yoonkyung",
    snsLink: "@desertpicnic",
    email: "y8nkyung@naver.com",
    img: "../../asset/images/Designers/ShinYoonkyung.jpeg"
  },
  { 
    studentId: "s-04", 
    nameKo: "이은준", 
    nameEn: "Lee Eunjune",
    snsLink: "",
    email: "love08081108@gmail.com",
    img: "../../asset/images/Designers/LeeEunjune.jpg"
  },
  { 
    studentId: "s-05", 
    nameKo: "최승주", 
    nameEn: "Choi Seungjoo",
    snsLink: "https://www.notion.so/PORTFOLIO-23d136c7ebe38012a0abc4e8cb22be85?source=copy_link", // 기존 id를 snsLink로 변경
    email: "csjo0o3715@gmail.com",
    img: "../../asset/images/Designers/ChoiSeungjoo.jpg"
  },
  { 
    studentId: "s-06",
    nameKo: "전은서", 
    nameEn: "Jeon Eunseo",
    snsLink: "",
    email: "upsaii@naver.com",
    img: "../../asset/images/Designers/JeonEunseo.jpg"
  },
  { 
    studentId: "s-07",
    nameKo: "서다연", 
    nameEn: "Seo Dayeon",
    snsLink: "@allyeon_d",
    email: "dayeon1077@daum.net",
    img: "../../asset/images/Designers/SeoDayeon.JPG"
  },
  {
    studentId: "s-08",
        nameKo: "이준혁", 
        nameEn: "Lee Junhyuk", 
        snsLink: "",
        email: "jh220825@naver.com",
        img: "../../asset/images/Designers/LeeJunhyuk.JPG"
  },
  { 
    studentId: "s-09",
    nameKo: "이예린", 
    nameEn: "Lee Yerin",
    snsLink: "@ooz.works",
    email: "ooz.leeyerin@gmail.com", 
    img: "../../asset/images/Designers/LeeYerin.JPG"
  },
  {
    studentId: "s-10",
        nameKo: "이현", 
        nameEn: "Lee Hyeon", 
        snsLink: "",
        email: "hyeon01150@naver.com",
        img: "../../asset/images/Designers/LeeHyeon.jpg"
  },
  {
    studentId: "s-11",
        nameKo: "최수빈",
        nameEn: "Choi Subin", 
        snsLink: "@subin.works",
        email: "subin7213@naver.com",
        img: "../../asset/images/Designers/ChoiSubin.jpeg"
  },
  {
    studentId: "s-12",
        nameKo: "조희담",
        nameEn: "Cho Heedam", 
        snsLink: "@heedam.cho",
        email: "Heedaam@naver.com",
        img: "../../asset/images/Designers/ChoHeedam.jpg"
  },
  {
    studentId: "s-13",
        nameKo: "정소담",
        nameEn: "Jung Sodam", 
        snsLink: "https://wearesoodummy.notion.site/Portfoilo-bb5311cab4f383f990dd01ac90d0855f",
        email: "wearesoodummy@gmail.com",
        img: "../../asset/images/Designers/JungSodam.jpg"
  },
  {
    studentId: "s-14",
        nameKo: "김태훈",
        nameEn: "Kim Taehun", 
        snsLink: "",
        email: "xognsl420@naver.com",
        img: "../../asset/images/Designers/KimTaehun.jpg"
  },
  {
    studentId: "s-15",
        nameKo: "강혜진",
        nameEn: "Kang Hyejin", 
        snsLink: "",
        email: "rkdgpwls3225@naver.com",
        img: "../../asset/images/Designers/KangHyejin.jpg"
  },
  {
    studentId: "s-16",
        nameKo: "유수지",
        nameEn: "Yu Suji", 
        snsLink: "@_stduio__",
        email: "suji72u@gmail.com",
        img: "../../asset/images/Designers/Yusuji.jpg"
  },
  {
    studentId: "s-17",
        nameKo: "심현빈",
        nameEn: "Sim Hyunbin", 
        snsLink: "@bin7nn",
        email: "simhb0707@gmail.com",
        img: "../../asset/images/Designers/SimHyunbin.jpg"
  },
  {
    studentId: "s-18",
        nameKo: "김규원",
        nameEn: "Kim Kyuwon", 
        snsLink: "https://grave0718.github.io/Portfolio/",
        email: "kyuwon3197@gmail.com",
        img: "../../asset/images/Designers/KimKyuwon.jpg"
  },
  {
    studentId: "s-19",
        nameKo: "홍종표",
        nameEn: "Hong Jongpyo", 
        snsLink: "",
        email: "1434hjp@gmail.com",
        img: "../../asset/images/Designers/HongJongpyo.jpg"
  },
  {
    studentId: "s-20",
        nameKo: "김도호",
        nameEn: "Kim Doho", 
        snsLink: "",
        email: "kimehgh4786@naver.com",
        img: "../../asset/images/Designers/KimDoho.jpg"
  },
   {
    studentId: "s-21",
        nameKo: "김동영",
        nameEn: "Kim DongYeong", 
        snsLink: "https://timehddud01.github.io/KimDongYeong/",
        email: "timehddud@gmail.com",
        img: "../../asset/images/Designers/KimDongyeong.jpg"
  },
  {
    studentId: "s-22",
        nameKo: "이서현",
        nameEn: "Lee Seohyun", 
        snsLink: "@seosign_",
        email: "dltjgus16@naver.com",
        img: "../../asset/images/Designers/LeeSeohyun.jpg"
  },
  {
    studentId: "s-23",
        nameKo: "이영서",
        nameEn: "Lee Yeongseo", 
        snsLink: "@yeoseoeo",
        email: "youngseo0813@naver.com",
        img: "../../asset/images/Designers/LeeYeongseo.jpg"
  },
  {
    studentId: "s-24",
        nameKo: "윤수현",
        nameEn: "Yoon Suhyun", 
        snsLink: "@yoonshoon.works",
        email: "shyoon0226@naver.com",
        img: "../../asset/images/Designers/YoonSuhyun.jpg"
  },
   {
    studentId: "s-25",
        nameKo: "최하린",
        nameEn: "Choi Harin", 
        snsLink: "@harin.choice",
        email: "harinlohoi@gmail.com",
        img: "../../asset/images/Designers/ChioHarin.jpeg"
  },
  {
    studentId: "s-26",
        nameKo: "김규리",
        nameEn: "Kim Gyuri", 
        snsLink: "",
        email: "wfbojs5598@naver.com",
        img: "../../asset/images/Designers/KimGyuri.jpeg"
  },
  {
    studentId: "s-27",
        nameKo: "강다경",
        nameEn: "Kang Dagyeong", 
        snsLink: "@dagyeong_tied",
        email: "rkdekrud1234@naver.com",
        img: "../../asset/images/Designers/KangDagyeong.jpg"
  },
  {
    studentId: "s-28",
        nameKo: "김민주",
        nameEn: "Kim MinJu", 
        snsLink: "@andmjuju",
        email: "minju8856@naver.com",
        img: "../../asset/images/Designers/KimMinju.JPG"
  },
  {
    studentId: "s-29",
        nameKo: "장유진",
        nameEn: "Jang Yujin", 
        snsLink: "@j.ybeol",
        email: "jangyj0620@naver.com",
        img: "../../asset/images/Designers/JangYujin.jpg"
  },
  {
    studentId: "s-30",
        nameKo: "최예진",
        nameEn: "Choi Yejin", 
        snsLink: "",
        email: "dpwls01010@naver.com",
        img: "../../asset/images/Designers/ChoiYejin.jpg"
  },
  {
    studentId: "s-31",
        nameKo: "양희찬",
        nameEn: "Yang Hee Chan", 
        snsLink: "",
        email: "hcshelby5293@gmail.com",
        img: "../../asset/images/Designers/YangHeechan.jpg"
  },
]

const globalWorksData = [
  { 
    id: 1, 
    category: "미디어아트",
    title: "weave", 
    thumbnail: "썸네일경로.jpg",
    descKo: "weave는 온라인의 발달로 긴밀하게 연결되어 있지만 진정한 친밀감은 느끼지 못하는 역설적인 현세대를 위하여, 인간과 인간의 내면을 촘촘하게 연결하여 진정한 연결을 이룬다. 함께 디바이스를 착용하고, 소통하는 과정에서 관계의 친밀도는 디바이스의 움직임과 빛으로 드러나고, 마침내 타인과 진정한 정서적 연결의 순간을 이룬다. 본 프로젝트는 새로운 인간 소통의 방식을 제시하며 연결의 순간 확장되는 유기적인 내면의 흐름을 시각화한다.",
    descEn: "Despite digital hyper-connection, true intimacy is rare today. \"weave\" resolves this paradox by tightly connecting people's inner selves. As users wear the device and interact, their intimacy is revealed through light and movement. By visualizing this expanding inner flow, \"weave\" presents a novel form of human communication, guiding users toward genuine emotional connection.",
    teamIds: ["s-01", "s-02", "s-03", "s-04"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
 ,{
    id: 2, 
    category: ["VR", "게임"],
    title: "비공개 채용시험", 
    thumbnail: "썸네일경로.jpg",
    descKo: "전염병으로 아바타 로봇 사용이 권고된 대한민국, 오류 사건을 무마하려는 대기업 \"영천 테크놀로지\"의 비밀 프로젝트에 파견된 플레이어. \"비공개 채용시험\"은 정직원이 되기 위해 인간들 사이에 숨어든 AI 로봇을 모두 찾아내야 하는 1인칭 추리 시뮬레이션 게임이다. 제한된 시간 안에 대화와 관찰을 통해 단서를 모으고, 누가 인간이고 누가 로봇인지 추리해 나가야 한다.",
    descEn: "In pandemic-era Korea, corporation Yeongcheon Technology secretly recruits the player to cover up a malfunction incident, hoping to land a permanent job. “Blind Recruitment” is a first-person mystery game: identify every AI robot hiding among humans through conversation and observation.", 
    teamIds: ["s-05", "s-06", "s-07", "s-08"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
 ,{ 
    id: 3, 
    category: "게임",
    title: "종착역", 
    thumbnail: "썸네일경로.jpg",
    descKo: "졸업을 앞둔 우리의 대학 생활, 그 종착역이 되는 2026년을 돌아보며 한 해를 마무리한다. 지나온 시간을 되새기며 각자의 등불을 만들고, 앞으로 이루고 싶은 바람과 소원을 담아 하늘로 띄워 보낸다.",
    descEn: "As we approach graduation, we look back on 2026—the final stop of our university journey. Reflecting on the time we have shared, we create our own lanterns and send them into the sky, carrying our hopes and wishes for the future.",
    teamIds: ["s-05"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
 ,{
    id: 4, 
    category: ["VR", "게임"],
    title: "現現 | 현현", 
    thumbnail: "썸네일경로.jpg",
    descKo: "현현은 숨겨져 있던 세계와 문화유산의 의미가 모습을 드러낸다는 뜻을 담은 K-판타지 VR 퍼즐 콘텐츠이다. 도깨비의 장난으로 나라의 정기가 사라지고, 세상의 질서가 무너진다. 플레이어는 왕실의 화원이 되어 도깨비 방에서 다섯 가지 상징물을 찾아 일월오봉도를 완성하고 무너진 나라의 질서를 되찾는 여정을 떠난다. 일월오봉도의 상징과 의미를 퍼즐, 인터랙션으로 재구성해 판타지풍 전통 공간에서 핸드트래킹으로 유물을 직접 다루며 문화유산을 경험한다.",
    descEn: "Hyeonhyeon is a K-fantasy VR puzzle experience exploring cultural heritage. After a goblin’s prank disrupts the nation’s order, the player becomes a court painter and enters the goblin’s chamber to find five symbols. Completing an Irworobongdo restores order. Its symbols are reimagined through puzzles and interactions. Players handle artifacts through hand tracking and experience Korean heritage.",
    teamIds: ["s-09", "s-10"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 5, 
    category: "미디어아트",
    title: "MODIKIT", 
    thumbnail: "썸네일경로.jpg",
    descKo: "MODIKIT은 7~8세 아동이 센서가 내장된 블록을 직접 선택하고 조작하며, 조건에 따른 변화를 실시간으로 경험하는 STEAM 기반 인터랙티브 학습 키트이다. 다양한 학습 주제로 확장 가능한 구조로, 이번 프로젝트에서는 ‘미생물’을 주제로 환경 조건에 따른 성장과 변화를 인터랙티브 그래픽으로 시각화했다. 아이들은 블록을 직접 조작하고 화면 속 변화를 관찰하며, 자신의 행동과 결과의 관계를 직관적이고 재미있게 경험할 수 있다.",
    descEn: "MODIKIT is a STEAM-based interactive learning kit for children aged 7–8. By selecting and manipulating sensor-embedded blocks, children explore real-time changes under different conditions. This project visualizes microbial growth through interactive graphics, helping children intuitively connect their actions with outcomes.",
    teamIds: ["s-11", "s-12"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 6, 
    category: ["VR", "게임"],
    title: "현실이행관리국 : 현동모텔", 
    thumbnail: "썸네일경로.jpg",
    descKo: "1990년, 외딴 곳에 자리한 현동 모텔에서 원인불명의 이상 현상이 발생하기 시작했다. 극비 기관 현실이행관리국의 요원이 된 당신은 현장 조사를 위해 모텔에 투입된다. PS1 스타일의 거친 그래픽과 불안한 분위기 속, 스캐너로 변형된 공간을 탐지하고 복구하는 것이 임무. 그러나 모텔 깊숙이 들어갈수록 이 공간에 숨겨진 기묘한 과거가 드러나기 시작하고, 단순한 조사는 어느새 걷잡을 수 없는 사건의 소용돌이로 변해간다. 당신마저 이상현상에 휘말리기 전에, 진실을 찾아라.",
    descEn: "In 1990, unexplained anomalies began occurring at Hyeondong Motel, isolated from the world. You become an agent of the top-secret organization, the Anomaly Management Bureau, and are deployed to investigate the site. Armed with a scanner, your mission is to detect and restore the distorted space. But the deeper you venture into the motel, the more its disturbing past comes to light. What began as a routine investigation spirals into something far beyond your control. Find the truth — before the anomalies consume you.", 
    teamIds: ["s-13", "s-14", "s-15"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 7, 
    category: "게임",
    title: "REVERB", 
    thumbnail: "썸네일경로.jpg",
    descKo: "REVERB는 시력이 차단된 플레이어가 지하 시설을 탈출하는 1인칭 하드코어 에코로케이션 게임이다. 완전한 암흑 속에서 탈출하려면 소음을 발생시켜 나타나는 파장을 통해 시야를 확보해야 한다. 하지만 이 소음은 플레이어를 사냥하려는 적들에게 위치를 노출시킨다. 플레이어는 시야 확보와 적의 추격이라는 등가교환 속에서 신중하게 소음을 통제하며 탈출을 위해 나아가야 한다.",
    descEn: "REVERB is a first-person hardcore echolocation game where a blinded player must escape an underground facility. In complete darkness, you must make noise to reveal the world through sound waves. However, this noise exposes your position to hunting enemies. Carefully control your sound and navigate the deadly trade-off between sight and survival.",
    teamIds: ["s-15"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 8, 
    category: "미디어",
    title: "눌러봄의 반향", 
    thumbnail: "썸네일경로.jpg",
    descKo: "이 작품은 소셜미디어 추천 알고리즘이 개인의 인식과 관계를 편향시키는 과정을 탐구한다. 네 가지 사회문제에서 수집한 이미지 60장은 관람객의 선택에 따라 연결되며, 선택지는 점차 줄어든다. 이 체험은 개인의 반응이 다시 추천에 반영되어 편향된 세계를 만드는 구조를 드러내고, 우리가 접하는 정보와 믿음이 어떻게 구성되는지 질문한다.",
    descEn: "This work explores how social media algorithms shape perception and relationships. Sixty images drawn from four social issues are linked by the viewer's choices as the options narrow, revealing how feedback reinforces bias and shapes reality.", 
    teamIds: ["s-16"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 9, 
    category: "게임",
    title: "mnemonic", 
    thumbnail: "썸네일경로.jpg",
    descKo: "기억을 지우는 기술이 상용화된 세상. 누군가의 무의식 속으로 직접 들어가 기억을 소거하는 일을 하는 주인공. 찾아오는 이들은 저마다의 사연을 안고 오고, 기억을 맡긴 채 떠난다. 그들은 잊는다. 주인공만이 그 모든 기억을 혼자 안고 산다. 의뢰를 거듭할수록 질문이 쌓여간다. 지운다는 것이 정말 그 사람을 위한 일인가. 기억 없이도 나는 나일 수 있는가. 그리고 어느 날, 서랍 속에서 발견한 낯선 사진 한 장. 기억하지 못하는 얼굴들과 함께 웃고 있는 자신. 진실을 쫓을수록 주인공의 과거가 조금씩 모습을 드러내기 시작한다.",
    descEn: "A world where memory erasure exists. The protagonist enters people's unconscious minds to erase memories. Those who come leave their memories and walk away. The protagonist alone carries every one of them. As requests pile up, so do the questions. Then one day — a photograph in a drawer. Smiling faces no one remembers. A hidden past surfaces.",
    teamIds: ["s-13"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 10, 
    category: ["VR", "게임"],
    title: "JOYKIT", 
    thumbnail: "썸네일경로.jpg",
    descKo: "JOYKIT는 불안을 감지하고 안정을 돕는 가상의 장치를 통해, 우리가 피하고 싶어하는 불편한 감정의 의미를 다시 바라보는 VR 인터랙티브 작품이다. 어린아이의 시점으로 가족들의 갈등 상황을 마주하며, 불안을 낮출지 그대로 받아들일지 선택한다. 이 선택은 이야기의 흐름과 결말을 변화시키며, 불편한 감정들이 때로는 현실을 알아차리고 행동하도록 돕는 신호가 될 수 있음을 보여준다.",
    descEn: "JOYKIT is an interactive VR work about a fictional device that detects anxiety and helps restore calm, reconsidering the meaning of uncomfortable emotions we tend to avoid. Through a child's eyes, the viewer faces family conflict and chooses whether to reduce anxiety or accept it. These choices shape the story and its ending, showing how discomfort can help us recognize reality and act.",
    teamIds: ["s-17"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 12, 
    category: "영상",
    title: "Kael: The Last of the Tribe", 
    thumbnail: "썸네일경로.jpg",
    descKo: "마을을 파괴하고 영혼을 빼앗는 악령 모르가스와, 모든 것을 잃고 복수를 결심한 소년 카엘의 이야기를 담은 작품이다. 본 작품은 카엘과 모르가스의 대립을 중심으로 파괴와 복수의 과정을 시각화했다. AI를 활용해 자면 시각화와 영상을 제작하고, 언리얼 엔진과 AI 렌더링을 통해 영상을 제작했다.",
    descEn: "This work tells the story of Morgas, an evil spirit who destroys villages and steals souls, and Kael, a boy who loses everything and seeks revenge. Focusing on the conflict between the two, it visualizes the themes of destruction and vengeance. AI was used to create the visualizations and parts of the film, while Unreal Engine and AI rendering were used for the video production.",
    teamIds: ["s-19"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
   ,{
    id: 13, 
    category: ["VR", "게임"],
    title: "미환: 未還", 
    thumbnail: "썸네일경로.jpg",
    descKo: "「미환(未還)」은 국외로 반출되어 돌아오지 못한 우리 문화유산을 VR로 만나는 체험형 전시 작품이다. 관람자는 가상의 전시관을 거닐며 네 점의 유산을 직접 손으로 만지고 조작하는 과정에서 각각의 유물이 지닌 이야기와 마주한다. 체험의 끝에 펼쳐지는 세계지도는 흩어진 유산들이 지금 어디에 놓여 있는지를 보여준다. 손으로 만져보는 경험을 통해, 단순한 관람을 넘어 우리가 함께 기억해야 할 문화유산들의 이야기를 전하고자 했다.",
    descEn: "Mihwan (未還), \"Those that have not returned,\" is a VR experience that brings Korean cultural heritage taken abroad back into view. In a virtual gallery, visitors reach out and interact with four relics, discovering the story behind each one. A world map at the end shows where they are now, inviting visitors to remember the heritage that remains far from home.",
    teamIds: ["s-20"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 14, 
    category: "VR",
    title: "덜컹거리며 달리는 전철 속에 서서 나는 어디쯤에선가", 
    thumbnail: "썸네일경로.jpg",
    descKo: "복잡한 퇴근길 지하철, 손발이 자유롭지 못한 상황에서는 스마트폰 확인조차 쉽지 않다. 본 작품은 이런 환경에서 디스플레이형 스마트 글래스가 탑승 경험을 어떻게 개선할 수 있을지 고민에서 출발해, 간단한 동작만으로 정보에 접근하는 인터페이스를 제안한다. 관람자는 혼잡한 지하철을 재현한 VR 공간에 탑승해 눈앞의 디스플레이와 상호작용하며, 스마트 글래스가 이동 중 행동 부담을 덜어주는 인터페이스가 될 가능성을 체험한다.",
    descEn: "A crowded subway at evening rush hour — barely room to move, let alone check your phone. This project imagines a smart glasses interface that responds to nothing more than a simple gesture. Step into a VR subway car and interact with the display right in front of you. Feel how smart glasses could become more than a screen — a quiet layer of support for the daily commute.",
    teamIds: ["s-21"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 15, 
    category: ["VR", "게임"],
    title: "FreshFall", 
    thumbnail: "썸네일경로.jpg",
    descKo: "‘Fresh Fall’은  냉장고 속 공간을 배경으로 한 VR 점프맵 게임이다. 계란이 된 플레이어는 유통기한이 지나 버려지기 전에 냉장고를 탈출해야 한다. 선반칸, 냉동칸, 신선칸으로 구성된 세 스테이지에서 다양한 장애물을 피해 탈출한다. 팔을 들어 점프하고 달리듯 팔을 움직여 이동하는 직관적인 신체 조작을 통해 누구나 쉽게 즐기며, 직접 냉장고 속을 뛰어다니는 듯한 몰입감과 생동감 있는 플레이를 경험할 수 있다.",
    descEn: "‘Fresh Fall’ is a VR jumping game set inside a refrigerator, with stages including sauce, frozen, and fresh zones. The player becomes an egg and escapes the fridge before its expiration date, avoiding various obstacles on each stage. With simple and intuitive motion controls, players can easily enjoy the game and have a vivid experience.",
    teamIds: ["s-22", "s-23", "s-24", "s-25"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 16, 
    category: "게임",
    title: "LINK", 
    thumbnail: "썸네일경로.jpg",
    descKo: "[LINK]는 관람객이 가상 아이돌의 세계관 속에 직접 들어가 함께 춤을 추며 교감하는 인터랙티브 댄스 콘텐츠입니다. 스크린이라는 벽을 넘어, 춤이라는 원초적 신체 언어로 가상 아티스트와 실시간 동기화되는 특별한 경험을 제공합니다. 동작의 정확도에 따라 감각적인 시각 보상이 연출되며, 팬과 아티스트가 함께 완성해 나가는 몰입형 댄스 챌린지를 선사합니다.",
    descEn: "[LINK] is an interactive dance content where audiences enter the world of a virtual idol to dance and connect. Breaking through the screen, it provides an immersive real-time sync experience using body language. As the performance accuracy increases, dynamic visual rewards are triggered, delivering an engaging dance challenge co-created by the fan and the artist.",
    teamIds: ["s-26"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 17, 
    category: "미디어아트",
    title: "쌀콩밀", 
    thumbnail: "썸네일경로.jpg",
    descKo: "이 프로젝트는 아시아 식문화 속 쌀·콩·밀이 지나온 길을 따라 음식에 담긴 이동의 이야기를 탐구한다. 식재료는 국경을 넘어 사람과 문화를 만나 새로운 음식으로 변화하며 아시아를 연결해 왔다. 익숙한 한 끼에 스며든 교역과 교류의 흔적을 따라가며, 식재료가 품은 시간과 문화의 가치, 그리고 보이지 않는 연결망을 새롭게 바라보는 경험을 제안한다.",
    descEn: "This project explores the stories of movement embedded in food by tracing the journeys of rice, soybeans, and wheat across Asia. As these ingredients crossed borders, they encountered new cultures and evolved into diverse cuisines. By revealing the traces of trade, migration, and cultural exchange hidden in everyday meals, the project invites viewers to rediscover the value of ingredients and the invisible connections they create.",
    teamIds: ["s-27", "s-28", "s-29"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 18, 
    category: "영상",
    title: "BIOMEMO", 
    thumbnail: "썸네일경로.jpg",
    descKo: "BioMemo는 2127년, 감정이 유전자 서열로 기록·관리되는 미래 사회를 배경으로 한 AI 시네마틱 영상 기반 스페큘러티브 디자인 작품이다. 붕괴 이후 남겨진 감정의 기록을 담은 오브젝트를 통해, 기술이 인간의 감정과 기억을 저장하고 규격화할 때 무엇이 남는지를 탐구한다. 관람자는 AI로 구현된 미래의 풍경과 감각적 서사를 따라가며, 기술과 인간의 관계 속에서 기억과 감정의 의미, 그리고 인간다움의 본질을 마주한다.",
    descEn: "BioMemo is an AI-generated cinematic work set in 2127, where human emotions are recorded as genetic sequences. Through an object preserving emotional records after society’s collapse, the work explores how technology reshapes memory and emotion. The film invites viewers to reflect on what remains of humanity in a future shaped by technology.",
    teamIds: ["s-30"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 19, 
    category: "미디어아트",
    title: "Archive", 
    thumbnail: "썸네일경로.jpg",
    descKo: "낡은 브라운관과 흩어진 비디오테이프 속에서 태어난 AI가 관객을 기다린다. 사람들이 건넨 말은 곧 그의 일부가 되어 쌓여간다. 스쳐간 이들의 대화가 쌓일 때마다 그 기억은 하나의 이미지로 응축되어 화면 위에 떠오르고, 방은 서서히 낯선 목소리들의 초상으로 채워진다. 《아카이브》는 우리가 던진 말들이 결국 무엇을 만들어내는지를 되묻는 실시간 생성형 설치작업이다.",
    descEn: "Born from old cathode-ray screens and scattered videotapes, an AI waits in a room built from broadcast wreckage. Every word a visitor offers becomes part of it, accumulating over time. As conversations gather, memories condense into images that surface on the screens, slowly filling the room with a portrait made of strangers' voices. Archive asks what our words ultimately build.",
    teamIds: ["s-31"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 20, 
    category: ["VR", "게임"],
    title: "견물생심(見物生心)", 
    thumbnail: "썸네일경로.jpg",
    descKo: "가상현실 속 물체의 촉감을 손으로 전달하는 착용형 햅틱 장갑입니다. 손가락마다 부착된 센서가 굽힘 각도를 실시간으로 읽어 가상의 손에 반영하고, 물체와 접촉하면 서보모터가 와이어를 당겨 손가락이 더 이상 굽혀지지 않도록 붙잡습니다. 오픈소스 하드웨어를 기반으로 제작했으며, 보는 것에 머물던 가상의 물체를 손으로 확인하는 경험을 목표로 합니다.",
    descEn: "A wearable haptic glove that delivers the sense of touch from virtual objects to the hand. Sensors on each finger read the bending angle in real time and mirror it onto a virtual hand. When the hand meets an object, servo motors pull on wires to hold the fingers in place, stopping them from bending further. Built on open-source hardware, it aims to let you confirm by hand what you could only see",
    teamIds: ["s-18"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  // id 2부터 31까지 반복해서 작성
];