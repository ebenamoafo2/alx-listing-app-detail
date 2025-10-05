import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p className="p-6">Property not found</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main content */}
        <div className="flex-1">
          <PropertyDetail property={property} />

          {/* Reviews section below the property details */}
          <ReviewSection reviews={property.reviews} />
        </div>

        {/* Booking section on the right */}
        <div className="w-full lg:w-1/3">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
}
