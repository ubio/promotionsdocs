# Validation Results

Validation results are the top-level outcomes of a promotion validation attempt. They are not error categories.

A successful validation means the system reached a conclusion. Both `VALID` and `INVALID` are successful validations because they determine whether the promotion worked. `COULD NOT VALIDATE` means no conclusion could be reached.

## VALID

Validation reached a conclusion and the promotion delivered the advertised benefit.

**Criteria**

- Code applies without error
- Discount or benefit is visible
- Promotion matches the advertised offer

**Error category:** none

This means the validation result is `VALID`. It does not mean every promo code scenario is error-free. A promo code may be valid in the merchant system but still produce an `INVALID` validation result for a specific product or SKU.

## INVALID

Validation reached a conclusion, but the promotion did not deliver the advertised benefit.

**Criteria**

- Code is rejected
- No discount is applied
- Promotion conditions appear to be met, but the benefit is not received
- Product or promotion is no longer available
- Promo code is valid, but only for a different product or product group

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
