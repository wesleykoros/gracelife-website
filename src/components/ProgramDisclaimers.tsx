export default function ProgramDisclaimers() {
  return (
    <section
      aria-label="NDIS and DVA disclaimers"
      className="rounded-lg border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700"
    >
      <div className="space-y-4">
        <div>
          <div className="font-semibold">NDIS Disclaimer</div>
          <p className="mt-1">
            Gracelife Care Services provides supports that may be funded under the
            National Disability Insurance Scheme (NDIS), subject to participant
            eligibility, plan approval, and service availability. Services are
            delivered in accordance with the NDIS Practice Standards and
            applicable legislation. Receipt of an enquiry does not guarantee
            service availability or funding approval.
          </p>
        </div>

        <div>
          <div className="font-semibold">DVA Disclaimer</div>
          <p className="mt-1">
            Gracelife Care Services provides community nursing and in-home support
            services for eligible Department of Veterans’ Affairs (DVA) clients,
            subject to referral, approval, and service availability. Services are
            delivered in line with relevant DVA arrangements and clinical
            requirements. An enquiry does not constitute approval or entitlement
            to services.
          </p>
        </div>
      </div>
    </section>
  );
}
