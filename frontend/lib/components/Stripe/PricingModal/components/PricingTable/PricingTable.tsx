import { MessageInfoBox } from "@/lib/components/ui/MessageInfoBox/MessageInfoBox";

import styles from "./PricingTable.module.scss";

const PRICING_TABLE_ID = "prctbl_1P6BeiC4PPGgmD6un4BFBxQP";
const PUBLISHABLE_KEY = "pk_live_51O58I6C4PPGgmD6uTAAOinkWsUDZtYGs4V4HYevXMQE10RwfFpHyYpePgFjh0M5NW4Q51kZha7KFhkpJWQWvuz4I00Y8yhITp6";

export const StripePricingTable = (): JSX.Element => {
  return (
    <>
      <div className={styles.info_content}>
        <MessageInfoBox type="info" unforceWhite={true}>
          <div>
            {"The free tier allows you to have"}
            <span className={styles.bold}> 3 brains </span>
            {"and"}
            <span className={styles.bold}> 100 chat credits </span>
            {
              "per month. You can upgrade to unlock more brains, more chat credits and access to premium models."
            }
          </div>
        </MessageInfoBox>
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
