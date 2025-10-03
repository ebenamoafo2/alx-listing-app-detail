// components/property/ReviewSection.tsx
import Image from "next/image";
import { Review } from "@/interfaces";

interface ReviewSectionProps {
  reviews: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <div className="flex items-center mb-2">
            <Image
              src={review.avatar}
              alt={review.name}
              width={48}
              height={48}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-bold">{review.name}</p>
              <p className="text-yellow-500">{review.rating} stars</p>
            </div>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
