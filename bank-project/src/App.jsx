import { BrowserRouter, Routes, Route } from "react-router-dom";
// Institutional folder files
import Institutional from "./mainPages/Institutional";
import Events from "./Institutional/Events";
import McbAtAGlance from "./Institutional/Mcb-at-a-glance";
import OurGeographicalPresence from "./Institutional/Our-geographical-presence";
import OurSolutions from "./Institutional/Our-solutions";
// Our Solutions folder files
import BankOfBanks from "./Institutional/Our-solutions/Bank-of-banks";
import CorrespondentBanking from "./Institutional/Our-solutions/Correspondent-banking";
import RiskSharing from "./Institutional/Our-solutions/Risk-sharing";
import Syndications from "./Institutional/Our-solutions/Syndications";
// End of Our Solutions folder files
// Mcb at a glance folder files
import FactsFigures from "./Institutional/Mcb-at-a-glance/Facts-figures";
import RecognitionsAccolades from "./Institutional/Mcb-at-a-glance/Recognitions-accolades";
// End of Mcb at a glance folder files
// End of Institutional folder files
// Sme folder files
import Sme from "./mainPages/Sme";
import Bank from "./Sme/Bank";
import Borrow from "./Sme/Borrow";
import BusinessIntroducer from "./Sme/Business-introducer";
import Finance from "./Sme/Finance";
import Partnerships from "./Sme/Partnerships";
import Pay from "./Sme/Pay";
import SmeConnect from "./Sme/Sme-connect";
import Structure from "./Sme/Structure";
// Sme Connect Folder files
import ManageYourBusiness from "./Sme/Sme-connect/Manage-your-business";
import SpeakerSeries from "./Sme/Sme-connect/Speaker-series";
import StartYourBusiness from "./Sme/Sme-connect/Start-your-business";
// End of Sme Connect Folder files
// Borrow Folder files
import BankGuarantees from "./Sme/Borrow/Bank-guarantees";
import Factoring from "./Sme/Borrow/Factoring";
import Leasing from "./Sme/Borrow/Leasing";
import Loans from "./Sme/Borrow/Loans";
import LokalIsBeautiful from "./Sme/Borrow/Lokal-is-beautiful";
import Overdrafts from "./Sme/Borrow/Overdrafts";
import SustainableLoan from "./Sme/Borrow/Sustainable-loan";
import TradeFinance from "./Sme/Borrow/Trade-finance";
// End of Borrow Folder files
// Bank Folder files
import BusinessAccount from "./Sme/Bank/Business-account";
import TailorMadeSolutions from "./Sme/Bank/Tailor-made-solutions";
import TransactAnytimeAnywhere from "./Sme/Bank/Transact-anytime-anywhere";
// Transact Anytime Anywhere Folder files
import Atm from "./Sme/Bank/Transact-anytime-anywhere/Atm";
import EStatements from "./Sme/Bank/Transact-anytime-anywhere/E-statements";
import SmeInternetBanking from "./Sme/Bank/Transact-anytime-anywhere/Internet-banking";
import JuicePro from "./Sme/Bank/Transact-anytime-anywhere/Juicepro";
// End Transact Anytime Anywhere Folder files
// End of Bank Folder files
// Pay Folder Files
import SmeCards from "./Sme/Pay/Cards";
import Cheque from "./Sme/Pay/Cheques";
import ElectronicePayments from "./Sme/Pay/Electronic-payments";
import PayrollServices from "./Sme/Pay/Payroll-services";
// Electric Payments Folder files
import EcommerceSolutions from "./Sme/Pay/Electronic-payments/E-commerce-solutions";
import ElectronicTransfer from "./Sme/Pay/Electronic-payments/Electronic-transfer";
// End of Electric Payments Folder files
// card folder files
import BusinessCard from "./Sme/Pay/Cards/Business-card";
import SmeBusinessDepositCard from "./Sme/Pay/Cards/Business-deposit-card";
import FleetmanCard from "./Sme/Pay/Cards/Fleetman-card";
// end of card folder files
// End of Pay Folder Files
// Cards folder
import BusinessDepositCard from "./Sme/Cards/Business-deposit-card";
// End of Cards folder
// End of Sme folder files
// Corporate Folder files
import Corporate from "./mainPages/Coperate";
import CorporateFaq from "./Corporate/Faq";
import FinanceLending from "./Corporate/Finance-lending";
import InvestmentAdvisory from "./Corporate/Investment-advisory";
import CorporateMcbAtAGlance from "./Corporate/Mcb-at-a-glance";
import CorporateOurGeographicalPresence from "./Corporate/Our-geographical-presence";
import PaymentCash from "./Corporate/Payment-cash";
import CorporateSecurityCenter from "./Corporate/Security-centre";
import WhatWeDo from "./Corporate/What-we-do";
// Payment Cash Folder files
import Collect from "./Corporate/payment-cash/Collect";
import Monitor from "./Corporate/payment-cash/Monitor";
import Optimise from "./Corporate/payment-cash/Optimise";
import CorperatePay from "./Corporate/payment-cash/Pay";
// End of Payment Cash Folder files
// Monitor Folder files
import CorporateEStatements from "./Corporate/payment-cash/monitor/E-statements";
import ReportingServicesIbDashboard from "./Corporate/payment-cash/monitor/Reporting-services-ib-dashboard";
// End of Monitor Folder files
// Optimise Folder files
import CashPoolingServices from "./Corporate/payment-cash/optimise/Cash-pooling-services";
import FxMoneyMarketServices from "./Corporate/payment-cash/optimise/Fx-money-market-services";
// End of Optimise Folder files
// Collect Folder files
import CashDepositSolutions from "./Corporate/payment-cash/collect/Cash-deposit-solutions";
import DirectDebitBillPayment from "./Corporate/payment-cash/collect/Direct-debit-bill-payment";
import Ecommerce from "./Corporate/payment-cash/collect/E-commerce";
import MobileBanking from "./Corporate/payment-cash/collect/Mobile-banking";
import PointOfSaleSolutions from "./Corporate/payment-cash/collect/Point-of-sale-solutions";
// Ecommerce Folder files
import MerchantServices from "./Corporate/payment-cash/collect/e-commerce/Merchant-services";
import OnlinePaymentGateway from "./Corporate/payment-cash/collect/e-commerce/Online-payment-gateway";
// End Ecommerce Folder files
// End of Collect Folder files
// Faq
import CorporateBanking from "./Corporate/faq/Banking";
import CorporateCards from "./Corporate/faq/Cards";
import ForeignCurrencyTransferOnIB from "./Corporate/faq/Foreign-currency-transfer-on-ib";
import CoperateInternetBanking from "./Corporate/faq/Internet-banking";
import McbSmartApprove from "./Corporate/faq/Mcb-smartapprove";
import SoftToken from "./Corporate/faq/Soft-token";
// End of Faq
// Investment advisory
import CapitalMarket from "./Corporate/investment-advisory/Capital-markets";
import GlobalMarkets from "./Corporate/investment-advisory/Global-markets";
import SecurityServices from "./Corporate/investment-advisory/Securities-services";
// Global Markets Folder files
import DirectAccessToMarkets from "./Corporate/investment-advisory/global-markets/Direct-access-to-markets";
import FinancialMarketsSummary from "./Corporate/investment-advisory/global-markets/Financial-markets-summary";
import GlobalMarketsSolutions from "./Corporate/investment-advisory/global-markets/Global-markets-solutions";
// End Global Markets Folder files
// End Investment Advisory Folder files
// Finance Lending Folder files
import AssetFinance from "./Corporate/finance-lending/Asset-finance";
import CorporateLending from "./Corporate/finance-lending/Corporate-lending";
import StructuredFinance from "./Corporate/finance-lending/structured-finance";
import SupplyChainFinance from "./Corporate/finance-lending/Supply-chain-finance";
// Mcb Leasing Folder files
import McbLeasing from "./Corporate/finance-lending/asset-finance/Mcb-leasing";
// End of Mcb Leasing Folder files
// Supply Chain Finance Folder files
import CreditProtection from "./Corporate/finance-lending/supply-chain-finance/Credit-protection";
import GlobalTradePortal from "./Corporate/finance-lending/supply-chain-finance/Global-trade-portal";
import InvoiceFactoring from "./Corporate/finance-lending/supply-chain-finance/Invoice-factoring";
import CorporateTradeFinance from "./Corporate/finance-lending/supply-chain-finance/Trade-finance";
// Trade Finance Folder files
import TradeFinanceForms from "./Corporate/finance-lending/supply-chain-finance/trade-finance/Trade-finance-forms";
// End of Trade Finance Folder files
// End Supply Chain Finance Folder files
// Corporate lending files
import ExportLoan from "./Corporate/finance-lending/corporate-lending/Export-loan";
import Guarantees from "./Corporate/finance-lending/corporate-lending/Guarantees";
import ImportLoan from "./Corporate/finance-lending/corporate-lending/Import-loan";
import OverdraftsWorkingCapitals from "./Corporate/finance-lending/corporate-lending/Overdraft-working-capital";
import RevolvingCredit from "./Corporate/finance-lending/corporate-lending/Revolving-credit";
import CorporateSustainableLoan from "./Corporate/finance-lending/corporate-lending/Sustainable-loan";
import TermLoan from "./Corporate/finance-lending/corporate-lending/Term-loan";
// Corporate lending files
// Structured finance folder files
import AcquisitionFinancing from "./Corporate/finance-lending/structured-finance/Acquisition-financing";
import CrossBorderFinancing from "./Corporate/finance-lending/structured-finance/Cross-border-financing";
import EnergyCommodities from "./Corporate/finance-lending/structured-finance/Energy-commodities";
import ProjectFinancing from "./Corporate/finance-lending/structured-finance/Project-financing";
import PropertyFinancing from "./Corporate/finance-lending/structured-finance/Property-financing";
import SyndicatedFinancing from "./Corporate/finance-lending/structured-finance/Syndicated-financing";
// Energy comodities
import CorporateOurSuccessStories from "./Corporate/finance-lending/structured-finance/energy-commodities/Our-success-stories";
// Energy Comodities Folder files
// End of structured finance folder files
// End of Finance Lending Folder files
// MCB AT A GLANCE
import CorporateFactsFigures from "./Corporate/mcb-at-a-glance/Facts-figures";
import Overview from "./Corporate/mcb-at-a-glance/Overview";
import CorporateRecognitionsAccolades from "./Corporate/mcb-at-a-glance/Recognitions-accolades";
// MCB AT A GLANCE
// What we do
import WWDCorporateBanking from "./Corporate/what-we-do/Corporate-banking";
import GlobalBusiness from "./Corporate/what-we-do/Global-business";
// Global Business Folder files
import BecomeAClient from "./Corporate/what-we-do/global-business/Become-a-client";
import CustodyServices from "./Corporate/what-we-do/global-business/Custody-services";
import InvestingInMauritius from "./Corporate/what-we-do/global-business/Investing-in-mauritius";
// End of Global Business Folder files
// Corporate Banking Folder files
import CorporateBecomeAClient from "./Corporate/what-we-do/corporate-banking/become-a-client";
import OurSuccessStories from "./Corporate/what-we-do/corporate-banking/Our-success-stories";
// End of What we do
// End of Corporate Folder files

// institutional files and folder routes
const InstitutionalRoutes = () => {
  return (
    <>
      <Route path="/institutional" element={<Institutional />} />
      {/* Institutional folder files */}
      <Route path="/institutional/events" element={<Events />} />
      <Route path="/institutional/mcb-at-a-glance" element={<McbAtAGlance />} />
      <Route
        path="/institutional/our-geographical-presence"
        element={<OurGeographicalPresence />}
      />
      <Route path="/institutional/our-solutions" element={<OurSolutions />} />
      {/* Our Solutions folder files */}
      <Route
        path="/institutional/our-solutions/bank-of-banks"
        element={<BankOfBanks />}
      />
      <Route
        path="/institutional/our-solutions/correspondent-banking"
        element={<CorrespondentBanking />}
      />
      <Route
        path="/institutional/our-solutions/risk-sharing"
        element={<RiskSharing />}
      />
      <Route
        path="/institutional/our-solutions/syndications"
        element={<Syndications />}
      />
      {/* End of Our Solutions folder files */}
      {/* Mcb at a glance folder files */}
      <Route
        path="/institutional/mcb-at-a-glance/facts-figures"
        element={<FactsFigures />}
      />
      <Route
        path="/institutional/mcb-at-a-glance/recognitions-accolades"
        element={<RecognitionsAccolades />}
      />
      {/* End of Institutional folder files */}
    </>
  );
};
// End of institutional files and folder routes

// sme files and folder routes
const SmeRoutes = () => {
  return (
    <>
      <Route path="/sme" element={<Sme />} />
      {/* Sme folder files */}
      <Route path="/sme/bank" element={<Bank />} />
      <Route path="/sme/borrow" element={<Borrow />} />
      <Route path="/sme/business-introducer" element={<BusinessIntroducer />} />
      <Route path="/sme/finance" element={<Finance />} />
      <Route path="/sme/partnerships" element={<Partnerships />} />
      <Route path="/sme/pay" element={<Pay />} />
      <Route path="/sme/sme-connect" element={<SmeConnect />} />
      <Route path="/sme/structure" element={<Structure />} />
      {/* Sme Connect Folder files */}
      <Route
        path="/sme/sme-connect/manage-your-business"
        element={<ManageYourBusiness />}
      />
      <Route
        path="/sme/sme-connect/speaker-series"
        element={<SpeakerSeries />}
      />
      <Route
        path="/sme/sme-connect/start-your-business"
        element={<StartYourBusiness />}
      />
      {/* End of Sme Connect Folder files */}
      {/* Borrow Folder files */}
      <Route path="/sme/borrow/bank-guarantees" element={<BankGuarantees />} />
      <Route path="/sme/borrow/factoring" element={<Factoring />} />
      <Route path="/sme/borrow/leasing" element={<Leasing />} />
      <Route path="/sme/borrow/loans" element={<Loans />} />
      <Route
        path="/sme/borrow/lokal-is-beautiful"
        element={<LokalIsBeautiful />}
      />
      <Route path="/sme/borrow/overdrafts" element={<Overdrafts />} />
      <Route
        path="/sme/borrow/sustainable-loan"
        element={<SustainableLoan />}
      />
      <Route path="/sme/borrow/trade-finance" element={<TradeFinance />} />
      {/* End of Borrow Folder files */}
      {/* Bank Folder files */}
      <Route path="/sme/bank/business-account" element={<BusinessAccount />} />
      <Route
        path="/sme/bank/tailor-made-solutions"
        element={<TailorMadeSolutions />}
      />
      <Route
        path="/sme/bank/transact-anytime-anywhere"
        element={<TransactAnytimeAnywhere />}
      />
      {/* Transact anywhere folder files */}
      <Route path="/sme/bank/transact-anytime-anywhere/atm" element={<Atm />} />
      <Route
        path="/sme/bank/transact-anytime-anywhere/e-statements"
        element={<EStatements />}
      />
      <Route
        path="/sme/bank/transact-anytime-anywhere/internet-banking"
        element={<SmeInternetBanking />}
      />
      <Route
        path="/sme/bank/transact-anytime-anywhere/juicepro"
        element={<JuicePro />}
      />
      {/* End of Transact anywhere folder files */}
      {/* End of Bank Folder files */}
      {/* Pay Folder files */}
      <Route path="/sme/pay/cards" element={<SmeCards />} />
      <Route path="/sme/pay/cheques" element={<Cheque />} />
      <Route
        path="/sme/pay/electronic-payments"
        element={<ElectronicePayments />}
      />
      <Route path="/sme/pay/payroll-services" element={<PayrollServices />} />
      {/* Electronic Payments Folder files */}
      <Route
        path="/sme/pay/electronic-payments/e-commerce-solutions"
        element={<EcommerceSolutions />}
      />
      <Route
        path="/sme/pay/electronic-payments/electronic-transfer"
        element={<ElectronicTransfer />}
      />
      {/* End of Electronic Payments Folder files */}
      {/* card folder files */}
      <Route path="/sme/pay/cards/business-card" element={<BusinessCard />} />
      <Route
        path="/sme/pay/cards/business-deposit-card"
        element={<SmeBusinessDepositCard />}
      />
      <Route path="/sme/pay/cards/fleetman-card" element={<FleetmanCard />} />
      {/* end of card folder files */}
      {/* End of pay folder */}
      {/* Cards folder */}
      <Route
        path="/sme/cards/business-deposit-card"
        element={<BusinessDepositCard />}
      />
      {/* End of Cards folder */}
      {/* End of Sme folder files */}
    </>
  );
};
// End of sme files and folder routes

// corporate files and folder routes
const CorporateRoutes = () => {
  return (
    <>
      <Route path="/corporate" element={<Corporate />} />
      {/* Corporate folder files */}
      <Route path="/corporate/faq" element={<CorporateFaq />} />
      <Route path="/corporate/finance-lending" element={<FinanceLending />} />
      <Route
        path="/corporate/investment-advisory"
        element={<InvestmentAdvisory />}
      />
      <Route
        path="/corporate/mcb-at-a-glance"
        element={<CorporateMcbAtAGlance />}
      />
      <Route
        path="/corporate/our-geographical-presence"
        element={<CorporateOurGeographicalPresence />}
      />
      <Route path="/corporate/payment-cash" element={<PaymentCash />} />
      <Route
        path="/corporate/security-centre"
        element={<CorporateSecurityCenter />}
      />
      <Route path="/corporate/what-we-do" element={<WhatWeDo />} />
      {/* Payment Cash Folder files */}
      <Route path="/corporate/payment-cash/collect" element={<Collect />} />
      <Route path="/corporate/payment-cash/monitor" element={<Monitor />} />
      <Route path="/corporate/payment-cash/optimise" element={<Optimise />} />
      <Route path="/corporate/payment-cash/pay" element={<CorperatePay />} />
      {/* Monitor folder files */}
      <Route
        path="/corporate/payment-cash/monitor/e-statements"
        element={<CorporateEStatements />}
      />
      <Route
        path="/corporate/payment-cash/monitor/reporting-services-ib-dashboard"
        element={<ReportingServicesIbDashboard />}
      />
      {/* End of Monitor folder files */}
      {/* Optimise folder files */}
      <Route
        path="/corporate/payment-cash/optimise/cash-pooling-services"
        element={<CashPoolingServices />}
      />
      <Route
        path="/corporate/payment-cash/optimise/fx-money-market-services"
        element={<FxMoneyMarketServices />}
      />
      {/* End of Optimise folder files */}
      {/* Collect folder files */}
      <Route
        path="/corporate/payment-cash/collect/cash-deposit-solutions"
        element={<CashDepositSolutions />}
      />
      <Route
        path="/corporate/payment-cash/collect/direct-debit-bill-payment"
        element={<DirectDebitBillPayment />}
      />
      <Route
        path="/corporate/payment-cash/collect/e-commerce"
        element={<Ecommerce />}
      />
      <Route
        path="/corporate/payment-cash/collect/mobile-banking"
        element={<MobileBanking />}
      />
      <Route
        path="/corporate/payment-cash/collect/point-of-sale-solutions"
        element={<PointOfSaleSolutions />}
      />
      {/* Ecommerce folder files */}
      <Route
        path="/corporate/payment-cash/collect/e-commerce/merchant-services"
        element={<MerchantServices />}
      />
      <Route
        path="/corporate/payment-cash/collect/e-commerce/online-payment-gateway"
        element={<OnlinePaymentGateway />}
      />
      {/* End of collect folder files */}
      {/* End of Payment Cash Folder files */}
      {/* Faq */}
      <Route path="/corporate/faq/banking" element={<CorporateBanking />} />
      <Route path="/corporate/faq/cards" element={<CorporateCards />} />
      <Route
        path="/corporate/faq/foreign-currency-transfer-on-ib"
        element={<ForeignCurrencyTransferOnIB />}
      />
      <Route
        path="/corporate/faq/internet-banking"
        element={<CoperateInternetBanking />}
      />
      <Route
        path="/corporate/faq/mcb-smartapprove"
        element={<McbSmartApprove />}
      />
      <Route path="/corporate/faq/soft-token" element={<SoftToken />} />
      {/* End of Faq */}
      {/* Investment advisory */}
      <Route
        path="/corporate/investment-advisory/capital-markets"
        element={<CapitalMarket />}
      />
      <Route
        path="/corporate/investment-advisory/global-markets"
        element={<GlobalMarkets />}
      />
      <Route
        path="/corporate/investment-advisory/securities-services"
        element={<SecurityServices />}
      />
      {/* Global Markets Folder files */}
      <Route
        path="/corporate/investment-advisory/global-markets/direct-access-to-markets"
        element={<DirectAccessToMarkets />}
      />
      <Route
        path="/corporate/investment-advisory/global-markets/financial-markets-summary"
        element={<FinancialMarketsSummary />}
      />
      <Route
        path="/corporate/investment-advisory/global-markets/global-markets-solutions"
        element={<GlobalMarketsSolutions />}
      />
      {/* End Global Markets Folder files */}
      {/* End Investment Advisory Folder files */}

      {/* Finance Lending Folder files */}
      <Route
        path="/corporate/finance-lending/asset-finance"
        element={<AssetFinance />}
      />
      <Route
        path="/corporate/finance-lending/corporate-lending"
        element={<CorporateLending />}
      />
      <Route
        path="/corporate/finance-lending/structured-finance"
        element={<StructuredFinance />}
      />
      <Route
        path="/corporate/finance-lending/supply-chain-finance"
        element={<SupplyChainFinance />}
      />
      {/* Mcb Leasing Folder files */}
      <Route
        path="/corporate/finance-lending/asset-finance/mcb-leasing"
        element={<McbLeasing />}
      />
      {/* End of Mcb Leasing Folder files */}
      {/* Supply Chain Finance Folder files */}
      <Route
        path="/corporate/finance-lending/supply-chain-finance/credit-protection"
        element={<CreditProtection />}
      />
      <Route
        path="/corporate/finance-lending/supply-chain-finance/global-trade-portal"
        element={<GlobalTradePortal />}
      />
      <Route
        path="/corporate/finance-lending/supply-chain-finance/invoice-factoring"
        element={<InvoiceFactoring />}
      />
      <Route
        path="/corporate/finance-lending/supply-chain-finance/trade-finance"
        element={<CorporateTradeFinance />}
      />
      {/* Trade Finance Folder files */}
      <Route
        path="/corporate/finance-lending/supply-chain-finance/trade-finance/trade-finance-forms"
        element={<TradeFinanceForms />}
      />
      {/* End of Trade Finance Folder files */}
      {/* End Supply Chain Finance Folder files */}
      {/* Corporate lending files */}
      <Route
        path="/corporate/finance-lending/corporate-lending/export-loan"
        element={<ExportLoan />}
      />
      <Route
        path="/corporate/finance-lending/corporate-lending/guarantees"
        element={<Guarantees />}
      />
      <Route
        path="/corporate/finance-lending/corporate-lending/import-loan"
        element={<ImportLoan />}
      />
      <Route
        path="/corporate/finance-lending/corporate-lending/overdraft-working-capital"
        element={<OverdraftsWorkingCapitals />}
      />
      <Route
        path="/corporate/finance-lending/corporate-lending/revolving-credit"
        element={<RevolvingCredit />}
      />
      <Route
        path="/corporate/finance-lending/corporate-lending/sustainable-loan"
        element={<CorporateSustainableLoan />}
      />
      <Route
        path="/corporate/finance-lending/corporate-lending/term-loan"
        element={<TermLoan />}
      />
      {/* Corporate lending files */}
      {/* Structured finance folder files */}
      <Route
        path="/corporate/finance-lending/structured-finance/acquisition-financing"
        element={<AcquisitionFinancing />}
      />
      <Route
        path="/corporate/finance-lending/structured-finance/cross-border-financing"
        element={<CrossBorderFinancing />}
      />
      <Route
        path="/corporate/finance-lending/structured-finance/energy-commodities"
        element={<EnergyCommodities />}
      />
      <Route
        path="/corporate/finance-lending/structured-finance/project-financing"
        element={<ProjectFinancing />}
      />
      <Route
        path="/corporate/finance-lending/structured-finance/property-financing"
        element={<PropertyFinancing />}
      />
      <Route
        path="/corporate/finance-lending/structured-finance/syndicated-financing"
        element={<SyndicatedFinancing />}
      />
      {/* Energy comodities */}
      <Route
        path="/corporate/finance-lending/structured-finance/energy-commodities/our-success-stories"
        element={<CorporateOurSuccessStories />}
      />
      {/* Energy Comodities Folder files */}
      {/* End of structured finance folder files */}
      {/* End of Finance Lending Folder files */}
      {/* MCB AT A GLANCE */}
      <Route
        path="/corporate/mcb-at-a-glance/facts-figures"
        element={<CorporateFactsFigures />}
      />
      <Route
        path="/corporate/mcb-at-a-glance/overview"
        element={<Overview />}
      />
      <Route
        path="/corporate/mcb-at-a-glance/recognitions-accolades"
        element={<CorporateRecognitionsAccolades />}
      />
      {/* MCB AT A GLANCE */}
      {/* What we do */}
      <Route
        path="/corporate/what-we-do/corporate-banking"
        element={<WWDCorporateBanking />}
      />
      <Route
        path="/corporate/what-we-do/global-business"
        element={<GlobalBusiness />}
      />
      {/* Global Business Folder files */}
      <Route
        path="/corporate/what-we-do/global-business/become-a-client"
        element={<BecomeAClient />}
      />
      <Route
        path="/corporate/what-we-do/global-business/custody-services"
        element={<CustodyServices />}
      />
      <Route
        path="/corporate/what-we-do/global-business/investing-in-mauritius"
        element={<InvestingInMauritius />}
      />
      {/* End of Global Business Folder files */}
      {/* Corporate Banking Folder files */}
      <Route
        path="/corporate/what-we-do/corporate-banking/become-a-client"
        element={<CorporateBecomeAClient />}
      />
      <Route
        path="/corporate/what-we-do/corporate-banking/our-success-stories"
        element={<OurSuccessStories />}
      />
      {/* End of What we do */}

      {/* End of Corporate folder files */}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {InstitutionalRoutes()}
        {SmeRoutes()}
        {CorporateRoutes()}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
