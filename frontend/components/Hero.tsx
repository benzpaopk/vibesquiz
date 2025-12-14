'use client';

import Link from 'next/link';
import Image from 'next/image';

/**
 * Hero section component.
 * 
 * Displays main heading, description, CTA buttons, and hero image.
 */
export default function Hero() {
  return (
    <div className="w-full max-w-[1200px] px-4 md:px-10 py-10 md:py-16">
      <div className="@container">
        <div className="flex flex-col gap-8 md:gap-12 lg:flex-row items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6 lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit mx-auto lg:mx-0">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                auto_awesome
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">กำลังฮิต</span>
            </div>

            <h1 className="text-gray-900 dark:text-white text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-[-0.033em]">
              ตกแต่ง <span className="text-primary">เทศกาล</span>
            </h1>

            <h2 className="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              ค้นพบเอลฟ์ในตัวคุณ ทำแบบทดสอบบุคลิกภาพวันหยุดที่ยอดเยี่ยมวันนี้และค้นหาว่า
              วิบวับเทศกาลไหนที่เข้ากับจิตวิญญาณของคุณ
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                href="/quizzes/who-are-you-on-christmas-day/question/1"
                className="flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-primary hover:bg-red-700 text-white text-base font-bold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  play_arrow
                </span>
                <span>เริ่มเล่นเลย</span>
              </Link>
              <Link
                href="/quizzes"
                className="flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary/50 text-gray-900 dark:text-white text-base font-bold transition-all"
              >
                <span>สำรวจธีม</span>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full aspect-square max-w-[500px] rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdNMpQKrifV7ref8iOsTY9XU7DPNMLEFsfx41BhmJyrocd-C1jbpkcb2UpuMfTjIQcXiTdAu10atIy_WkbO0Gze0xTm30pT5tFcZirKVkMj1uGioDNx--7ATTjosLcGVyD6X4FkTSFj5MtjSEAaeM-fLRBTpYFYRTiOmNn2BqfR-VnBqw2le8GWyAb6csQzsyEn0ZHWRTPRIrd8knIAayOdjybon-S5RMMn9aDXFthsLGP7vds1-1vB47Q5TAtflfCnhPp9ZWMvNb-"
                alt="Vibrant 3D illustration of a cool Santa with sunglasses and streetwear holding a gift box"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-black/80 backdrop-blur-sm p-4 rounded-2xl z-20 shadow-lg border border-white/10 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-gray-300"
                      aria-label={`User avatar ${i}`}
                    />
                  ))}
                </div>
                <div className="text-xs font-bold text-gray-900 dark:text-white">
                  <span className="text-primary">14k+</span> คนเล่นวันนี้
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
