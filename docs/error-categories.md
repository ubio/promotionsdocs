# Error Codes

Error codes explain the specific outcome of a validation.

`VALID` validation results can have error codes. They do not have error categories.

## Valid Codes

**Parent outcome:** `VALID`

Use when UBIO can confirm that the promotion or promo code is valid, but the tested product context still matters.

| Error Code | Meaning |
| --- | --- |
| `PROMO_CODE_VALID_FOR_DIFFERENT_PRODUCT` | Promo code is valid, but only for a different product or product group than the one being validated. |

## Merchant / Promotion Issue

**Parent outcome:** `INVALID`

Use when validation reached a conclusion, but the promotion itself was not usable or did not provide the advertised benefit.

| Error Code | Meaning |
| --- | --- |
| `PAGE_IS_INACTIVE` | Promotion page is inactive or unavailable. |
| `PROMO_CODE_NOT_APPLICABLE_TO_THIS_PRODUCT` | Promotion terms do not include the selected product. |
| `PROMO_CODE_IS_NOT_WORKING` | Promo code is rejected or has no effect. |
| `FREE_SHIPPING_IS_NOT_APPLIED` | Free shipping benefit was not received. |
| `DISCOUNT_IS_NOT_APPLIED` | Discount benefit was not received. |

## Website Issue

**Parent outcome:** `COULD NOT VALIDATE`

Use when validation could not reach a conclusion because the website prevented a conclusive result.

| Error Code | Meaning |
| --- | --- |
| `WEBSITE_LOADING_ISSUE` | Website did not become usable after reasonable waits. |
| `WEBSITE_HTTP_ERROR` | Website returned an HTTP or server error. |
| `WEBSITE_UI_ISSUE` | Broken or unusable UI prevented validation. |
| `WEBSITE_OTHER_ISSUES` | Other website issue prevented validation. |
| `BOT_DETECTION` | Website blocked or challenged automation. |
| `ACCOUNT_BLOCKED` | Account access was blocked or restricted. |
| `PRODUCT_OUT_OF_STOCK` | The selected product was unavailable or out of stock, so validation could not reach a conclusion. |

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
