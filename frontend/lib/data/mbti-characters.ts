import type { CharacterResult } from './christmas-characters';
import type { MBTIType } from '../utils/calculateResult';

/**
 * Christmas Characters mapped to 16 MBTI personality types
 */
export const MBTI_CHRISTMAS_CHARACTERS: Record<MBTIType, CharacterResult> = {
  // INTJ - นักวางแผน (The Planner)
  INTJ: {
    character: 'นักวางแผน (INTJ)',
    description:
      'งานปาร์ตี้ต้องมี Timeline! คุณคือผู้อยู่เบื้องหลังความเป๊ะของตารางงาน วางแผนจับฉลากยันเวลาเลิกงาน ทุกอย่างต้องเป็นไปตามแผนที่วางไว้ ไม่มีอะไรหลุดออกจากระบบของคุณได้เลย',
    imageUrl: '/images/characters/intj.webp',
    shareText: 'ฉันได้ "นักวางแผน (INTJ)" ใน VibeQuiz!',
    archetype: 'Archetype #001',
    stats: {
      naughtiness: 25,
      holidaySpirit: 85,
    },
  },

  // INTP - วิศวกรไฟ (The Light Engineer)
  INTP: {
    character: 'วิศวกรไฟ (INTP)',
    description:
      'คุณหมกมุ่นกับการจัดแสงไฟคริสต์มาสให้สมบูรณ์แบบ วิเคราะห์ว่าต้องใช้หลอดไฟกี่ดวง วางตำแหน่งยังไงให้สวยงามและประหยัดไฟที่สุด คุณคือคนที่อ่านคู่มือการติดตั้งไฟคริสต์มาสจนจบ',
    imageUrl: '/images/characters/intp.webp',
    shareText: 'ฉันได้ "วิศวกรไฟ (INTP)" ใน VibeQuiz!',
    archetype: 'Archetype #002',
    stats: {
      naughtiness: 30,
      holidaySpirit: 70,
    },
  },

  // ENTJ - บอสปาร์ตี้ (The Party Boss)
  ENTJ: {
    character: 'บอสปาร์ตี้ (ENTJ)',
    description:
      'คุณคือ CEO ของงานปาร์ตี้คริสต์มาส! จัดการทุกอย่างให้เป็นระบบ มอบหมายงานให้ทุกคนอย่างมีประสิทธิภาพ งานปาร์ตี้จะไม่เกิดขึ้นถ้าไม่มีคุณเป็นผู้กำกับ คุณทำให้ทุกอย่างดูง่าย แต่จริงๆ แล้วมันซับซ้อนมาก',
    imageUrl: '/images/characters/entj.webp',
    shareText: 'ฉันได้ "บอสปาร์ตี้ (ENTJ)" ใน VibeQuiz!',
    archetype: 'Archetype #003',
    stats: {
      naughtiness: 20,
      holidaySpirit: 90,
    },
  },

  // ENTP - ตัวปั่น (The Prankster)
  ENTP: {
    character: 'ตัวปั่น (ENTP)',
    description:
      'คุณสร้างความวุ่นวายเพื่อความสนุก! วางแผนแกล้งเพื่อนในงานปาร์ตี้ สร้างสถานการณ์ที่ไม่มีใครคาดคิด คุณคือชีวิตของงานปาร์ตี้ แต่ก็เป็นความตายของแผนการที่วางไว้ รับความวุ่นวายกันเถอะ!',
    imageUrl: '/images/characters/entp.webp',
    shareText: 'ฉันได้ "ตัวปั่น (ENTP)" ใน VibeQuiz!',
    archetype: 'Archetype #004',
    stats: {
      naughtiness: 95,
      holidaySpirit: 85,
    },
  },

  // INFJ - ผู้กุมความลับ (The Secret Keeper)
  INFJ: {
    character: 'ผู้กุมความลับ (INFJ)',
    description:
      'คุณรู้ว่าใครได้ของอะไรใน Secret Santa! คุณเป็นคนที่เก็บความลับได้ดีที่สุด และเข้าใจจิตใจของทุกคนอย่างลึกซึ้ง ของขวัญที่คุณให้มักจะมีความหมายพิเศษ เพราะคุณฟังและจำรายละเอียดเล็กๆ น้อยๆ',
    imageUrl: '/images/characters/infj.webp',
    shareText: 'ฉันได้ "ผู้กุมความลับ (INFJ)" ใน VibeQuiz!',
    archetype: 'Archetype #005',
    stats: {
      naughtiness: 15,
      holidaySpirit: 95,
    },
  },

  // INFP - นักฝัน (The Dreamer)
  INFP: {
    character: 'นักฝัน (INFP)',
    description:
      'คุณหลงใหลในเวทมนตร์ของวันหยุด! คริสต์มาสไม่ใช่แค่วันหยุด แต่เป็นความรู้สึก เป็นช่วงเวลาที่หยุดนิ่ง คุณเขียนการ์ดด้วยใจ จัดทำประเพณีที่มีความหมาย และจำได้ว่าคริสต์มาสหมายถึงอะไรจริงๆ',
    imageUrl: '/images/characters/infp.webp',
    shareText: 'ฉันได้ "นักฝัน (INFP)" ใน VibeQuiz!',
    archetype: 'Archetype #006',
    stats: {
      naughtiness: 25,
      holidaySpirit: 90,
    },
  },

  // ENFJ - เจ้าบ้าน (The Host)
  ENFJ: {
    character: 'เจ้าบ้าน (ENFJ)',
    description:
      'คุณคือหัวใจของคริสต์มาส! คิดถึงคนอื่นอยู่เสมอ ใช้เวลาหลายเดือนวางแผนของขวัญที่สมบูรณ์แบบ และทำให้ทุกคนรู้สึกว่าถูกต้อนรับ คุณเป็นเจ้าภาพที่ยอดเยี่ยม จำข้อจำกัดด้านอาหารของทุกคน และทำให้คริสต์มาสรู้สึกเหมือนบ้าน',
    imageUrl: '/images/characters/enfj.webp',
    shareText: 'ฉันได้ "เจ้าบ้าน (ENFJ)" ใน VibeQuiz!',
    archetype: 'Archetype #007',
    stats: {
      naughtiness: 10,
      holidaySpirit: 100,
    },
  },

  // ENFP - มนุษย์ต้นคริสต์มาส (The Human Christmas Tree)
  ENFP: {
    character: 'มนุษย์ต้นคริสต์มาส (ENFP)',
    description:
      'คุณคือพลังงานที่ติดเชื้อของงานปาร์ตี้! เต็มไปด้วยไอเดียสุดบรรเจิดและความสุขที่เกิดขึ้นเอง คุณคือคนที่แนะนำให้สร้างตุ๊กตาหิมะตอนเที่ยงคืน หรือเริ่มแฟลชม็อบในห้าง ความตื่นเต้นของคุณแพร่กระจาย และทำให้คริสต์มาสเป็นเวทมนตร์สำหรับทุกคน',
    imageUrl: '/images/characters/enfp.webp',
    shareText: 'ฉันได้ "มนุษย์ต้นคริสต์มาส (ENFP)" ใน VibeQuiz!',
    archetype: 'Archetype #008',
    stats: {
      naughtiness: 75,
      holidaySpirit: 98,
    },
  },

  // ISTJ - สมุห์บัญชี (The Accountant)
  ISTJ: {
    character: 'สมุห์บัญชี (ISTJ)',
    description:
      'คุณจัดการงบประมาณและแบ่งบิลอย่างแม่นยำ! ทุกอย่างต้องถูกบันทึกและคำนวณอย่างถูกต้อง คุณคือคนที่ทำให้งานปาร์ตี้มีระเบียบ และไม่มีใครสามารถโกงค่าใช้จ่ายได้ คุณทำให้ทุกอย่างโปร่งใสและยุติธรรม',
    imageUrl: '/images/characters/istj.webp',
    shareText: 'ฉันได้ "สมุห์บัญชี (ISTJ)" ใน VibeQuiz!',
    archetype: 'Archetype #009',
    stats: {
      naughtiness: 20,
      holidaySpirit: 75,
    },
  },

  // ISFJ - ผู้พิทักษ์ (The Guardian)
  ISFJ: {
    character: 'ผู้พิทักษ์ (ISFJ)',
    description:
      'คุณปกป้องอาหารและความเป็นระเบียบในงานปาร์ตี้! สังเกตเห็นสิ่งที่คนอื่นต้องการก่อนที่พวกเขาจะถาม คุณคือคนที่นำผ้าห่มเพิ่มมา จำไว้ว่าต้องเก็บอาหารเหลือไว้ให้ทุกคน และทำให้ทุกคนรู้สึกสบายอย่างเงียบๆ',
    imageUrl: '/images/characters/isfj.webp',
    shareText: 'ฉันได้ "ผู้พิทักษ์ (ISFJ)" ใน VibeQuiz!',
    archetype: 'Archetype #010',
    stats: {
      naughtiness: 10,
      holidaySpirit: 92,
    },
  },

  // ESTJ - ผู้จัดการ (The Manager)
  ESTJ: {
    character: 'ผู้จัดการ (ESTJ)',
    description:
      'คุณจัดการคริสต์มาสเหมือนเครื่องจักรที่ทำงานได้ดี! ตั้งแต่การจัดตารางเวลาครอบครัว ไปจนถึงการทำให้แน่ใจว่าประเพณีถูกปฏิบัติตามอย่างสมบูรณ์แบบ ทักษะการจัดระเบียบของคุณเป็นตำนาน และคริสต์มาสจะไม่เหมือนเดิมถ้าไม่มีคุณ',
    imageUrl: '/images/characters/estj.webp',
    shareText: 'ฉันได้ "ผู้จัดการ (ESTJ)" ใน VibeQuiz!',
    archetype: 'Archetype #011',
    stats: {
      naughtiness: 15,
      holidaySpirit: 88,
    },
  },

  // ESFJ - ขาเม้าท์ (The Gossip)
  ESFJ: {
    character: 'ขาเม้าท์ (ESFJ)',
    description:
      'คุณรู้เรื่องราวทุกเรื่องในงานปาร์ตี้! คุณเป็นเจ้าภาพที่ทุกคนชื่นชอบ จำได้ว่าใครชอบอาหารอะไร ทำให้ทุกคนรู้สึกต้อนรับ และบ้านของคุณตกแต่งอย่างสมบูรณ์แบบ คุณเก่งในการสร้างพื้นที่อบอุ่นและเชิญชวนที่สร้างความทรงจำ',
    imageUrl: '/images/characters/esfj.webp',
    shareText: 'ฉันได้ "ขาเม้าท์ (ESFJ)" ใน VibeQuiz!',
    archetype: 'Archetype #012',
    stats: {
      naughtiness: 40,
      holidaySpirit: 95,
    },
  },

  // ISTP - ช่างซ่อม (The Fixer)
  ISTP: {
    character: 'ช่างซ่อม (ISTP)',
    description:
      'คุณซ่อมไฟและอุปกรณ์ที่เสียในงานปาร์ตี้! คุณคือคนที่ทุกคนเรียกเมื่อมีปัญหาทางเทคนิค คุณแก้ไขทุกอย่างได้อย่างเงียบๆ และกลับไปสนุกต่อได้ทันที คุณทำให้งานปาร์ตี้ดำเนินต่อไปได้แม้จะมีอุปสรรค',
    imageUrl: '/images/characters/istp.webp',
    shareText: 'ฉันได้ "ช่างซ่อม (ISTP)" ใน VibeQuiz!',
    archetype: 'Archetype #013',
    stats: {
      naughtiness: 50,
      holidaySpirit: 70,
    },
  },

  // ISFP - ศิลปิน (The Artist)
  ISFP: {
    character: 'ศิลปิน (ISFP)',
    description:
      'คุณจัดอาหารและถ่ายรูปอย่างสวยงาม! คุณมีสายตาที่สวยงามและสร้างสรรค์ ทำให้ทุกอย่างดูน่าดึงดูด คุณคือคนที่ทำให้โต๊ะอาหารดูเหมือนงานศิลปะ และถ่ายรูปที่ทุกคนอยากแชร์ คุณทำให้คริสต์มาสสวยงาม',
    imageUrl: '/images/characters/isfp.webp',
    shareText: 'ฉันได้ "ศิลปิน (ISFP)" ใน VibeQuiz!',
    archetype: 'Archetype #014',
    stats: {
      naughtiness: 20,
      holidaySpirit: 85,
    },
  },

  // ESTP - สายซิ่ง (The Racer)
  ESTP: {
    character: 'สายซิ่ง (ESTP)',
    description:
      'คุณอยู่ที่นี่เพื่อช่วงเวลาดีๆ ไม่ใช่เวลานาน! ช้อปปิ้งนาทีสุดท้าย? ได้เลย! การผจญภัยวันหยุดแบบทันที? แน่นอน! คุณอยู่กับปัจจุบันและทำให้การเฉลิมฉลองคริสต์มาสทุกครั้งน่าตื่นเต้น คุณคือคนที่แนะนำให้ไปร้องเพลงคริสต์มาสตอน 4 ทุ่ม',
    imageUrl: '/images/characters/estp.webp',
    shareText: 'ฉันได้ "สายซิ่ง (ESTP)" ใน VibeQuiz!',
    archetype: 'Archetype #015',
    stats: {
      naughtiness: 85,
      holidaySpirit: 90,
    },
  },

  // ESFP - ซุปตาร์ (The Superstar)
  ESFP: {
    character: 'ซุปตาร์ (ESFP)',
    description:
      'คุณคือจุดสนใจของงานปาร์ตี้! คุณเต้นไปกับเพลง Mariah Carey เริ่มร้องเพลงคริสต์มาสพร้อมกัน และเปลี่ยนการชุมนุมทุกครั้งให้เป็นการเฉลิมฉลอง พลังงานของคุณติดเชื้อ และคุณทำให้แน่ใจว่าทุกคนสนุก คริสต์มาสคือสนามเด็กเล่นของคุณ',
    imageUrl: '/images/characters/esfp.webp',
    shareText: 'ฉันได้ "ซุปตาร์ (ESFP)" ใน VibeQuiz!',
    archetype: 'Archetype #016',
    stats: {
      naughtiness: 80,
      holidaySpirit: 98,
    },
  },
};
