import React from "react";
import { LuUser2 } from "react-icons/lu";
import { propertyDetailType } from "@/lib/properties";
import { fetchProfileBYId } from "@/lib/actions";
async function RenterHomeInfo({ property }: { property: propertyDetailType }) {
  const { name, imageUrl, price } = property;
  const { country, id: propertyId, tagline } = property;
  const { category, description, bed, bedroom, guests, bath, renterId } =
    property;

  const profile = await fetchProfileBYId({ renterId });
  return (
    <section>
      <div>
        <div>
          <div>
            <h1 className="font-bold text-xl capitalize">
              {" "}
              {category} in {country}
            </h1>
          </div>
          <ul className="flex flex-row space-x-6 ml-4 list-disc">
            <li>{bedroom} bedrooms</li>
            <li>{bath} baths</li>
            <li>{bed} beds</li>
            <li>{guests} guests</li>
          </ul>
        </div>
        <div className="flex flex-row space-x-2 mt-3">
          <div>
            <img
              src={profile.profileImage}
              alt="profile image"
              className="w-12 h-12 rounded-md object-cover"
            />
          </div>
          <div>
            <p>
              Hosted by{" "}
              <span className="font-semibold capitalize">
                {profile.firstName} {profile.lastName}
              </span>
            </p>
            <p className="text-muted-foreground text-md">
              Super host. 2 years hosting
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RenterHomeInfo;
