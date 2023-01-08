export const fetchAudit = (query: string) => fetch(`/audit?${query}`);

export const fetchAuditMetadata = () => fetch('/audit/metadata');