import QuizCard from './QuizCard';

interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryIcon: string;
  imageUrl: string;
  imageAlt: string;
  badge?: 'popular' | 'new';
  slug: string;
}

/**
 * Quiz collections section component.
 * 
 * Displays a grid of quiz cards with different themes.
 */
export default function QuizCollections() {
  const quizzes: Quiz[] = [
    {
      id: '1',
      title: 'คลาสสิก',
      description:
        'ทดสอบความรู้ของคุณเกี่ยวกับเรื่องราววันหยุดแบบดั้งเดิม คุณเป็นผู้เชื่อตัวจริงหรือแค่มาที่นี่เพื่อคุกกี้?',
      category: 'ดั้งเดิม',
      categoryIcon: 'cookie',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBuqSFwkvWWZ7IVPM0OQzhfBSBUcCp9BkqLdorkKsEAQdFj-H8JymcJh1o3Bx6uFkAw9W_z-xJhxGSIjjVSjkNuZ0Bv8728MWFa-ZpwrGo670UiwcghBGHWZi91PN7D2CQ1RM9hOwLtDutJnKhfuyLB5FCF5X1LkzbhGrlQ6d2ZXRDVXCM4YKrLx8PL77ICqzHYWIK0KEmEBuSqxg9tiVurZKlt5jN2LF7qA8lD6g5SMuKoljtfFtL-KYBmBXwuH6fSWVXUJyQajs1c',
      imageAlt: 'Cozy fireplace with stockings and traditional Christmas tree decoration',
      badge: 'popular',
      slug: 'the-classics',
    },
    {
      id: '2',
      title: 'เช็ควิบวับ',
      description:
        'สุนทรียภาพวันหยุดไหนที่เข้ากับเพลย์ลิสต์ของคุณ? จาก Y2K Christmas ไปจนถึง Cottagecore Winter',
      category: 'Gen Z',
      categoryIcon: 'headphones',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBLdBDsHGnHiCiSgODBAyihOxYsNjJmLFGikFsqs1KCw_7RUzKfuIDRJG3LpxwSHSynZ5j2nSSjKBr1vhsiq0MfiSbTmyTkJbyx9iv_yIoQfF5foZdxcGw-NiOZP9eQ-OCrY-kr-PJAUyRTHeYijrjxNfhuJjDIFjb1c_L3J2DEbAD3l4k7YebP4EVvd4CcxC8L6fOlLhmnGD6mk9Tho87pLiD_ITVn_4q7O_wlzEp5vnLeiF6JNkgFW1BXL8i9BWj4MeFtjb0znRNa',
      imageAlt: 'Neon lit Christmas tree with cyberpunk aesthetic and vibrant colors',
      badge: 'new',
      slug: 'vibe-check',
    },
    {
      id: '3',
      title: 'กูรูของขวัญ',
      description:
        'คุณเป็นคนช้อปปิ้งนาทีสุดท้ายหรือนักวางแผนที่รอบคอบ? ค้นหาบุคลิกภาพการให้ของขวัญของคุณ',
      category: 'บุคลิกภาพ',
      categoryIcon: 'redeem',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDFV6XPscGv280K-d_yLilMLmfWxiwu9PE5HXzHAYbOeExEjcCnr55Urzib6XvzESk8Di4v6AM10s7Qn2cUEbAE-YSQAs_pu7XoXiyha_lD5DR9bRxPG1gQfaEDTbs8TaQDMJV3waOIBEwcJ_j9oP4gRGYj_rhpAaYQNo2Mg4akF-H5Gw6wY90dQUkFWMJJZYt01j2xVN-ToCYpcdduTts8G5quPcDY4RwEfjin9J3GB-gvi21BYERAWpDGcxfKuQBGbuNS0z3Yoyg9',
      imageAlt: 'Abstract flat illustration of wrapped gifts with geometric patterns',
      slug: 'gift-guru',
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="w-full max-w-[1200px] px-4 md:px-10 pt-16 pb-8 text-center">
        <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black leading-tight mb-3">
          เลือกธีมวันหยุดของคุณ
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          สำรวจคอลเลกชันแบบทดสอบบุคลิกภาพเทศกาลที่คัดสรรแล้วของเรา จากคลาสสิกที่น่าจดจำ
          ไปจนถึงวิบวับสมัยใหม่
        </p>
      </div>

      {/* Quiz Grid */}
      <div className="w-full max-w-[1200px] px-4 md:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </div>
    </>
  );
}
