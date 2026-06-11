# Promotion Validation Framework

UBIO validates promotions by checking whether the system can reach a conclusion, then whether the promotion delivers the advertised benefit.

A successful validation does not necessarily mean a valid promotion. A validation is successful when UBIO can determine whether the promotion is `VALID` or `INVALID`. Only attempts that cannot reach a conclusion are classified as `COULD NOT VALIDATE`.

## Decision Tree

![Validation decision tree showing VALID, INVALID, and COULD NOT VALIDATE outcomes](/images/validation-decision-tree.png)

## Valid Reason Codes

`VALID` results can include a reason code when UBIO can confirm the promotion or promo code is valid, but the tested product context explains why the offer could not be applied cleanly.

| Category | Meaning | Example codes |
| --- | --- | --- |
| Valid / Product Context | Promotion or promo code is valid, but the tested product context affects redemption. | `PROMO_CODE_VALID_FOR_DIFFERENT_PRODUCT`<br>`PRODUCT_OUT_OF_STOCK` |

## Invalid Reasons

| Category | Meaning | Example codes |
| --- | --- | --- |
| Merchant / Promotion Issue | Validation succeeded, but the offer did not work. | `PROMO_CODE_IS_NOT_WORKING`<br>`PROMO_CODE_NOT_APPLICABLE_TO_THIS_PRODUCT`<br>`DISCOUNT_IS_NOT_APPLIED` |

## Could Not Validate Reasons

| Category | Meaning | Example codes |
| --- | --- | --- |
| Website Issue | Merchant site prevented validation. | `WEBSITE_LOADING_ISSUE`<br>`BOT_DETECTION`<br>`ACCOUNT_BLOCKED` |
| Automation / Infrastructure Issue | UBIO validation system could not complete the run. | `AGENT_ERROR`<br>`PROXY_CONNECTION_ISSUE`<br>`NETWORK_UNREACHABLE` |

> A validation is successful when UBIO can reach a conclusion.  
> Both **VALID** and **INVALID** are successful validations.  
> **COULD NOT VALIDATE** means no conclusion could be reached.

## Framework Hierarchy

Most validation outcomes follow this hierarchy:

```text
Validation Result → Category → Reason Code
```

| Level | Purpose |
| --- | --- |
| Validation Result | The top-level outcome: `VALID`, `INVALID`, or `COULD NOT VALIDATE`. |
| Category | The grouped reason for a result. `VALID` can have a product-context category; `INVALID` and `COULD NOT VALIDATE` use error categories. |
| Reason Code | The specific machine-readable reason for the result. |

`VALID` validation results can have reason codes. They do not have error categories.

## Result Summary

| Validation Result | Meaning | Category |
| --- | --- | --- |
| `VALID` | Validation reached a conclusion and the promotion or promo code is valid. | None, or Valid / Product Context |
| `INVALID` | Validation reached a conclusion and the promotion did not work. | Merchant / Promotion Issue |
| `COULD NOT VALIDATE` | Validation could not reach a conclusion. | Website Issue or Automation / Infrastructure Issue |
