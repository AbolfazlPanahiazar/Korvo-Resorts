import { FC } from "react";
import { BsPlusLg } from "react-icons/bs";

export const ResortCard: FC = () => {
  return (
    <div className="overflow-hidden rounded-md shadow-lg">
      <div className="w-full">
        <img
          className="w-full"
          src="https://media.cntraveler.com/photos/5f68161d68f371240312a111/master/w_400%2Cc_limit/Anantara-Al-Jabal-Al-Akhdar-Resort.jpg"
          alt="asdf"
        />
      </div>
      <div className="p-2 flex flex-col">
        <span className="font-bold">
          Anantara Al Jabal Al Akhdar Resort — Nizwa, Oman
        </span>
        <span className="text-gray-600 mt-1">price: 540$</span>
        <p className="text-sm text-gray-600 text-justify mt-1">
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
          unexpected and wonderfully extreme locations.`.substring(0, 200) +
            "..."}
        </p>
        <div className="mt-1 flex justify-end">
          <button className="bg-sky-800 text-white w-10 h-10 rounded flex justify-center items-center">
            <BsPlusLg size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
