# Reporting Format

Validation results should be reported in a consistent structure so they can be mapped into files, dashboards, APIs, or internal review queues.

## Core Fields

| Field | Description |
| --- | --- |
| `validation_result` | Top-level result: `VALID`, `INVALID`, or `COULD NOT VALIDATE`. |
| `error_category` | Grouped reason for `INVALID` or `COULD NOT VALIDATE`. Empty for `VALID`. |
| `error_code` | Specific machine-readable reason for the failed or incomplete validation. Empty for `VALID`. |
| `source_id` | Identifier from the source file, feed, or request. |
| `validated_at` | Timestamp for when the validation result was produced. |
| `notes` | Optional human-readable context for review or debugging. |

## Result Semantics

| Internal Result | Meaning |
| --- | --- |
| `VALID` | Validation reached a conclusion and the promotion worked. |
| `INVALID` | Validation reached a conclusion and the promotion did not work. |
| `COULD NOT VALIDATE` | Validation could not reach a conclusion. |

## Downstream Mapping

Downstream exports may map these internal results to different labels or spreadsheet fields.

When mapping results downstream:

- Preserve the original input structure when one is provided.
- Keep `VALID`, `INVALID`, and `COULD NOT VALIDATE` as the canonical internal results.
- Do not assign an error category or error code to `VALID`.
- Include error categories and error codes where they help with review, tuning, or debugging.
