# Reporting Format

Validation results should be reported in a consistent structure so they can be mapped into files, dashboards, APIs, or internal review queues.

## Core Fields

| Field | Description |
| --- | --- |
| `validation_result` | Top-level result: `VALID`, `INVALID`, or `COULD NOT VALIDATE`. |
| `category` | Grouped reason for the result. Empty for plain `VALID`; populated for `VALID` with product context, `INVALID`, or `COULD NOT VALIDATE`. |
| `reason_code` | Specific machine-readable reason for the result. Can be populated for `VALID`, `INVALID`, or `COULD NOT VALIDATE`. |
| `source_id` | Identifier from the source file, feed, or request. |
| `validated_at` | Timestamp for when the validation result was produced. |
| `notes` | Optional human-readable context for review or debugging. |

## Result Semantics

| Internal Result | Meaning |
| --- | --- |
| `VALID` | Validation reached a conclusion and the promotion or promo code is valid. |
| `INVALID` | Validation reached a conclusion and the promotion did not work. |
| `COULD NOT VALIDATE` | Validation could not reach a conclusion. |

## Downstream Mapping

Downstream exports may map these internal results to different labels or spreadsheet fields.

When mapping results downstream:

- Preserve the original input structure when one is provided.
- Keep `VALID`, `INVALID`, and `COULD NOT VALIDATE` as the canonical internal results.
- `VALID` can include a product-context category and reason code.
- Include categories and reason codes where they help with review, tuning, or debugging.
