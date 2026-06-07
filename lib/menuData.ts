export type MenuItem = {
  image: string
  title: string
  description: string
  price: number
  unit: string
  badge?: string
}

export const menuItems: MenuItem[] = [
  {
    image: '/burger.png',
    title: 'The Classic TAKA',
    description: 'เนื้อวากิวแพตตี้ 180g ชีสเชดดาร์สองชั้น ซอสสูตรพิเศษ เลตตึส มะเขือเทศออร์แกนิค',
    price: 70,
    unit: 'ชิ้น',
    badge: '🔥 Best Seller',
  },
  {
    image: 'burgerchic.png',
    title: 'Chicken Nugget',
    description: 'อะโวคาโดสดบดใหม่ทุกวัน เนื้อไก่ย่างสมุนไพร ซอสไชปอตเล่ บนขนมปังบริออชอบสด',
    price: 57,
    unit: 'ชิ้น',
  },
  {
    image: 'burgerdoublechees.png',
    title: 'Cheesball',
    description: 'แพตตี้จากพืชคาร์บอนศูนย์ ชีสวีแกน ผักออร์แกนิคสด ซอสมัสตาร์ดธัญพืชโบราณ',
    price: 78,
    unit: 'ชิ้น',
    badge: '🌱 Plant-based',
  },
  {
    image: 'nugget.png',
    title: 'Bangkok Fire',
    description: 'เนื้อแพตตี้สูตรพริกไทยดำ ซอสพริกสวรรค์คั่วสด หอมกรอบ กิมจิโฮมเมด',
    price: 45,
    unit: '6ชิ้น',
  },
  {
    image: 'burgertruffle.png',
    title: 'Double Cheese Bomb',
    description: 'แพตตี้สองชั้น ชีสสี่ชนิดละลาย พริกฮาลาปิโน่ดอง เบคอนหมักควัน',
    price: 120,
    unit: 'ชิ้น',
  },
  {
    image: '/cheesball.png',
    title: 'Truffle Fries Combo',
    description: 'เบอร์เกอร์คู่กับมันฝรั่งทอดราดน้ำมันทรัฟเฟิลแท้ พาร์เมซานขูดสด ซอสดิป 2 ชนิด',
    price: 40,
    unit: '6ชิ้น',
  },
  /*{
    image: 'frieshfries.png',
    title: 'Truffle burger',
    description: 'เบอร์เกอร์คู่กับมันฝรั่งทอดราดน้ำมันทรัฟเฟิลแท้ พาร์เมซานขูดสด ซอสดิป 2 ชนิด',
    price: 349,
    unit: 'set',
  },*/
]

export type Review = {
  avatar: string
  text: string
  name: string
  source: string
  date: string
}

export const reviews: Review[] = [
  {
    avatar: '👩',
    text: '"เบอร์เกอร์อร่อยมาก เนื้อนุ่ม ซอสกลมกล่อม ขนมปังหอม สั่งซ้ำทุกอาทิตย์เลยค่ะ!"',
    name: 'นภัส ว.',
    source: 'Grab Food',
    date: 'มีนาคม 2026',
  },
  {
    avatar: '👨',
    text: '"Bangkok Fire burger is insane! ส่งเร็วมาก ยังร้อนอยู่เลย ดีกว่าร้านดังๆ อีกครับ"',
    name: 'Tanakrit P.',
    source: 'LINE MAN',
    date: 'กุมภาพันธ์ 2026',
  },
  {
    avatar: '🧑',
    text: '"Garden Beast สำหรับคนทานมังสวิรัติมันคือ game changer! ไม่รู้สึกว่าขาดอะไรเลยสักนิด"',
    name: 'มินตรา ล.',
    source: 'Instagram',
    date: 'มกราคม 2026',
  },
]
