// 결국 admin계정에서 글을 추가 => DB에 저장 => 화면에 출력
// 사이즈 , 갯수, 이미지
const productsData = [
  {
    id: 0,
    title: '후드 트랙탑 점퍼(Cream)',
    price: 150000,
    image: ['', ''],
    detail: [
      {
        id: 0,
        info: '경량 소재로 일상과 스포츠에서 활용도가 좋은 트랙점퍼 입니다.',
      },
      {
        id: 1,
        info: '나일론 소재로 가벼운 생활방수가 가능하고 휴대가 간편합니다.',
      },
      {
        id: 2,
        info: '일체형 후드가 있고 밑단에 드로우 스트링으로 밑단 둘레 조절이 가능합니다.',
      },
    ],
    totalAmount: [
      {
        id: 0,
        size: 'S',
        amount: 11,
      },
      { id: 1, size: 'M', amount: 0 },
      { id: 2, size: 'L', amount: 10 },
    ],
    relatedItem: [
      {
        id: 0,
        image: '',
        link: '',
        price: '',
        discount: 10,
      },
      {
        id: 1,
        image: '',
        link: '',
        price: '',
      },
    ],
  },
]

// 사이즈에 맞는 수량
