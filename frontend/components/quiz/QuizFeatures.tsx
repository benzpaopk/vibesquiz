/**
 * Quiz features section component.
 * 
 * Displays key features and benefits of the quiz.
 */
export default function QuizFeatures() {
  const features = [
    {
      icon: 'auto_awesome',
      title: 'แม่นยำ',
      description:
        'ผลลัพธ์วิเคราะห์จากลักษณะบุคลิกภาพจริงของคุณ ไม่มีน้ำ รับประกันความแม่นยำ',
      color: 'yellow',
    },
    {
      icon: 'ios_share',
      title: 'แชร์ไปสตอรี่ทันที',
      description: 'การ์ดผลลัพธ์สวยงาม 9:16 พร้อมโชว์ให้เพื่อนๆ ของคุณ',
      color: 'pink',
    },
    {
      icon: 'palette',
      title: 'ดีไซน์เฉพาะตัว',
      description:
        'กราฟิกธีมคริสต์มาสสมัยใหม่ที่ผสมผสานวิบวับวันหยุดกับสไตล์ร่วมสมัย',
      color: 'indigo',
      fullWidth: true,
    },
  ];

  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#181111] dark:text-white leading-tight">
            ทำไมต้องทำ
            <br />
            แบบทดสอบนี้?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            ค้นพบตัวตนที่แท้จริงของคุณผ่านคำถามสนุกๆ ที่อิงจากจิตวิทยา
            ออกแบบมาเฉพาะสำหรับ Gen Z
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-[2] w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-[#543b3b] bg-white dark:bg-[#2a1a1a] p-6 hover:-translate-y-1 transition-transform duration-300 ${
                feature.fullWidth ? 'sm:col-span-2' : ''
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  feature.color === 'yellow'
                    ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                    : feature.color === 'pink'
                      ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
                      : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                }`}
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  {feature.icon}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#181111] dark:text-white text-lg font-bold">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-[#b99d9d] text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
