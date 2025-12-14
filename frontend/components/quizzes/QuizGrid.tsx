import Link from 'next/link';
import Image from 'next/image';

interface Quiz {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  slug: string;
  questionCount: number;
  badge?: {
    text: string;
    emoji: string;
  };
}

/**
 * Quiz grid component.
 * 
 * Displays a grid of quiz cards with images, titles, and metadata.
 */
export default function QuizGrid() {
  const quizzes: Quiz[] = [
    {
      id: '1',
      title: 'ความยุ่งเหยิงปาร์ตี้ออฟฟิศ',
      description: 'คุณเป็นคนดราม่า คนดีเจ หรือคนที่ร้องไห้ในห้องน้ำ? ค้นหาคำตอบ',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAbrpcn2Fd2Ul_XF0KrL1AvQARTFX_rtGDXF91JamQE82SnrOEevQRfx0k5fLkacLKVQ-5pGLRL7JDjn3GoZN1xgHJNjEXFMDC4lCzqhHTcsz63VR8hS5G9z16L5_Cx9rnbyiE8eVJzswGUg74Pf0aOCbtiew5aeYxxiIRy7MABJmUz0c3jnlrxzH4kvSXi9N3_Q4FoZ7-nDPoiX7ddkytfKubiKVOE09rPa3YeO0lfv3Wkto0fSlo_i3CyDAfKq22xoSV18xORhpFN',
      imageAlt: 'Messy office desk with christmas decorations and spilt coffee',
      slug: 'office-party-mess',
      questionCount: 7,
      badge: { text: '12k เล่น', emoji: '🔥' },
    },
    {
      id: '2',
      title: 'พยากรณ์ความรัก 2024',
      description: 'คุณจะพบใครสักคนใต้มิสเซิลโทหรือแค่ดูหนัง Hallmark คนเดียว?',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC2zn27vTAI4LxPLdF-zziQyg9-uSax1YJ5fcUT01APwX22JB07VLxJUru86LwxlwX1PDYux07hBgkUYU9QbrpgTxGeMO5r7xNKX1mGL7EdE1Mn7O50vlO3wNqwh_PrvSwvNKSxNOMY9z-LQtJq0wDp9-zvR4h2g_krzUFJlI89FujYi4bbdqMdrKqAdg_yYvPnt9n6GIo61CJ6CPJXbJtYyocxj4TGiBluKf_NTzVl_06IfxEnsUDjvjbZGaLZrqa_gbmBOLI_PGZg',
      imageAlt: 'Two hands holding mugs of hot cocoa in a snowy romantic setting',
      slug: 'love-forecast-2024',
      questionCount: 10,
      badge: { text: 'กำลังฮิต', emoji: '💖' },
    },
    {
      id: '3',
      title: 'คุณเป็นของขวัญอะไร?',
      description: 'คุณเป็นถุงเท้าที่มีประโยชน์หรือความผิดพลาดราคาแพงที่คืนไม่ได้?',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC05kcfW-A61pywT3PyNeLDslDNw5EcmGPhAP9GugMpaO5XqEgekfN37OaSJj5QxSAM6csvI00Jt2hi6e390300vmTO8AtE7qJbXlxTZp8UvCifVaepNgUECrj6LlN4CjExlgroc_AmCtiQW6Guf03cmr-nI6jf57yYavZHVUU918CzvSarui2-DdkzyU2K-Y2c760sjfbLXx4Nu6wgoYab1htOlcB7AegxzhczMcXZoF79uXXBx-xCaw6PhMrNx43_hGZ5X28Bbr4-',
      imageAlt: 'A pile of colorful wrapped christmas gifts',
      slug: 'what-gift-are-you',
      questionCount: 5,
    },
    {
      id: '4',
      title: 'รายชื่อหมดไฟของซานต้า',
      description: 'สำหรับผู้ที่พยายามเต็มที่ในปีนี้แต่กำลังแขวนอยู่',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAh6eW7-el7bBW62K4ELZ0ZD_P_FqK5_zqMXNqYhWn-rB0jWdwyTFnCjXkwnXm8UbUpeSR8GU2YYCgeKfA42yNMWnHp_s-KQ6dEUkMzeDUUQVTZObHHGm03oWymZdnGzCY8weaG6e3XnSh8XldGh8hW5lMsONWutsLTSCIhBZhip9PkRjwqqVHHzO3nQtA9ydXLzoDx6GdlV0BEQjx8dV1hrhcLll7sscYNf0rvdK4JYKQVcrhfExw1kihF8ytENw6kHR8oXbdp_P2d',
      imageAlt: 'A tired santa claus resting his head on a table',
      slug: 'santas-burnout-list',
      questionCount: 8,
      badge: { text: 'ใหม่', emoji: '🆕' },
    },
    {
      id: '5',
      title: 'สเกลกรินช์',
      description: 'คุณเกลียดเพลงคริสต์มาสมากแค่ไหน? ซื่อสัตย์หน่อย',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBPl8uePJhyiqD8qDP0xWS-b9DKIV8GkTGeNvcZ7NWzS3M5X8mvw7oBNeFho3rma7TSkWdkq8R6bkYkU5YBfSIRM5VAMPqP6_SCPlhZ9tHQ5lBmlT7y83flSNUP6k-Tp8wcZNi5tURnXvuMyysa1l6Dx84RXQy-6Wk3ju27BA5dOXpWz6dmD_Tpo5elKOMqarNiEEx97lkDbHAP1g3aMPp49fMWc8npk97BIktQYkzqz7A3u5DLEoSzlgF_5fNL3pcgEJnT7sDdsU_9',
      imageAlt: 'Close up of a green grinch mask or costume',
      slug: 'grinch-scale',
      questionCount: 6,
    },
    {
      id: '6',
      title: 'บุคลิกภาพกวางเรนเดียร์',
      description: 'คุณเป็นผู้นำเหมือนรูดอล์ฟหรือแค่มาที่นี่เพื่อของว่างเหมือนบลิตเซน?',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA-DZmxCEhhH2jGu4CLe3JF_5c9lhSPXT1Yn5iRJkIQkJbRaC4tts9-j4VBHXkszN2-8XnLlp3w1-davQWXuGzn-rMGptz8hgveXGtkjm3eiHvi_O-G2PDLmLMuyWWTNV2fZkFxps8FBTjnjCa1ypWqyIE__Ol3cCVvt5Iw2TGC6cgJnLOg3ATP5vVK1wKgHhTZdXfFXf0J1Y5lD78-PwvZ6EIyZu8IDeIBKoTS6BYOT5Cr_G2mnzKFQoBDkbm8BWijCMR4MpdkIg2s',
      imageAlt: 'A reindeer in snow looking at the camera',
      slug: 'reindeer-personality',
      questionCount: 9,
    },
    {
      id: '7',
      title: 'เช็คออร่าคุกกี้',
      description: 'วิบวับของคุณอธิบายเป็นขนมวันหยุด หวาน เผ็ด หรือมีถั่ว?',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDKuNSPtFZoy7TQltqXeg6VZPJTbKAO5VZAOXSxdz083Av3WRjUR3yGCH4gcgaEm5irden3k1HsO3JgHyYp8vOVCcG7Y_qRS2_ozCfnOkxilW0Vq9DtTlncl1Zs6fmYY89QQMVyrhBe0v2_KHGEzo31njNqn4O4iXxjJt80YfJ4b0LnqEAgVDtomtukbw7YOcsBkd1KFEaIU1GkNADHE6LucIaxfgMW2RjTy9KZnJZdY1nmfa5LllfW0L-sxF38Q8KekiAWl_IhmUwM',
      imageAlt: 'Cozy scene with cookies and milk by a fireplace',
      slug: 'cookie-aura-check',
      questionCount: 4,
    },
    {
      id: '8',
      title: 'พลังงานตัวละครหลัก',
      description: 'ภาพยนตร์วันหยุดแบบไหนที่ชีวิตคุณกำลังเลียนแบบอยู่?',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBlT0L79vMi8q3qj69GrIawjLXkBUnYLFgCIt8C7Sxs-0--XoJT_ZIWXtY3GbdWrrp5-S2sVT5tI9LlusEm6lzp9M0nUu1JTsM1GpX1pyCQij-PovyjZoMnHgkBQa1oMwIwcUhtYqMF82LrYAJG7Ra7qSYqVDyg0XNaaZ9r4FmrVA0mmby-rA29C5F1OnF2xIvN4r1goixkXihqhtCwOvTAcidhexF1mUJOORVjipxs9AsoOIOG4XRg3Pp83dvAkM7RbPNOCafO8M2q',
      imageAlt: 'Snowy city street at night with christmas lights',
      slug: 'main-character-energy',
      questionCount: 12,
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {quizzes.map((quiz) => (
        <article
          key={quiz.id}
          className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl bg-[#2a1d1d] p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-[#322424] hover:shadow-xl hover:shadow-primary/10"
        >
          <Link
            href={`/quizzes/${quiz.slug}`}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-xl"
          >
            <Image
              src={quiz.imageUrl}
              alt={quiz.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            {quiz.badge && (
              <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                {quiz.badge.emoji} {quiz.badge.text}
              </div>
            )}
          </Link>
          <div className="flex flex-1 flex-col px-2 pb-2">
            <Link href={`/quizzes/${quiz.slug}`}>
              <h3 className="mb-1 text-lg font-bold leading-tight text-white transition-colors group-hover:text-primary">
                {quiz.title}
              </h3>
            </Link>
            <p className="mb-4 text-sm text-[#b99d9d] line-clamp-2">{quiz.description}</p>
            <div className="mt-auto flex items-center justify-between border-t border-[#392828] pt-3">
              <span className="text-xs font-medium text-[#b99d9d]">{quiz.questionCount} คำถาม</span>
              <Link
                href={`/quizzes/${quiz.slug}`}
                className="flex size-8 items-center justify-center rounded-full bg-white text-black transition-colors group-hover:bg-primary group-hover:text-white"
                aria-label={`Start ${quiz.title} quiz`}
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  play_arrow
                </span>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

