# Error Categories

Error categories explain why a validation was `INVALID` or `COULD NOT VALIDATE`.

They do not apply to `VALID` promotions.

## Merchant / Promotion Issue

**Parent outcome:** `INVALID`

Use when validation reached a conclusion, but the promotion itself was not usable or did not provide the advertised benefit.

| Error Code | Meaning |
| --- | --- |
| `PAGE_IS_INACTIVE` | Promotion page is inactive or unavailable. |
| `PRODUCT_OUT_OF_STOCK` | Product is unavailable or out of stock. |
| `PROMO_CODE_NOT_APPLICABLE_TO_THIS_PRODUCT` | Promotion does not apply to the selected product. |
| `PROMO_CODE_IS_NOT_WORKING` | Promo code is rejected or has no effect. |
| `FREE_SHIPPING_IS_NOT_APPLIED` | Free shipping benefit was not received. |
| `DISCOUNT_IS_NOT_APPLIED` | Discount benefit was not received. |

## Merchant Website Issue

**Parent outcome:** `COULD NOT VALIDATE`

Use when validation could not reach a conclusion because the merchant website prevented a conclusive result.

| Error Code | Meaning |
| --- | --- |
| `WEBSITE_LOADING_ISSUE` | Website did not become usable after reasonable waits. |
| `WEBSITE_HTTP_ERROR` | Website returned an HTTP or server error. |
| `WEBSITE_UI_ISSUE` | Broken or unusable UI prevented validation. |
| `WEBSITE_OTHER_ISSUES` | Other merchant website issue prevented validation. |
| `BOT_DETECTION` | Website blocked or challenged automation. |
| `ACCOUNT_BLOCKED` | Account access was blocked or restricted. |

## Automation / Infrastructure Issue

**Parent outcome:** `COULD NOT VALIDATE`

Use when validation could not reach a conclusion because of failures in the validation platform, automation systems, infrastructure, or supporting services.

| Error Code | Meaning |
| --- | --- |
| `AGENT_ERROR` | Validation agent failure. |
| `A3_ERROR` | A3/platform failure. |
| `PROXY_CONNECTION_ISSUE` | Proxy connection failed. |
| `NETWORK_UNREACHABLE` | Network could not reach the merchant site. |
| `LLM_COST_LIMIT` | Validation stopped because cost or usage limits were reached. |
