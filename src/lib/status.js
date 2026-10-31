/** Human-readable labels for the `status` values allowed in portfolio.js. */
export const STATUS_LABEL = {
  shipped: 'Shipped',
  active: 'Active',
  wip: 'In progress',
  archived: 'Archived',
}

/** Canonical sort order for statuses, because alphabetical order is meaningless. */
export const STATUS_ORDER = ['shipped', 'active', 'wip', 'archived']

/** Falls back to the raw value so an unknown status still renders something. */
export function statusLabel(status) {
  return STATUS_LABEL[status] ?? status
}
