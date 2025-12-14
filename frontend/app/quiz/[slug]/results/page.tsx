'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import QuizResults from '@/components/quiz/QuizResults';
import { getQuizSession, completeQuizSession } from '@/lib/quiz-session';

interface ResultsPageProps {
  params: {
    slug: string;
  };
}

/**
 * Quiz results page component.
 * 
 * Displays quiz results based on answers and allows sharing.
 */
export default function ResultsPage({ params }: ResultsPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session');
  const slug = params.slug as string;

  const [results, setResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      router.replace(`/quiz/${slug}/start`);
      return;
    }

    const session = getQuizSession(sessionId);
    if (!session || session.slug !== slug) {
      router.replace(`/quiz/${slug}/start`);
      return;
    }

    // Calculate and load results
    loadResults();
  }, [sessionId, slug, router]);

  const loadResults = async () => {
    try {
      setIsLoading(true);
      const session = getQuizSession(sessionId!);
      
      if (!session) {
        setError('Session not found');
        return;
      }

      // Check if quiz is completed (all 10 questions answered)
      if (!session.answers || session.answers.length < 10) {
        // If we're close (9 answers), the last one might be in transit
        // Wait a bit and check again
        await new Promise((resolve) => setTimeout(resolve, 200));
        const updatedSession = getQuizSession(sessionId!);
        if (updatedSession && updatedSession.answers && updatedSession.answers.length >= 10) {
          session.answers = updatedSession.answers;
        } else {
          setError('แบบทดสอบยังไม่เสร็จสมบูรณ์ กรุณาตอบคำถามทั้ง 10 ข้อ');
          return;
        }
      }

      // Ensure we have exactly 10 answers (pad if needed for safety)
      while (session.answers.length < 10) {
        session.answers.push('A');
      }

      // In production, calculate results via API
      const calculatedResults = calculateResults(session.answers);
      setResults(calculatedResults);

      // Mark session as completed
      completeQuizSession(sessionId!);
    } catch (err) {
      setError('Failed to load results');
      console.error('Error loading results:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateResults = (answers: string[]) => {
    // Mock result calculation
    // In production, this would be done server-side
    const resultTypes = [
      {
        character: 'เอลฟ์ยุ่งเหยิง',
        description:
          'คุณบอกว่าคุณจะซื้อของขวัญในเดือนพฤศจิกายน แต่ตอนนี้คุณกำลังช้อปปิ้งแบบตื่นตระหนกในวันที่ 24 ลักษณะที่เป็นพิษของคุณคือการกินคุกกี้ทั้งหมดก่อนที่ซานต้าจะมาถึงและโทษสุนัข คุณเป็นชีวิตของปาร์ตี้ แต่เป็นความตายของแผนที่จัดระเบียบใดๆ',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCm0w85ZaKTbiIspPRaoDjvhiPny_fRci40pnLiLbetsZ0wfZYWZvvl5Q9Buv6ItSFP9Vh340KWbwtULtd5Ybhx5hUao6VIO-AmpUNgrhNkuI4SE1WZ1wLbnlJjkvf9bSc_nm6K963HBJdZGYLVw9ZaOb7G2xKIC7FYPFJKf4nE3fBXh5jaAt9hdCLDoftb82e2gH1-d_g8jGb_xzwLdZt_XOJUCfEwIxoY-iCYrBNLOPGaF7v99XqjPBjrssjzMjoczWiSuwiCA_ro',
        archetype: 'Archetype #042',
        stats: { naughtiness: 95, holidaySpirit: 12 },
      },
      {
        character: 'ซานต้าที่ใจดี',
        description:
          'คุณเป็นเพื่อนที่จำคุกกี้โปรดของทุกคนและส่งการ์ดตรงเวลา จิตวิญญาณวันหยุดของคุณไม่มีใครเทียบได้ และคุณทำให้ทุกคนรู้สึกพิเศษ คุณน่าจะเริ่มช้อปปิ้งในเดือนกรกฎาคม',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAdNMpQKrifV7ref8iOsTY9XU7DPNMLEFsfx41BhmJyrocd-C1jbpkcb2UpuMfTjIQcXiTdAu10atIy_WkbO0Gze0xTm30pT5tFcZirKVkMj1uGioDNx--7ATTjosLcGVyD6X4FkTSFj5MtjSEAaeM-fLRBTpYFYRTiOmNn2BqfR-VnBqw2le8GWyAb6csQzsyEn0ZHWRTPRIrd8knIAayOdjybon-S5RMMn9aDXFthsLGP7vds1-1vB47Q5TAtflfCnhPp9ZWMvNb-',
        archetype: 'Archetype #001',
        stats: { naughtiness: 5, holidaySpirit: 98 },
      },
      {
        character: 'กรินช์',
        description:
          'คุณไม่ใช่สัตว์ประหลาด คุณแค่คิดว่าเพลงวันหยุดควรผิดกฎหมายจนถึงวันที่ 1 ธันวาคม คุณชื่นชมความรู้สึก แต่สามารถทำได้โดยไม่ต้องยุ่งเหยิง ลึกๆ แล้วคุณรักมันอย่างลับๆ',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCEPSzZIDds1z70CcJTYLPY9OqaRgW4KW7MmjT8KZoXoiW8PzNZe8Vk_MtSqkNjWkV59zhz48xOZ3ufZAdVMTqwvcAsixzZhLkynHZb_VMFEHKAHKTX9obXYZUTX_Zu6HnYc3IFggIqBILdeVPrXrgeFCRCrpfKObvSQUMKa2USpD-LzDoUquIQ7vWfSRkgUBwBtlHiTmh_726YeJymZFQacaC4W2n_xEoDW9CSKeqyU9El1lvPRAivjj2IinTjjCQ2BFYhLn1ZVDQd',
        archetype: 'Archetype #066',
        stats: { naughtiness: 45, holidaySpirit: 25 },
      },
    ];

    // Simple calculation based on answers
    const resultIndex = answers.reduce((sum, answer) => {
      const value = answer.charCodeAt(0) - 64; // A=1, B=2, etc.
      return sum + value;
    }, 0) % resultTypes.length;

    const result = resultTypes[resultIndex];
    
    return {
      character: result.character,
      description: result.description,
      imageUrl: result.imageUrl,
      shareText: `ฉันได้ "${result.character}" บน VibeQuiz!`,
      archetype: result.archetype,
      stats: result.stats,
    };
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-primary" />
          <p className="mt-4 text-gray-600 dark:text-gray-400">กำลังคำนวณผลลัพธ์ของคุณ...</p>
        </div>
      </div>
    );
  }

  if (error || !results) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <p className="text-red-500">{error || 'ผลลัพธ์ไม่พร้อมใช้งาน'}</p>
          <Link
            href={`/quizzes/${slug}`}
            className="mt-4 inline-block rounded-full bg-primary px-6 py-2 text-white"
          >
            กลับไปแบบทดสอบ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <QuizResults
        results={results}
        sessionId={sessionId!}
        quizSlug={slug}
      />
    </div>
  );
}
