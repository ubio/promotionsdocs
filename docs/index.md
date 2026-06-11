# Promotion Validation Framework

UBIO validates promotions by checking whether the system can reach a conclusion, then whether the promotion delivers the advertised benefit.

A successful validation does not necessarily mean a valid promotion. A validation is successful when UBIO can determine whether the promotion is `VALID` or `INVALID`. Only attempts that cannot reach a conclusion are classified as `COULD NOT VALIDATE`.

## Decision Tree

![Validation decision tree showing VALID, INVALID, and COULD NOT VALIDATE outcomes](/images/validation-decision-tree.png)

## Invalid Reasons

| Category | Meaning | Example codes |
| --- | --- | --- |
| Merchant / Promotion Issue | Validation succeeded, but the offer did not work. | `PROMO_CODE_IS_NOT_WORKING`<br>`PROMO_CODE_VALID_FOR_DIFFERENT_PRODUCT`<br>`DISCOUNT_IS_NOT_APPLIED`<br>`PRODUCT_OUT_OF_STOCK` |

## Could Not Validate Reasons

| Category | Meaning | Example codes |
| --- | --- | --- |
| Website Issue | Merchant site prevented validation. | `WEBSITE_LOADING_ISSUE`<br>`BOT_DETECTION`<br>`ACCOUNT_BLOCKED` |
| Automation / Infrastructure Issue | UBIO validation system could not complete the run. | `AGENT_ERROR`<br>`PROXY_CONNECTION_ISSUE`<br>`NETWORK_UNREACHABLE` |

> A validation is successful when UBIO can reach a conclusion.  
> Both **VALID** and **INVALID** are successful validations.  
> **COULD NOT VALIDATE** means no conclusion could be reached.

## Framework Hierarchy

Validation outcomes follow this hierarchy:

```text
Validation Result → Error Category → Error Code
```

| Level | Purpose |
| --- | --- |
| Validation Result | The top-level outcome: `VALID`, `INVALID`, or `COULD NOT VALIDATE`. |
| Error Category | The grouped reason for an `INVALID` or `COULD NOT VALIDATE` result. |
| Error Code | The specific machine-readable reason for the issue. |

`VALID` validation results do not have an error category. Error categories only apply when a promotion is `INVALID` or `COULD NOT VALIDATE`.

A promo code can still be valid in the merchant system while the tested promotion is `INVALID`. For example, if the code works for other products but not the product under validation, use `PROMO_CODE_VALID_FOR_DIFFERENT_PRODUCT`.

## Result Summary

| Validation Result | Meaning | Error Category |
| --- | --- | --- |
| `VALID` | Validation reached a conclusion and the promotion worked as advertised. | None |
| `INVALID` | Validation reached a conclusion and the promotion did not work. | Merchant / Promotion Issue |
| `COULD NOT VALIDATE` | Validation could not reach a conclusion. | Website Issue or Automation / Infrastructure Issue |
