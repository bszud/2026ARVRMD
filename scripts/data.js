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
    category: "미디어",
    title: "weave", 
    thumbnail: "썸네일경로.jpg",
    description: "weave는 연결 인류 디바이스 weaving을 통해 타인과 진정한 정서적 연결의 순간을 만듭니다. 직물을 직조하는 것처럼 인간과 인간의 내면은 촘촘하게 연결되며, 인류는 새로운 소통 방식을 마주합니다. 연결의 순간 확장되는 유기적인 내면의 흐름을 시각화합니다.", 
    teamIds: ["s-01", "s-02", "s-03", "s-04"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
 ,{
    id: 2, 
    category: ["VR", "게임"],
    title: "비공개 채용시험", 
    thumbnail: "썸네일경로.jpg",
    description: "",
    teamIds: ["s-05", "s-06", "s-07", "s-08"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
 ,{ 
    id: 3, 
    category: "게임",
    title: "종착역", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-05"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
 ,{
    id: 4, 
    category: ["VR", "게임"],
    title: "現現 | 현현", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-09", "s-10"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 5, 
    category: "미디어",
    title: "MODIKIT", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-11", "s-12"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 6, 
    category: ["VR", "게임"],
    title: "현실이행관리국 : 현동모텔", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-13", "s-14", "s-15"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 7, 
    category: "게임",
    title: "REVERB", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-15"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 8, 
    category: "미디어",
    title: "눌러봄의 반향", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-16"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 9, 
    category: "게임",
    title: "mnemonic", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-13"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 10, 
    category: ["VR", "게임"],
    title: "JOYKIT", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-17"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 11, 
    category: ["VR", "게임"],
    title: "견물생심", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-18"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 12, 
    category: "영상",
    title: "Kael: The Last of the Tribe", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-19"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
   ,{
    id: 13, 
    category: ["VR", "게임"],
    title: "미환: 未還", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-20"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 14, 
    category: "VR",
    title: "덜컹거리며 달리는 전철 속에 서서 나는 어디쯤에선가", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-21"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 15, 
    category: ["VR", "게임"],
    title: "프레시폴 (FreshFall)", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-22", "s-23", "s-24", "s-25"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 16, 
    category: "게임",
    title: "LINK", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-26"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 17, 
    category: "미디어",
    title: "쌀콩밀", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-27", "s-28", "s-29"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 18, 
    category: "영상",
    title: "BIOMEMO", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-30"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  ,{
    id: 19, 
    category: "미디어",
    title: "RUNTIME", 
    thumbnail: "썸네일경로.jpg",
    description: "", 
    teamIds: ["s-31"],
    images: ["상세이미지1.jpg", "상세이미지2.jpg"], 
  }
  // id 2부터 31까지 반복해서 작성
];