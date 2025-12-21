import type { CharacterResult } from './christmas-characters';
import type { MBTIType } from '../utils/calculateResult';

/**
 * Christmas Characters mapped to 16 MBTI personality types
 */
export const CHRISTMAS_CHARACTERS: Record<MBTIType, CharacterResult> = {
  INTJ: {
    id: "INTJ",
    title: "The Mastermind - จอมบงการหน้านิ่ง",
    description: "ผู้อยู่เหนือห่วงโซ่อาหาร",
    quote: "แผนสำรองมีถึง Z แล้ว ถ้าพวกเธอไม่ทำพังนะ",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 5 },
      { label: "สกิลเลือกของขวัญ", value: 100 },
      { label: "หน้าเหวี่ยง", value: 100 }
    ],
    warning: "อย่าเปลี่ยนแผนกระทันหัน เดี๋ยวองค์ลง",
    bestMatch: "ENFP (ตัวป่วนที่ยอมให้คนเดียว)",
    nemesis: "ESFP (เสียงดังเกิน รับไม่ไหว)",
    image: "/images/characters/intj.webp"
  },
  INTP: {
    id: "INTP",
    title: "The Glitch - นักวิจัยสิ่งลี้ลับ",
    description: "ที่เรียกว่าการเข้าสังคม",
    quote: "ซานต้าเดินทางด้วยความเร็วแสงได้ไงอะ? มาถกกัน",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 0 },
      { label: "สกิลเลือกของขวัญ", value: 50 },
      { label: "ความเบียว", value: 100 }
    ],
    warning: "อย่าถาม 'ทำไม' ถ้าไม่อยากฟังเลคเชอร์ 3 ชั่วโมง",
    bestMatch: "ENTJ (บอสที่คอยลากไปอาบน้ำ)",
    nemesis: "ESFJ (คุยกันคนละภาษา)",
    image: "/images/characters/intp.webp"
  },
  ENTJ: {
    id: "ENTJ",
    title: "The CEO Energy - บอสตัวตึง",
    description: "สั่งเก่งเหมือนเป็นสปอนเซอร์งาน",
    quote: "ปาร์ตี้เริ่ม 1 ทุ่ม ห้ามเลท ห้ามเท ห้ามตาย",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 100 },
      { label: "สกิลเลือกของขวัญ", value: 90 },
      { label: "ความเผด็จการ", value: 100 }
    ],
    warning: "อย่าขัดคำสั่ง เดี๋ยวโดนสาป",
    bestMatch: "INTP (ลูกน้องหัวกะทิ)",
    nemesis: "ISFP (ช้าจนหงุดหงิด)",
    image: "/images/characters/entj.webp"
  },
  ENTP: {
    id: "ENTP",
    title: "The Chaos Maker - ตัวปั่นระดับตำนาน",
    description: "หาเรื่องคือ Passion",
    quote: "กวางเรนเดียร์อร่อยมั้ย? อยากลองชิมว่ะ",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 100 },
      { label: "สกิลเลือกของขวัญ", value: 20 },
      { label: "ความน่าทุบหลัง", value: 100 }
    ],
    warning: "ระวังของขวัญที่เป็นกล่องเปล่า",
    bestMatch: "INFJ (คนเดียวที่เอาอยู่)",
    nemesis: "ISFJ (เจ้าระเบียบที่โดนปั่นหัวหมุน)",
    image: "/images/characters/entp.webp"
  },
  INFJ: {
    id: "INFJ",
    title: "The Mystic - ร่างทรงซานต้า",
    description: "รู้ทุกอย่าง ยกเว้นเรื่องตัวเอง",
    quote: "ไม่ต้องพูด... ฉันรู้นะว่าแกเพิ่งเลิกกับแฟน โอ๋ๆ",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 15 },
      { label: "สกิลเลือกของขวัญ", value: 100 },
      { label: "สกิลอ่านใจ", value: 99 }
    ],
    warning: "อย่าโกหก นางดูออกตั้งแต่หน้าประตู",
    bestMatch: "ENTP (ตัวปั่นที่นางเอ็นดู)",
    nemesis: "ESTP (พวกหยาบกระด้าง)",
    image: "/images/characters/infj.webp"
  },
  INFP: {
    id: "INFP",
    title: "The Sad Reindeer - ตัวเล็กสเปคเธอ",
    description: "(แต่ขี้แง)",
    quote: "คริสต์มาสปีนี้ขอแค่นอนดู Harry Potter วนไป",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 5 },
      { label: "สกิลเลือกของขวัญ", value: 100 },
      { label: "ความบ่อน้ำตาตื้น", value: 99 }
    ],
    warning: "อย่าเปิดเพลงเศร้า เดี๋ยวงานกร่อยเพราะร้องไห้",
    bestMatch: "ENFJ (มัมหมีดูแลหนู)",
    nemesis: "ESTJ (ดุเกิน รับบ่ไหว)",
    image: "/images/characters/infp.webp"
  },
  ENFJ: {
    id: "ENFJ",
    title: "The Main Character - ตัวแม่แคร์ทุกจักรวาล",
    description: "ตัวแม่แคร์ทุกจักรวาล",
    quote: "ทุกคนกินข้าวยัง? เติมน้ำมั้ย? หนาวป่าวลูก?",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 100 },
      { label: "สกิลเลือกของขวัญ", value: 95 },
      { label: "สกิลเทศนา", value: 80 }
    ],
    warning: "ห้ามบอกว่า 'ไม่เป็นไร' นางจะยิ่งห่วง",
    bestMatch: "INFP (ลูกรักหัวแก้วหัวแหวน)",
    nemesis: "ISTP (พวกเย็นชา ไร้หัวใจ)",
    image: "/images/characters/enfj.webp"
  },
  ENFP: {
    id: "ENFP",
    title: "The Hyper Elf - เอลฟ์ดีดกะโหลก",
    description: "พลังงานนิวเคลียร์",
    quote: "แกกก! ดูนี่ดิ! น่ารักป่ะ! กรี๊ดดด! ไปเต้นกัน!",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 100 },
      { label: "สกิลเลือกของขวัญ", value: 50 },
      { label: "สมาธิสั้น", value: 100 }
    ],
    warning: "เตรียมยาดมไว้ให้เพื่อนด้วย เพราะตามไม่ทัน",
    bestMatch: "INTJ (คนนิ่งๆ ที่เราชอบไปวอแว)",
    nemesis: "ISTJ (ครูฝ่ายปกครองสุดโหด)",
    image: "/images/characters/enfp.webp"
  },
  ISTJ: {
    id: "ISTJ",
    title: "The System - มนุษย์ Excel",
    description: "เป๊ะจนเพื่อนเครียด",
    quote: "ใบเสร็จค่าของขวัญอยู่ไหน? ต้องลงบัญชีนะ",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 20 },
      { label: "สกิลเลือกของขวัญ", value: 40 },
      { label: "ความเป๊ะ", value: 100 }
    ],
    warning: "ห้ามทำแก้วแตก เดี๋ยวโดนหักเงิน",
    bestMatch: "ESFP (ตัวสร้างสีสันที่ขาดไม่ได้)",
    nemesis: "ENFP (ตัวทำลายระบบระเบียบ)",
    image: "/images/characters/istj.webp"
  },
  ISFJ: {
    id: "ISFJ",
    title: "The Guardian Angel - เทวดาประจำกลุ่ม",
    description: "ผู้เสียสละ",
    quote: "ไม่เป็นไรแก เราทำเอง แกไปสนุกเถอะ (เก็บจานเงียบๆ)",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 50 },
      { label: "สกิลเลือกของขวัญ", value: 90 },
      { label: "สกิลแม่บ้าน", value: 100 }
    ],
    warning: "อย่าลืมขอบคุณ ไม่งั้นเขาจะน้อยใจลึกๆ",
    bestMatch: "ESTP (คนที่เขาอยากดูแล)",
    nemesis: "ENTP (ตัวร้ายทำลายจิตใจ)",
    image: "/images/characters/isfj.webp"
  },
  ESTJ: {
    id: "ESTJ",
    title: "The Event Manager - ผอ.กองปาร์ตี้",
    description: "ชี้สั่งดั่งใจนึก",
    quote: "ต้นคริสต์มาสเอียงซ้ายไป 2 องศา แก้เดี๋ยวนี้!",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 80 },
      { label: "สกิลเลือกของขวัญ", value: 70 },
      { label: "เจ้ากี้เจ้าการ", value: 100 }
    ],
    warning: "ห้ามอู้งานต่อหน้านาง โดนเชือดแน่",
    bestMatch: "ISFP (ลูกน้องหัวอ่อน)",
    nemesis: "INFP (พวกอ่อนไหว ไร้สาระ)",
    image: "/images/characters/estj.webp"
  },
  ESFJ: {
    id: "ESFJ",
    title: "The Gossip Queen - ซานต้าขาเม้าท์",
    description: "รู้โลกรู้",
    quote: "อุ๊ย! อย่าบอกใครนะ... คือเรื่องมันเป็นงี้แก!",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 100 },
      { label: "สกิลเลือกของขวัญ", value: 85 },
      { label: "สกิลปล่อยข่าว", value: 100 }
    ],
    warning: "ความลับไม่มีในโลก ถ้าบอกคนนี้",
    bestMatch: "ISTP (ผู้ฟังที่ดี ฟังอย่างเดียว)",
    nemesis: "INTP (มนุษย์ต่างดาวคุยไม่รู้เรื่อง)",
    image: "/images/characters/esfj.webp"
  },
  ISTP: {
    id: "ISTP",
    title: "The Cool Fixer - ช่างซ่อมหน้านิ่ง",
    description: "เท่จนงง",
    quote: "ไฟดับเหรอ? หลบไป... (ซ่อมเสร็จใน 2 วิ)",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 10 },
      { label: "สกิลเลือกของขวัญ", value: 30 },
      { label: "ความ Cool", value: 100 }
    ],
    warning: "อย่าเซ้าซี้ เขารำคาญคนพูดมาก",
    bestMatch: "ESFJ (ขาลุยที่เคมีเข้ากัน)",
    nemesis: "ENFJ (พวกโลกสวยเกินเหตุ)",
    image: "/images/characters/istp.webp"
  },
  ISFP: {
    id: "ISFP",
    title: "The Aesthetic - ศิลปินอินดี้",
    description: "คุมโทนไอจีเป็นชีวิตจิตใจ",
    quote: "มุมนี้แสงไม่ได้อะแก ขยับซ้ายหน่อย... นั่นแหละ!",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 40 },
      { label: "สกิลเลือกของขวัญ", value: 100 },
      { label: "ความตรงต่อเวลา", value: 0 }
    ],
    warning: "ห้ามแท็กรูปที่นางยังไม่แต่งหน้า",
    bestMatch: "ESTJ (คนคุมที่นางแอบกลัว)",
    nemesis: "ENTJ (บอสจอมเผด็จการ)",
    image: "/images/characters/isfp.webp"
  },
  ESTP: {
    id: "ESTP",
    title: "The Party Animal - ตัวตึงสายลุย",
    description: "ยิ่งห้ามนี่ยิ่งยุ",
    quote: "หมดแก้วป่ะล่ะ? หรือกลัว? จัดไปวัยรุ่น!",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 100 },
      { label: "สกิลเลือกของขวัญ", value: 50 },
      { label: "ความหาทำ", value: 100 }
    ],
    warning: "ระวังโดนท้าให้กินอะไรแปลกๆ",
    bestMatch: "ISFJ (คนคอยตามเช็ดตามล้าง)",
    nemesis: "INFJ (แม่ชีผู้เคร่งครัด)",
    image: "/images/characters/estp.webp"
  },
  ESFP: {
    id: "ESFP",
    title: "The Superstar - ตัวมารดาแห่งวงการแสงสี",
    description: "ตัวมารดาแห่งวงการแสงสี",
    quote: "กล้องอยู่ไหน? ฉันอยู่นั่น!",
    stats: [
      { label: "ความอึดปาร์ตี้", value: 100 },
      { label: "สกิลเลือกของขวัญ", value: 80 },
      { label: "ความหิวแสง", value: 100 }
    ],
    warning: "อย่าแย่งไมค์ ถือว่าขอ",
    bestMatch: "ISTJ (คนดูที่นั่งมองแบบงงๆ)",
    nemesis: "INTJ (คนขวางโลกที่น่ารำคาญ)",
    image: "/images/characters/esfp.webp"
  }
};

// Export as MBTI_CHRISTMAS_CHARACTERS for backward compatibility
export const MBTI_CHRISTMAS_CHARACTERS = CHRISTMAS_CHARACTERS;
