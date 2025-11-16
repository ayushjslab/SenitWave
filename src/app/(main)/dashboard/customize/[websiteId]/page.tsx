"use client"
import FeedbackCustomizer from '@/components/custom/customization'
import { useParams } from 'next/navigation';

const CustomizePage = () => {
      const { websiteId } = useParams();
  return (
    <div>
      <FeedbackCustomizer websiteId={websiteId as string} />
    </div>
  );
}

export default CustomizePage
