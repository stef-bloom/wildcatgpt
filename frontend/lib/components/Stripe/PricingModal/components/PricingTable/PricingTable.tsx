const PRICING_TABLE_ID = "prctbl_1Oj2bPC4PPGgmD6u6BBP55Gn";
const PUBLISHABLE_KEY = "pk_live_51O58I6C4PPGgmD6uTAAOinkWsUDZtYGs4V4HYevXMQE10RwfFpHyYpePgFjh0M5NW4Q51kZha7KFhkpJWQWvuz4I00Y8yhITp6";

export const StripePricingTable = (): JSX.Element => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 p-2 bg-highlight">
        <div className="space-y-3 text-center">
          <h3 className="text-2xl font-semibold text-black">Free Tier</h3>
          <ul className="list-none space-y-2">
            <li className="text-lg font-medium text-gray-800">🧠 3 brains</li>
            <li className="text-lg font-medium text-gray-800">
              🙋‍♂️ 100 questions per month
            </li>
            <li className="text-lg font-medium text-gray-800">
              💾 Up to 30Mb of storage
            </li>
          </ul>
        </div>
        <div className="space-y-3 text-center">
          <h3 className="text-2xl font-semibold text-black">
            Premium Features
          </h3>
          <ul className="list-none space-y-2">
            <li className="text-lg font-medium text-gray-800">
              🧠 Bigger & more Brains
            </li>
            <li className="text-lg font-medium text-gray-800">
              🙋‍♂️ More credits & access to premium models (GPT4, Mistral)
            </li>
            <li className="text-lg font-medium text-gray-800">
              🚀 GPT3.5 = 1 credit & GPT4 = 20 credits
            </li>
          </ul>
        </div>
      </div>
      <div className="p-2">
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <stripe-pricing-table
          pricing-table-id={PRICING_TABLE_ID}
          publishable-key={PUBLISHABLE_KEY}
        ></stripe-pricing-table>
      </div>
    </>
  );
};