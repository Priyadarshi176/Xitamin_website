import { useState } from "react";

export default function Calculator() {
  const [category, setCategory] = useState("Electronics");
  const [subCategory, setSubCategory] = useState("Mobile Phone");
  const [enterPrice, setEnterPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [area, setArea] = useState("Local");
  const [shippingMethod, setShippingMethod] = useState("EasyShip");
  const [stepLevel, setStepLevel] = useState("Basic");
  const [gst, setGst] = useState("18");
  const [result, setResult] = useState(null);
  const [referalFee, setReferalFee] = useState(0);
  const [closingFee, setClosingFee] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [totalFees, setTotalFees] = useState(0);
  const [GST, setGST] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [profit, setProfit] = useState(0);

  const subCategories = {
    Electronics: ["Mobile Phone", "Laptops", "Assecories", "TV", "Cameras"],
    Fashion: ["Men's Clothing", "Women's Clothing", "Footwear", "Watches"],
    Books: ["Books", "Fiction", "Non Fiction"],
    "Home & Kitchen": [
      "Furniture",
      "Home Decor",
      "Kitchen Appliances",
      "Lighting",
    ],
    "Beauty & Personal Care": ["Skin Care", "Hair Care", "Makeup", "Perfumes"],
    "Toys & Games": ["Games & Puzzles", "Plush Toys", "Other Products"],
  };

  

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;

    setCategory(selectedCategory);
    setSubCategory(subCategories[selectedCategory][0]);
  };

  


  return (
    <>
      <div className="w-full min-h-screen flex justify-center px-4 py-6 sm:px-6 sm:py-8 lg:py-10">
        <div className="w-full max-w-6xl h-full rounded-2xl shadow-2xl overflow-hidden bg-white">
          <div className="w-full bg-[#ff6200] flex justify-center items-center px-4 py-5 text-center">
            <h1 className="text-white text-2xl font-bold sm:text-3xl lg:text-4xl">
              Amazon Price Calculator
            </h1>
          </div>

          <div className="w-full flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/5 p-4 sm:p-5 lg:p-6 flex flex-col justify-start gap-5 border-b-2 border-gray-200 lg:border-b-0 lg:border-r-2">
              <div className="flex flex-col gap-5 sm:flex-row">
                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                  <label className="text-base font-semibold sm:text-lg lg:text-xl">Category</label>

                  <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="w-full min-w-0 border-2 border-gray-300 rounded-xl p-3 text-base outline-none focus:border-[#ff6200] sm:text-lg"
                  >
                    {Object.keys(subCategories).map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                  <label className="text-base font-semibold sm:text-lg lg:text-xl">Sub Category</label>

                  <select
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    className="w-full min-w-0 border-2 border-gray-300 rounded-xl p-3 text-base outline-none focus:border-[#ff6200] sm:text-lg"
                  >
                    {subCategories[category].map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
                <div className="w-full sm:w-1/2 flex flex-col gap-2 sm:gap-3">
                  <label className="text-base font-semibold sm:text-lg lg:text-xl">Enter Price</label>

                  <input
                    type="number"
                    placeholder="Enter Product Price"
                    value={enterPrice}
                    onChange={(e) => setEnterPrice(e.target.value)}
                    className="w-full min-w-0 border-2 border-gray-300 rounded-xl p-3 text-base outline-none focus:border-[#ff6200] sm:text-lg"
                  />
                </div>

                <div className="w-full sm:w-1/2 flex flex-col gap-2 sm:gap-3">
                  <label className="text-base font-semibold sm:text-lg lg:text-xl">Weight</label>

                  <input
                    type="number"
                    placeholder="Enter Weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full min-w-0 border-2 border-gray-300 rounded-xl p-3 text-base outline-none focus:border-[#ff6200] sm:text-lg"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
                <div className="w-full sm:w-1/2 flex flex-col gap-2 sm:gap-3">
                  <label className="text-base font-semibold sm:text-lg lg:text-xl">Area</label>

                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full min-w-0 border-2 border-gray-300 rounded-xl p-3 text-base outline-none focus:border-[#ff6200] sm:text-lg"
                  >
                    <option value="Local">Local</option>
                    <option value="Regional">Regional</option>
                    <option value="National">National</option>
                  </select>
                </div>

                <div className="w-full sm:w-1/2 flex flex-col gap-2 sm:gap-3">
                  <label className="text-base font-semibold sm:text-lg lg:text-xl">
                    Shipping Method
                  </label>

                  <select
                    value={shippingMethod}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="w-full min-w-0 border-2 border-gray-300 rounded-xl p-3 text-base outline-none focus:border-[#ff6200] sm:text-lg"
                  >
                    <option value="EasyShip">EasyShip</option>
                    <option value="Easy Ship Prime">Easy Ship Prime</option>
                    <option value="Self Ship">Self Ship</option>
                    <option value="Fullfilment Center">
                      Fullfilment Center
                    </option>
                    <option value="Seller Flex">Seller Flex</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
                <div className="w-full sm:w-1/2 flex flex-col gap-2 sm:gap-3">
                  <label className="text-base font-semibold sm:text-lg lg:text-xl">Step Level</label>

                  <select
                    value={stepLevel}
                    onChange={(e) => setStepLevel(e.target.value)}
                    className="w-full min-w-0 border-2 border-gray-300 rounded-xl p-3 text-base outline-none focus:border-[#ff6200] sm:text-lg"
                  >
                    <option value="Basic">Basic</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                <div className="w-full sm:w-1/2 flex flex-col gap-2 sm:gap-3">
                  <label className="text-base font-semibold sm:text-lg lg:text-xl">GST %</label>

                  <select
                    value={gst}
                    onChange={(e) => setGst(e.target.value)}
                    className="w-full min-w-0 border-2 border-gray-300 rounded-xl p-3 text-base outline-none focus:border-[#ff6200] sm:text-lg"
                  >
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-full flex items-end">
                  <button
                    className="w-full bg-[#ff6200] text-white py-3 rounded-xl text-xl font-semibold hover:scale-95 hover:opacity-90 duration-300 sm:text-2xl"
                  >
                    Calculate
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full min-h-full lg:w-2/5 p-4 sm:p-6 lg:p-5 flex flex-col justify-center bg-[#fff8f3]">
              <div className="w-full min-h-full rounded-xl bg-white shadow-lg p-5 sm:p-8 flex flex-col gap-5 sm:gap-6">
                <div className="flex justify-between gap-4 text-base sm:text-lg">
                  <span className="font-semibold">Referal Fee</span>
                  <span className="text-right break-words">₹ {referalFee}</span>
                </div>

                <div className="flex justify-between gap-4 text-base sm:text-lg">
                  <span className="font-semibold">Closing Fee</span>
                  <span className="text-right break-words">₹ {closingFee}</span>
                </div>

                <div className="flex justify-between gap-4 text-base sm:text-lg">
                  <span className="font-semibold">Shipping Fee</span>
                  <span className="text-right break-words">₹ {shippingFee}</span>
                </div>


                <div className="border-t pt-4 flex flex-col gap-4">
                  <div className="flex justify-between gap-4 text-base sm:text-lg">
                    <span>Total Fees</span>
                    <span className="text-right break-words">₹ {totalFees}</span>
                  </div>

                  <div className="flex justify-between gap-4 text-base sm:text-lg">
                    <span>GST</span>
                    <span className="text-right break-words">₹ {GST}</span>
                  </div>

                  <div className="flex justify-between gap-4 text-xl font-bold text-[#ff6200] sm:text-2xl">
                    <span>Total Cost</span>
                    <span className="text-right break-words">₹ {totalCost}</span>
                  </div>

                  <div className="flex justify-between gap-4 text-xl font-bold text-[#228e1a] sm:text-2xl">
                    <span>Your Profit</span>
                    <span className="text-right break-words">₹ {profit}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
