# Validation Results

Validation results are the top-level outcomes of a promotion validation attempt. They are not error categories.

A successful validation means the system reached a conclusion. Both `VALID` and `INVALID` are successful validations because they determine whether the promotion is valid or invalid. `COULD NOT VALIDATE` means no conclusion could be reached.

## VALID

Validation reached a conclusion and the promotion or promo code is valid.

**Criteria**

- Code applies without error and the discount or benefit is visible
- Promotion matches the advertised offer
- Promo code is confirmed valid, but only for a different product or product group
- Promotion or promo code is confirmed valid, but the tested product is out of stock

**Error category:** none

**Optional reason codes**

- `PROMO_CODE_VALID_FOR_DIFFERENT_PRODUCT`
- `PRODUCT_OUT_OF_STOCK`

## INVALID

Validation reached a conclusion, but the promotion did not deliver the advertised benefit.

**Criteria**

- Code is rejected
- No discount is applied
- Promotion conditions appear to be met, but the benefit is not received
- Product or promotion is no longer available

**Parent error category**

- Merchant / Promotion Issue

## COULD NOT VALIDATE

Validation could not reach a conclusion due to technical, environmental, website, or infrastructure limitations.

**Criteria**

- Site blocks automation
- Page fails to load
- Website is inaccessible
- Internal validation systems fail

**Parent error categories**

- Website Issue
- Automation / Infrastructure Issue
