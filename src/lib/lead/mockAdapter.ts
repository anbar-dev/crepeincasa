import type { LeadAdapter, LeadAdapterResult, LeadPayload } from './adapter';
import { partnerConfig } from './partnerConfig';

export const createMockLeadAdapter = (): LeadAdapter => ({
  async submit(payload: LeadPayload): Promise<LeadAdapterResult> {
    // Sostituire questo adapter con un endpoint backend prima di attivare invii reali.
    return {
      accepted: true,
      reference: `MOCK-${Date.now()}`,
      forwardingRequested: payload.forwardingConsent,
      forwardingEnabled: partnerConfig.forwardingEnabled,
    };
  },
});
