import { FC } from "react";
import { BsPlusLg } from "react-icons/bs";

import { PageContainer } from "components/common";

const ResortDetails: FC = () => {
  return (
    <PageContainer>
      <div className="p-3">
        <h1 className="font-bold">Resort Details</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-sky-900 text-white p-5 rounded-md">
        <div className="max-w-2xl">
          <h1 className="font-bold text-xl mb-2">
            Little Palm Island Resort & Spa — Little Torch Key, Florida
          </h1>
          <span className="text-gray-300">price: 525$</span>
          <p className="text-md text-gray-300 text-justify mt-2">
            {`Set in the sunburnt Al-Hajar mountains, on the rim of the Arabian
          Peninsula’s most outrageously beautiful canyon, is Anantara Al Jabal
          Al Akhdar Resort—the region’s most ambitious wilderness hotel. The
          space has souped up Oman’s wild frontier to the max, with chasm-facing
          pool villas, majlis-style courtyards, a lantern-lit outdoor hookah
          space, and super-slick service. This being the splashy Gulf of Oman,
          there has to be a superlative or two: The hotel has the highest
          swimming pools, tennis court, and stargazing platform in the Middle
          East. But its real essence is pure escapism, whether rappelling down
          the side of a mountain or relaxing in the impeccable spa with its
          energizing hammam rituals and fragrant frankincense oils. It’s a bold,
          almost transcendental experiment in off-the-map tourism, and at the
          vanguard of a growing number of Middle Eastern hotels opening in
          unexpected and wonderfully extreme locations.`}
          </p>
          <button className="text-white bg-green-600 flex items-center p-2 w-full justify-center rounded mt-2">
            Add to Bucket <BsPlusLg size={18} className="ml-2" />
          </button>
        </div>
        <div>
          <img
            className="w-full rounded-md"
            src="https://media.cntraveler.com/photos/5f67bd59978ff785b2501615/master/w_400%2Cc_limit/taj-exotica-goa.jpg"
            alt="asdf"
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default ResortDetails;
