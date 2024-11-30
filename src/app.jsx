import { BrowserRouter, Routes, Route } from "react-router-dom";
// Too1 folder files
// End of Too1 folder files
// Main pages
// contact us files
import Personal from "./mainPages/Personal";
import ContactUs from "./mainPages/Contact-us";
import Institutional from "./mainPages/Institutional";
import Sme from "./mainPages/Sme";
import Coperate from "./mainPages/Coperate";
import FileComplaintForm from "./mainPages/File-a-complaint";
import HomeLoan from "./Personal/Loans/Home-loan";
import TreasuryMarketUpdates from "./mainPages/Treasury-market-updates";
import SecurityCentre from "./mainPages/Security-centre";
import RatesFees from "./mainPages/Rates-fees";
import LocateUs from "./mainPages/Locate-us";
import CustomerForms from "./mainPages/Customer-forms";
// End of main pages
// Personal Files
import AboutUs from "./Personal/About-us";
import AccountsPackages from "./Personal/Accounts-packages";
import PersonalInvestments from "./Personal/Investments";
import PersonalLoans from "./Personal/Loans";
import WaysToBank from "./Personal/Ways-to-bank";
// Way to bank files
import WtbAtms from "./Personal/Ways-to-bank/Atms";
import BillPayments from "./Personal/Ways-to-bank/Bill-payments";
import WtbEstatements from "./Personal/Ways-to-bank/E-statements";
import InbranchBanking from "./Personal/Ways-to-bank/In-branch-banking";
import InternationalTransfer from "./Personal/Ways-to-bank/International-transfers";
import WtbInternetBanking from "./Personal/Ways-to-bank/Internet-banking";
import WtbMcbRefill from "./Personal/Ways-to-bank/Mcb-refill";
import PaymentSolutions from "./Personal/Ways-to-bank/Payment-solutions";
import WtbSmsBanking from "./Personal/Ways-to-bank/Sms-banking";
// Bill payment folder
import ServiceProviders from "./Personal/Ways-to-bank/Bill-payments/Service-providers";
// End Bill payment folder
// WAY TO bank files
// About Folder files
import AtAGlance from "./Personal/About-us/At-a-glance";
import FinancialsAnnualReports from "./Personal/About-us/Financials-annual-reports";
import Governance from "./Personal/About-us/Governance";
import LcrDisclosures from "./Personal/About-us/Lcr-disclosures";
import LeadershipTeam from "./Personal/About-us/Leadership-team";
import PhilosophyVision from "./Personal/About-us/Philosophy-vision";
// End of About Folder files
// Help Centre files
import HelpCentre from "./Personal/Help-centre";
import Faq from "./Personal/Help-centre/Faq";
import HowToVideos from "./Personal/Help-centre/How-to-videos";
import ToolsAndCalculators from "./Personal/Help-centre/Tools-and-calculators";
//End of Help Centre files
// Amex Golf files
import TheNineAzuriGolfCourse from "./Personal/AMEX_Golf/the-nine-azuri-golf-course";
// End of Amex Golf files
// Faq folder files
import AmericanExpressSafekey from "./Personal/Help-centre/Faq/American-express-safekey";
import Atms from "./Personal/Help-centre/Faq/Atms";
import FaqBanking from "./Personal/Help-centre/Faq/Banking";
import Branches from "./Personal/Help-centre/Faq/Branches";
import Cards from "./Personal/Help-centre/Faq/Cards";
import ContactlessCards from "./Personal/Help-centre/Faq/Contactless-cards";
import General from "./Personal/Help-centre/Faq/General";
import InternetBanking from "./Personal/Help-centre/Faq/Internet-banking";
import Investments from "./Personal/Help-centre/Faq/Investments";
import McbRefill from "./Personal/Help-centre/Faq/Mcb-refill";
import FaqPrepaidCards from "./Personal/Help-centre/Faq/Prepaid-card";
import SavingsAccount from "./Personal/Help-centre/Faq/Savings-account";
import ShoppingOnlineWithDebitCards from "./Personal/Help-centre/Faq/Shopping-online-with-debit-cards";
import SmsBanking from "./Personal/Help-centre/Faq/Sms-banking";
// End Faq folder files
// End of Help Centre files
// Tools and calculators files
import Index from "./Tools-calculators/How-much-can-i-borrow/Index";
import MonthlyIndex from "./Tools-calculators/Monthly-repayment/Index";
import BankGuaranteeAuthentication from "./Tools-calculators/Bank-guarantee-authentication";
import DownloadDailyRates from "./Tools-calculators/Download-daily-rates";
import ForeignExchangeConvertor from "./Tools-calculators/Foreign-exchange-convertor";
import ToolsHowMuchCanIBorrow from "./Tools-calculators/How-much-can-i-borrow";
import IbanGenerator from "./Tools-calculators/Iban-generator";
import RequestForProposal from "./Tools-calculators/Request-for-proposal";
import UpfrontCost from "./Tools-calculators/Upfront-cost";
// End of Tools and calculators files
// Personal Files
// offer and promotions files
import OffersAndPromotions from "./Personal/OffersAndPromotions";
import HomeOffers from "./Personal/OffersAndPromotions/HomeOffers";
import Banking from "./Personal/OffersAndPromotions/Banking";
import AmericanExpressMembershipRewardsOffers from "./Personal/OffersAndPromotions/American-express-membership-rewards-offers";
import CashlessAvoyOuLwin from "./Personal/OffersAndPromotions/Cashless-avoy-ou-lwin";
// offers and promotions lifestyle files
import KairaliSpa from "./Personal/OffersAndPromotions/Lifestyle/KAIRALI-SPA";
import AlbertTradingLtd from "./Personal/OffersAndPromotions/Lifestyle/Albert-Trading-Ltd";
import ShoeConnection from "./Personal/OffersAndPromotions/Lifestyle/Shoe-Connection";
import Phydra from "./Personal/OffersAndPromotions/Lifestyle/Phydra";
import MysaHome from "./Personal/OffersAndPromotions/Lifestyle/Mysa-Home";
import Rv7Perfumery from "./Personal/OffersAndPromotions/Lifestyle/RV7-Perfumery";
import MyFitnessPal from "./Personal/OffersAndPromotions/Lifestyle/My-Fitness-Pal";
import LaValleeDesCouleursNaturePark from "./Personal/OffersAndPromotions/Lifestyle/La-Vallee-des-Couleurs-Nature-Park";
import IronLionGymApparel from "./Personal/OffersAndPromotions/Lifestyle/Iron-Lion-Gym-Apparel";
import SuhoTooOptics from "./Personal/OffersAndPromotions/Lifestyle/Suhotoo-Optics";
import RochesBoboisSpecialDeal from "./Personal/OffersAndPromotions/Lifestyle/Roche-Bobois-Special-deal";
import SofapHome from "./Personal/OffersAndPromotions/Lifestyle/Sofap-Home";
import WellCaseLtd from "./Personal/OffersAndPromotions/Lifestyle/Well-Case-Ltd";
// end of  offers and promotions lifestyle files
// Home Offers files
import ReyLenferna from "./Personal/OffersAndPromotions/Home-offers/Home/Rey-lenferna";
import TecoLtd from "./Personal/OffersAndPromotions/Home-offers/Home/Teco-Ltd";
import EntrepoDeLaPierre from "./Personal/OffersAndPromotions/Home-offers/Home/Entrepot-de-la-Pierre";
import RaisonHome from "./Personal/OffersAndPromotions/Home-offers/Home/RAISON-HOME";
import VhHomeDecorations from "./Personal/OffersAndPromotions/Home-offers/Home/VH-Home-Decorations";
import AshleyHomestore from "./Personal/OffersAndPromotions/Home-offers/Home/Ashley-Homestore";
import TempurMauritius from "./Personal/OffersAndPromotions/Home-offers/Home/Tempur-Mauritius";
import ElectricalMU from "./Personal/OffersAndPromotions/Home-offers/Home/ELECTRICAL-MU";
import LealEnergieLtd from "./Personal/OffersAndPromotions/Home-offers/Home/Leal-Energie-Ltd";
import DuracoLtd from "./Personal/OffersAndPromotions/Home-offers/Home/Duraco-Ltd";
import ProfilageOceanIndien from "./Personal/OffersAndPromotions/Home-offers/Home/Profilage-Ocean-Indien";
import Lising from "./Personal/OffersAndPromotions/Home-offers/Home/Lising";
import QualityDecor from "./Personal/OffersAndPromotions/Home-offers/Home/Quality-Decor";
import FurnitureMu from "./Personal/OffersAndPromotions/Home-offers/Home/Furniture-mu";
import DecoB from "./Personal/OffersAndPromotions/Home-offers/Home/Deco-B";
import Mauvilac from "./Personal/OffersAndPromotions/Home-offers/Home/Mauvilac";
import AssociatedTextileServices from "./Personal/OffersAndPromotions/Home-offers/Home/Associated-Textile-Services";
import DragonElectronics from "./Personal/OffersAndPromotions/Home-offers/Home/Dragon-Electronics";
import AroundThePool from "./Personal/OffersAndPromotions/Home-offers/Home/Around-The-Pool";
import GaleriesFokeerbux from "./Personal/OffersAndPromotions/Home-offers/Home/Galeries-Fokeerbux";
import FebalCasa from "./Personal/OffersAndPromotions/Home-offers/Home/Febal-Casa";
import RocheBobois from "./Personal/OffersAndPromotions/Home-offers/Home/Roche-Bobois";
import MysaMaison from "./Personal/OffersAndPromotions/Home-offers/Home/MYSA-Maison";
import SofapInspirationsStore from "./Personal/OffersAndPromotions/Home-offers/Home/Sofap-Inspirations-Store";
// end of home offers files
// Banking offers files
import EnjoyUpTo8OffOnBookingComWithVisa from "./Personal/OffersAndPromotions/banking/Banking/Enjoy-up-to-8-off-on-booking.com-with-visa";
import ContactlessCampaign2023 from "./Personal/OffersAndPromotions/banking/Banking/Contactless-campaign-2023";
import CashlessAvoyOuLwinBank from "./Personal/OffersAndPromotions/banking/Banking/Cashless-avoy-ou-lwin";
import McbrupysOffers from "./Personal/OffersAndPromotions/banking/Banking/Mcb-rupys-offfers";
// end of banking offers files
// end of offer and promotions files
import GovernmentHomeLoanScheme from "./Personal/Loans/HomeLoans/GovernmentHomeLoanScheme";
import FirstTimeHomeBuyerTips from "./Personal/Loans/HomeLoans/FirstTimeHomeBuyerTips";
import ApplyingForAHomeLoanDocumentsYouWillNeed from "./Personal/Loans/HomeLoans/ApplyingForAHomeLoanDocumentsYouWillNeed";
// Cards files
import AmericanExpress from "./Personal/Cards/American-express";
import ClassicCreditCard from "./Personal/Cards/Classic-credit-card";
import CompareOurCreditCards from "./Personal/Cards/Compare-our-credit-cards";
import GoldCreditCard from "./Personal/Cards/Gold-credit-card";
import MastercardPrimoCreditCard from "./Personal/Cards/Mastercard-primo-credit-card";
import McbDebitCard from "./Personal/Cards/Mcb-debit-card";
import McbSecure from "./Personal/Cards/Mcb-secure";
import PrepaidCards from "./Personal/Cards/Prepaid-cards";
import TravelInsurance from "./Personal/Cards/Travel-insurance";
import VisaPlatinum from "./Personal/Cards/Visa-platinum";
import VisaSignature from "./Personal/Cards/Visa-signature";
// Compare your credit cards files
import YourExclusiveCards from "./Personal/Cards/Compare-our-credit-cards/Your-exclusive-cards";
// End of compare your credit card files
// mcb debit card files
import ManagingYourDebitCardJustGotEasier from "./Personal/Cards/Mcb-debit-card/Managing-your-debit-card-just-got-easier";
// End Mcb Debit Card
// American Express Gold
import AmericanExpressGold from "./Personal/Cards/American-express/American-express-gold";
import MembershipRewards from "./Personal/Cards/American-express/Membership-rewards";
import AmericanExpressGreen from "./Personal/Cards/American-express/American-express-green";
// End Ameriacan Express Gold
// Prepaid card
import UnionPrepaidCard from "./Personal/Cards/Prepaid-cards/Unionpay-prepaid-card";
import VisaPrepaidCard from "./Personal/Cards/Prepaid-cards/Visa-prepaid-card";
// End Prepaid card
// Investment files
import EducationPlan from "./Personal/Investments/Education-plan";
import FixedDeposit from "./Personal/Investments/Fixed-deposit";
import LifeInsurance from "./Personal/Investments/Life-insurance";
import McbMutualFunds from "./Personal/Investments/Mcb-mutual-funds";
import RetirementPlan from "./Personal/Investments/Retirement-plan";
import Stockbroking from "./Personal/Investments/Stockbroking";
import HowToViewYourInvestmentPortfolio from "./Personal/Investments/Stockbroking/How-to-view-your-investment-portfolio";
// End of Investment files
// Account and packages files
import ForeignCurrencyAccount from "./Personal/Accounts-packages/Foreign-currency-account";
import Instakit from "./Personal/Accounts-packages/Instakit";
import McbRupys from "./Personal/Accounts-packages/Mcb-rupys";
import Neo from "./Personal/Accounts-packages/Neo";
import Pack1825 from "./Personal/Accounts-packages/Pack-1825";
import StandardCurrentAccount from "./Personal/Accounts-packages/Standard-current-account";
import StandardSavingsAccount from "./Personal/Accounts-packages/Standard-savings-account";
// End of Account and packages files
// End of Personal files

// En Packages files
import ADayPackageAtIleDesDeuxCocos from "./en/mediacontent/A-day-package-at-Ile-des-deux-cocos_tcm55-62105";
// End En Packages files
// Treasury Market Updates files
import TreasuryMarket2 from "./Treasury-market-updates/Treasury-Market2";
import TreasuryMarket3 from "./Treasury-market-updates/Treasury-Market3";
// End of Treasury Market Updates files
// Legal Folder files
import CookiePolicy from "./Legal/Cookie-policy";
import LegalNotice from "./Legal/Legal-notice";
// End of Legal Folder files
// Mauritius / Tools - calculators files
import HowMuchCanIBorrow from "./Mauritius/Tools-calculators/How-much-can-i-borrow";
// End of Mauritius / Tools - calculators files
// Rates and fees files
import RatesInHtmlVersion from "./Rates-fees/Rates-in-html-version";
// End of Rates and fees files
// Resources folder files
import AdherenceToFxGlobalCode from "./Resources/Adherence-to-fx-global-code";
import EnvironmentalAndSocialRiskManagement from "./Resources/Environmental-and-social-risk-management";
import LiborTransition from "./Resources/Libor-transition";
// End of Resources folder files
// Security centre files
import CardsAndAtms from "./Security-centre/Cards-and-atms";
import FraudAndScams from "./Security-centre/Fraud-and-scams";
import MoneyMuling from "./Security-centre/Money-muling";
import OnlineAndMobile from "./Security-centre/Online-and-mobile";
// End of Security centre files
// Online and mobile files
import HowMcbProtectsYou from "./Security-centre/Online-and-mobile/How-mcb-protects-you";
import WaysToKeepYourselfSafe from "./Security-centre/Online-and-mobile/Ways-to-keep-yourself-safe";
// End of online and mobile files
// Card and atms files
import HowMcbProtectsYourCard from "./Security-centre/Cards-and-atms/How-mcb-protects-you";
import WhatYouCanDoToProtectYourCards from "./Security-centre/Cards-and-atms/What-you-can-do-to-protect-your-cards";
// End of card and atms files
// FRAUD AND SCAMS
import CardFraud from "./Security-centre/Fraud-and-scams/Card-fraud";
import LatestScams from "./Security-centre/Fraud-and-scams/Latest-scams";
import MobileFraud from "./Security-centre/Fraud-and-scams/Mobile-fraud";
import OnlineFraud from "./Security-centre/Fraud-and-scams/Online-fraud";
import OtherFraud from "./Security-centre/Fraud-and-scams/Other-fraud";
// Institutional folder files
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
// End of Sme folder files
// Corporate Folder files
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
// pay folder files
import BulkPayments from "./Corporate/payment-cash/pay/Bulk-payments";
import CorperateCard from "./Corporate/payment-cash/pay/Corporate-card";
import DomesticInternationalTransfers from "./Corporate/payment-cash/pay/Domestic-international-transfers";
import DropCollect from "./Corporate/payment-cash/pay/Drop-collect";
import CorporateFleetmanCard from "./Corporate/payment-cash/pay/Fleetman-card";
import InternetBankingProSmartapprove from "./Corporate/payment-cash/pay/Internet-banking-pro-smartapprove";
import SwiftConnectivity from "./Corporate/payment-cash/pay/Swift-connectivity";
// Domestic International Transfers Folder files
import SwiftGpi from "./Corporate/payment-cash/pay/domestic-international-transfers/Swift-gpi";
// End of Domestic International Transfers Folder files
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
// import CorporateBecomeAClient from "./Corporate/what-we-do/corporate-banking/become-a-client";
import OurSuccessStories from "./Corporate/what-we-do/corporate-banking/Our-success-stories";
// End of What we do
// End of Corporate Folder files

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Personal />} />
        <Route path="/institutional" element={<Institutional />} />
        <Route path="/sme" element={<Sme />} />
        <Route path="/corporate" element={<Coperate />} />
        <Route path="/file-a-complaint" element={<FileComplaintForm />} />
        <Route path="/personal/loans/home-loan" element={<HomeLoan />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="/treasury-market-updates"
          element={<TreasuryMarketUpdates />}
        />
        <Route path="/security-centre" element={<SecurityCentre />} />
        <Route path="/rates-fees" element={<RatesFees />} />
        <Route path="/locate-us" element={<LocateUs />} />
        <Route path="/customer-forms" element={<CustomerForms />} />
        {/* Personal Files */}
        <Route path="/personal/about-us" element={<AboutUs />} />
        <Route
          path="/personal/accounts-packages"
          element={<AccountsPackages />}
        />
        <Route path="/personal/investments" element={<PersonalInvestments />} />
        <Route path="/personal/loans" element={<PersonalLoans />} />
        <Route path="/personal/ways-to-bank" element={<WaysToBank />} />
        {/* Way to bank files */}
        <Route path="/personal/ways-to-bank/atms" element={<WtbAtms />} />
        <Route
          path="/personal/ways-to-bank/bill-payments"
          element={<BillPayments />}
        />
        <Route
          path="/personal/ways-to-bank/e-statements"
          element={<WtbEstatements />}
        />
        <Route
          path="/personal/ways-to-bank/in-branch-banking"
          element={<InbranchBanking />}
        />
        <Route
          path="/personal/ways-to-bank/international-transfers"
          element={<InternationalTransfer />}
        />
        <Route
          path="/personal/ways-to-bank/internet-banking"
          element={<WtbInternetBanking />}
        />
        <Route
          path="/personal/ways-to-bank/mcb-refill"
          element={<WtbMcbRefill />}
        />
        <Route
          path="/personal/ways-to-bank/payment-solutions"
          element={<PaymentSolutions />}
        />
        <Route
          path="/personal/ways-to-bank/sms-banking"
          element={<WtbSmsBanking />}
        />
        {/* Bill payment folder */}
        <Route
          path="/personal/ways-to-bank/bill-payments/service-providers"
          element={<ServiceProviders />}
        />
        {/* Bill payment folder */}
        {/* WAY TO bank files */}
        {/* About Folder files */}
        <Route path="/personal/about-us/at-a-glance" element={<AtAGlance />} />
        <Route
          path="/personal/about-us/financials-annual-reports"
          element={<FinancialsAnnualReports />}
        />
        <Route path="/personal/about-us/governance" element={<Governance />} />
        <Route
          path="/personal/about-us/lcr-disclosures"
          element={<LcrDisclosures />}
        />
        <Route
          path="/personal/about-us/leadership-team"
          element={<LeadershipTeam />}
        />
        <Route
          path="/personal/about-us/philosophy-vision"
          element={<PhilosophyVision />}
        />
        {/* End of About Folder files */}
        {/* Help Centre files */}
        <Route path="/personal/help-centre" element={<HelpCentre />} />
        <Route path="/personal/help-centre/faq" element={<Faq />} />
        <Route
          path="/personal/help-centre/how-to-videos"
          element={<HowToVideos />}
        />
        <Route
          path="/personal/help-centre/tools-and-calculators"
          element={<ToolsAndCalculators />}
        />
        {/* End of Help Centre files */}
        {/* Amex Golf files */}
        <Route
          path="/personal/amex-golf/the-nine-azuri-golf-course"
          element={<TheNineAzuriGolfCourse />}
        />
        {/* End of Amex Golf files */}
        {/* Faq folder files */}
        <Route
          path="/personal/help-centre/faq/american-express-safekey"
          element={<AmericanExpressSafekey />}
        />
        <Route path="/personal/help-centre/faq/atms" element={<Atms />} />
        <Route
          path="/personal/help-centre/faq/banking"
          element={<FaqBanking />}
        />
        <Route
          path="/personal/help-centre/faq/branches"
          element={<Branches />}
        />
        <Route path="/personal/help-centre/faq/cards" element={<Cards />} />
        <Route
          path="/personal/help-centre/faq/contactless-cards"
          element={<ContactlessCards />}
        />
        <Route path="/personal/help-centre/faq/general" element={<General />} />
        <Route
          path="/personal/help-centre/faq/internet-banking"
          element={<InternetBanking />}
        />
        <Route
          path="/personal/help-centre/faq/investments"
          element={<Investments />}
        />
        <Route
          path="/personal/help-centre/faq/mcb-refill"
          element={<McbRefill />}
        />
        <Route
          path="/personal/help-centre/faq/prepaid-cards"
          element={<FaqPrepaidCards />}
        />
        <Route
          path="/personal/help-centre/faq/savings-account"
          element={<SavingsAccount />}
        />
        <Route
          path="/personal/help-centre/faq/shopping-online-with-debit-cards"
          element={<ShoppingOnlineWithDebitCards />}
        />
        <Route
          path="/personal/help-centre/faq/sms-banking"
          element={<SmsBanking />}
        />
        {/* End Faq folder files */}
        {/* End of Help Centre files
        {/* End of Personal Files */}
        {/* Tools and calculators files */}
        <Route
          path="/tools-calculators/how-much-can-i-borrow/index"
          element={<Index />}
        />
        <Route
          path="/tools-calculators/monthly-repayment/index"
          element={<MonthlyIndex />}
        />
        <Route
          path="/tools-calculators/bank-guarantee-authentication"
          element={<BankGuaranteeAuthentication />}
        />
        <Route
          path="/tools-calculators/download-daily-rates"
          element={<DownloadDailyRates />}
        />
        <Route
          path="/tools-calculators/foreign-exchange-convertor"
          element={<ForeignExchangeConvertor />}
        />
        <Route
          path="/tools-calculators/how-much-can-i-borrow"
          element={<ToolsHowMuchCanIBorrow />}
        />
        <Route
          path="/tools-calculators/iban-generator"
          element={<IbanGenerator />}
        />
        <Route
          path="/tools-calculators/request-for-proposal"
          element={<RequestForProposal />}
        />
        <Route
          path="/tools-calculators/upfront-cost"
          element={<UpfrontCost />}
        />
        {/* End of Tools and calculators files */}
        {/* Treasury market files */}
        <Route
          path="/treasury-market-updates/treasury-market2"
          element={<TreasuryMarket2 />}
        />
        <Route
          path="/treasury-market-updates/treasury-market3"
          element={<TreasuryMarket3 />}
        />
        {/* End of treasury market files */}
        {/* offer and promotion files */}
        <Route
          path="/personal/offers-and-promotions"
          element={<OffersAndPromotions />}
        />
        {/* offers and promotions Lifestyle files */}
        <Route
          path="/personal/offers-and-promotions/lifestyle/kairali-spa"
          element={<KairaliSpa />}
        />
        <Route
          path="/personal/offers-and-promotions/lifestyle/albert-trading-ltd"
          element={<AlbertTradingLtd />}
        />
        <Route
          path="/personal/offers-and-promotions/lifestyle/shoe-connection"
          element={<ShoeConnection />}
        />
        <Route
          path="/personal/offers-and-promotions/lifestyle/phydra"
          element={<Phydra />}
        />
        <Route
          path="/personal/offers-and-promotions/lifestyle/mysa-home"
          element={<MysaHome />}
        />
        <Route
          path="/personal/offers-and-promotions/lifestyle/rv7-perfumery"
          element={<Rv7Perfumery />}
        />
        <Route
          path="/personal/offers-and-promotions/lifestyle/my-fitness-pal"
          element={<MyFitnessPal />}
        />
        <Route
          path="/personal/offers-and-promotions/lifestyle/la-vallee-des-couleurs-nature-park"
          element={<LaValleeDesCouleursNaturePark />}
        />
        <Route
          path="/personal/offers-and-promotions/lifestyle/iron-lion-gym-apparel"
          element={<IronLionGymApparel />}
        />
        <Route
          path="/personal/offers-and-promotions/lifestyle/suhotoo-optics"
          element={<SuhoTooOptics />}
        />
        <Route
          path="/personal/offers-and-promotions/lifestyle/roche-bobois-special-deal"
          element={<RochesBoboisSpecialDeal />}
        />
        <Route
          path="/personal/offers-and-promotions/lifestyle/sofap-home"
          element={<SofapHome />}
        />
        <Route
          path="/personal/offers-and-promotions/lifestyle/well-case-ltd"
          element={<WellCaseLtd />}
        />
        {/* cashless avouy files */}
        <Route
          path="/personal/offers-and-promotions/cashless-avoy-ou-lwin"
          element={<CashlessAvoyOuLwin />}
        />
        {/* end of offer and promotions file */}
        {/* Home Offers files */}
        <Route path="/personal/home-offers" element={<HomeOffers />} />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/rey-lenferna"
          element={<ReyLenferna />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/teco-ltd"
          element={<TecoLtd />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/entrepot-de-la-pierre"
          element={<EntrepoDeLaPierre />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/raison-home"
          element={<RaisonHome />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/vh-home-decorations"
          element={<VhHomeDecorations />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/ashley-homestore"
          element={<AshleyHomestore />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/tempur-mauritius"
          element={<TempurMauritius />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/electrical-mu"
          element={<ElectricalMU />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/leal-energie-ltd"
          element={<LealEnergieLtd />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/duraco-ltd"
          element={<DuracoLtd />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/profilage-ocean-indien"
          element={<ProfilageOceanIndien />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/lising"
          element={<Lising />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/quality-decor"
          element={<QualityDecor />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/furniture-mu"
          element={<FurnitureMu />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/deco-b"
          element={<DecoB />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/mauvilac"
          element={<Mauvilac />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/associated-textile-services"
          element={<AssociatedTextileServices />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/dragon-electronics"
          element={<DragonElectronics />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/around-the-pool"
          element={<AroundThePool />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/galeries-fokeerbux"
          element={<GaleriesFokeerbux />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/febalcasa"
          element={<FebalCasa />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/roche-bobois"
          element={<RocheBobois />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/mysa-maison"
          element={<MysaMaison />}
        />
        <Route
          path="/personal/offers-and-promotions/home-offers/home/sofap-inspirations-store"
          element={<SofapInspirationsStore />}
        />
        {/* END HOME OFFERS FILES */}
        {/* Banking offers files */}
        <Route
          path="/personal/offers-and-promotions/banking/enjoy-up-to-8-off-on-booking-com-with-visa"
          element={<EnjoyUpTo8OffOnBookingComWithVisa />}
        />
        <Route
          path="/personal/offers-and-promotions/banking/contactless-campaign-2023"
          element={<ContactlessCampaign2023 />}
        />
        <Route
          path="/personal/offers-and-promotions/banking/cashless-avoy-ou-lwin"
          element={<CashlessAvoyOuLwinBank />}
        />
        <Route
          path="/personal/offers-and-promotions/banking/mcb-rupys-offfers"
          element={<McbrupysOffers />}
        />
        {/* end of banking offers files */}
        {/* Banking offers file */}
        <Route path="/personal/banking" element={<Banking />} />
        {/* American express membership reward offers */}
        <Route
          path="/personal/american-express-membership-rewards-offers"
          element={<AmericanExpressMembershipRewardsOffers />}
        />
        {/* end of home offers files */}
        <Route
          path="/personal/loans/home-loan/government-home-loan-scheme"
          element={<GovernmentHomeLoanScheme />}
        />
        <Route
          path="/personal/loans/home-loan/first-time-home-buyer-tips"
          element={<FirstTimeHomeBuyerTips />}
        />
        <Route
          path="/personal/loans/home-loan/applying-for-a-home-loan-documents-you-will-need"
          element={<ApplyingForAHomeLoanDocumentsYouWillNeed />}
        />
        {/* Cards files */}
        <Route
          path="/personal/cards/american-express"
          element={<AmericanExpress />}
        />
        <Route
          path="/personal/cards/classic-credit-card"
          element={<ClassicCreditCard />}
        />
        <Route
          path="/personal/cards/compare-our-credit-cards"
          element={<CompareOurCreditCards />}
        />
        <Route
          path="/personal/cards/gold-credit-card"
          element={<GoldCreditCard />}
        />
        <Route
          path="/personal/cards/mastercard-primo-credit-card"
          element={<MastercardPrimoCreditCard />}
        />
        <Route
          path="/personal/cards/mcb-debit-card"
          element={<McbDebitCard />}
        />
        <Route path="/personal/cards/mcb-secure" element={<McbSecure />} />
        <Route
          path="/personal/cards/prepaid-cards"
          element={<PrepaidCards />}
        />
        <Route
          path="/personal/cards/travel-insurance"
          element={<TravelInsurance />}
        />
        <Route
          path="/personal/cards/visa-platinum"
          element={<VisaPlatinum />}
        />
        <Route
          path="/personal/cards/visa-signature"
          element={<VisaSignature />}
        />
        {/* Compare your credit cards files */}
        <Route
          path="/personal/cards/compare-our-credit-cards/your-exclusive-cards"
          element={<YourExclusiveCards />}
        />
        {/* End of compare your credit card files */}
        {/* Mcb debit card files */}
        <Route
          path="/personal/cards/mcb-debit-card/managing-your-debit-card-just-got-easier"
          element={<ManagingYourDebitCardJustGotEasier />}
        />
        {/* End Mcb Debit Card */}
        {/* American Express Gold */}
        <Route
          path="/personal/cards/american-express/american-express-gold"
          element={<AmericanExpressGold />}
        />
        <Route
          path="/personal/cards/american-express/membership-rewards"
          element={<MembershipRewards />}
        />
        <Route
          path="/personal/cards/american-express/american-express-green"
          element={<AmericanExpressGreen />}
        />
        {/* End Ameriacn Express Gold */}
        {/* Prepaid card */}
        <Route
          path="/personal/cards/prepaid-cards/unionpay-prepaid-card"
          element={<UnionPrepaidCard />}
        />
        <Route
          path="/personal/cards/prepaid-cards/visa-prepaid-card"
          element={<VisaPrepaidCard />}
        />
        {/* End Prepaid card */}
        {/* End of card files */}
        {/* Investment files */}
        <Route
          path="/personal/investments/education-plan"
          element={<EducationPlan />}
        />
        <Route
          path="/personal/investments/fixed-deposit"
          element={<FixedDeposit />}
        />
        <Route
          path="/personal/investments/life-insurance"
          element={<LifeInsurance />}
        />
        <Route
          path="/personal/investments/mcb-mutual-funds"
          element={<McbMutualFunds />}
        />
        <Route
          path="/personal/investments/retirement-plan"
          element={<RetirementPlan />}
        />
        <Route
          path="/personal/investments/stockbroking"
          element={<Stockbroking />}
        />
        <Route
          path="/personal/investments/stockbroking/how-to-view-your-investment-portfolio"
          element={<HowToViewYourInvestmentPortfolio />}
        />
        <Route
          path="/personal/accounts-packages/foreign-currency-account"
          element={<ForeignCurrencyAccount />}
        />
        <Route
          path="/personal/accounts-packages/instakit"
          element={<Instakit />}
        />
        <Route
          path="/personal/accounts-packages/mcb-rupys"
          element={<McbRupys />}
        />
        <Route path="/personal/accounts-packages/neo" element={<Neo />} />
        <Route
          path="/personal/accounts-packages/pack-1825"
          element={<Pack1825 />}
        />
        <Route
          path="/personal/accounts-packages/standard-current-account"
          element={<StandardCurrentAccount />}
        />
        <Route
          path="/personal/accounts-packages/standard-savings-account"
          element={<StandardSavingsAccount />}
        />
        {/* End of Investment files */}
        {/* End of Personal files */}
        {/* Sme Folder files */}
        <Route path="/sme/bank" element={<Bank />} />
        <Route path="/sme/borrow" element={<Borrow />} />
        <Route
          path="/sme/business-introducer"
          element={<BusinessIntroducer />}
        />
        <Route path="/sme/finance" element={<Finance />} />
        <Route path="/sme/partnerships" element={<Partnerships />} />
        <Route path="/sme/pay" element={<Pay />} />
        <Route path="/sme/sme-connect" element={<SmeConnect />} />
        <Route path="/sme/structure" element={<Structure />} />
        {/* Sme Connect Files */}
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
        {/* End Sme Connect Files */}
        {/* bORROW folder */}
        <Route
          path="/sme/borrow/bank-guarantees"
          element={<BankGuarantees />}
        />
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
        {/* End Borrow Folder */}
        {/* Bank Folder */}
        <Route
          path="/sme/bank/business-account"
          element={<BusinessAccount />}
        />
        <Route
          path="/sme/bank/tailor-made-solutions"
          element={<TailorMadeSolutions />}
        />
        <Route
          path="/sme/bank/transact-anytime-anywhere"
          element={<TransactAnytimeAnywhere />}
        />
        {/* Transact Anytime Folder */}
        <Route
          path="/sme/bank/transact-anytime-anywhere/atm"
          element={<Atm />}
        />
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
        {/* End of Transact Anytime Folder */}
        {/* Bank Folder */}
        <Route path="/sme/pay/cards" element={<SmeCards />} />
        <Route path="/sme/pay/cheques" element={<Cheque />} />
        <Route
          path="/sme/pay/electronic-payments"
          element={<ElectronicePayments />}
        />
        <Route path="/sme/pay/payroll-services" element={<PayrollServices />} />
        {/* End of Bank Folder */}
        {/* Electric payment folder */}
        <Route
          path="/sme/pay/electronic-payments/e-commerce-solutions"
          element={<EcommerceSolutions />}
        />
        <Route
          path="/sme/pay/electronic-payments/electronic-transfer"
          element={<ElectronicTransfer />}
        />
        {/* End of Electric payment folder */}
        {/* Cards folder */}
        <Route path="/sme/pay/cards/business-card" element={<BusinessCard />} />
        <Route
          path="/sme/pay/cards/business-deposit-card"
          element={<SmeBusinessDepositCard />}
        />
        <Route path="/sme/pay/cards/fleetman-card" element={<FleetmanCard />} />
        {/* End CARDS FOLDER */}
        {/* Pay Folder */}
        {/* End Of Pay Folder */}
        {/* End Of Sme Folder files */}
        {/* Institutional Folder files */}
        <Route path="/institutional/events" element={<Events />} />
        <Route
          path="/institutional/mcb-at-a-glance"
          element={<McbAtAGlance />}
        />
        <Route
          path="/institutional/our-geographical-presence"
          element={<OurGeographicalPresence />}
        />
        <Route path="/institutional/our-solutions" element={<OurSolutions />} />
        {/* Solution folder Files */}
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
        {/* End of our solutions folder files */}
        {/* Mcb at a glance folder files */}
        <Route
          path="/institutional/mcb-at-a-glance/facts-figures"
          element={<FactsFigures />}
        />
        <Route
          path="/institutional/mcb-at-a-glance/recognitions-accolades"
          element={<RecognitionsAccolades />}
        />
        {/* End of Institutional Folder files */}
        {/* Corporate Folder files */}
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
          path="/corporate/security-center"
          element={<CorporateSecurityCenter />}
        />
        <Route path="/corporate/what-we-do" element={<WhatWeDo />} />
        {/* Payment- cash folder */}
        <Route path="/corporate/payment-cash/collect" element={<Collect />} />
        <Route path="/corporate/payment-cash/monitor" element={<Monitor />} />
        <Route path="/corporate/payment-cash/optimise" element={<Optimise />} />
        <Route path="/corporate/payment-cash/pay" element={<CorperatePay />} />
        {/* pay folder file */}
        <Route
          path="/corporate/payment-cash/pay/bulk-payments"
          element={<BulkPayments />}
        />
        <Route
          path="/corporate/payment-cash/pay/corporate-card"
          element={<CorperateCard />}
        />
        <Route
          path="/corporate/payment-cash/pay/domestic-international-transfers"
          element={<DomesticInternationalTransfers />}
        />
        <Route
          path="/corporate/payment-cash/pay/drop-collect"
          element={<DropCollect />}
        />
        <Route
          path="/corporate/payment-cash/pay/fleetman-card"
          element={<CorporateFleetmanCard />}
        />
        <Route
          path="/corporate/payment-cash/pay/internet-banking-pro-smartapprove"
          element={<InternetBankingProSmartapprove />}
        />
        <Route
          path="/corporate/payment-cash/pay/swift-connectivity"
          element={<SwiftConnectivity />}
        />
        <Route
          path="/corporate/payment-cash/pay/domestic-international-transfers/swift-gpi"
          element={<SwiftGpi />}
        />
        {/* End of pay folder files */}
        {/* Monitor folder */}
        <Route
          path="/corporate/payment-cash/monitor/e-statements"
          element={<CorporateEStatements />}
        />
        <Route
          path="/corporate/payment-cash/monitor/reporting-services-ib-dashboard"
          element={<ReportingServicesIbDashboard />}
        />
        {/* End Monitor folder */}
        {/* Optimise Folder files */}
        <Route
          path="/corporate/payment-cash/optimise/cash-pooling-services"
          element={<CashPoolingServices />}
        />
        <Route
          path="/corporate/payment-cash/optimise/fx-money-market-services"
          element={<FxMoneyMarketServices />}
        />
        {/* Optimise Folder Files */}
        {/* Collect folder Files */}
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
        {/* End Ecommerce folder files */}
        {/* Collect folder files */}
        {/* End Payment cash folder */}
        {/* Faq folder */}
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
        {/* End of Faq folder */}
        {/* Investment Advisory folder files */}
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
        {/* Global Market */}
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
        {/* End Global Market */}
        {/* End Investment Advisory folder files */}
        {/* Finance lending files */}
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
        {/* MCb leasing */}
        <Route
          path="/corporate/finance-lending/asset-finance/mcb-leasing"
          element={<McbLeasing />}
        />
        {/* End Mcb leasing */}
        {/* Supply chain finance */}
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
        {/* Trade Finance files */}
        <Route
          path="/corporate/finance-lending/supply-chain-finance/trade-finance/trade-finance-forms"
          element={<TradeFinanceForms />}
        />
        {/* Supply chain finance */}
        {/* Corporate Lending */}
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
        {/* Corporate Lending */}
        {/* Structured Finance */}
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
        {/* Energy comodites */}
        <Route
          path="/corporate/finance-lending/structured-finance/energy-commodities/our-success-stories"
          element={<CorporateOurSuccessStories />}
        />
        {/* Energy comodites */}
        {/* End Structured finance */}
        {/* End Finance lending files */}
        {/* Mcb at a glance */}
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
        {/* End Mcb at a glance */}
        {/* WHAT WE DO */}
        <Route
          path="/corporate/what-we-do/corporate-banking"
          element={<WWDCorporateBanking />}
        />
        <Route
          path="/corporate/what-we-do/global-business"
          element={<GlobalBusiness />}
        />
        {/* Global buisness folder */}
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
        {/* End of Global Business folder */}
        {/* Corporate banking folder  */}
        {/* <Route
          path="/corporate/what-we-do/corporate-banking/become-a-client"
          element={<CorporateBecomeAClient />}
        /> */}
        <Route
          path="/corporate/what-we-do/corporate-banking/our-success-stories"
          element={<OurSuccessStories />}
        />
        {/* End Corporate banking */}
        {/* End What we do */}
        {/* End Corporate Folder Files */}
        {/* En Packages files */}
        <Route
          path="/en/mediacontent/a-day-package-at-ile-des-deux-cocos_tcm55-62105"
          element={<ADayPackageAtIleDesDeuxCocos />}
        />
        {/* End En Packages files */}
        {/* Legal folder files */}
        <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
        <Route path="/legal/legal-notice" element={<LegalNotice />} />
        {/* Legal folder files */}
        {/* Mauritius / Tools - calculators files */}
        <Route
          path="/mauritius/tools-calculators/how-much-can-i-borrow"
          element={<HowMuchCanIBorrow />}
        />
        {/* End of Mauritus / Tools - calculators files */}
        {/* Rates and fees files */}
        <Route
          path="/rates-fees/rates-in-html-version"
          element={<RatesInHtmlVersion />}
        />
        {/* End of rates and fees files */}
        {/* Resources folder files */}
        <Route
          path="/resources/adherence-to-fx-global-code"
          element={<AdherenceToFxGlobalCode />}
        />
        <Route
          path="/resources/environmental-and-social-risk-management"
          element={<EnvironmentalAndSocialRiskManagement />}
        />
        <Route
          path="/resources/libor-transition"
          element={<LiborTransition />}
        />
        {/* End of resources folder files */}
        {/* Security centre files */}
        <Route
          path="/security-centre/cards-and-atms"
          element={<CardsAndAtms />}
        />
        <Route
          path="/security-centre/fraud-and-scams"
          element={<FraudAndScams />}
        />
        <Route path="/security-centre/money-muling" element={<MoneyMuling />} />
        <Route
          path="/security-centre/online-and-mobile"
          element={<OnlineAndMobile />}
        />
        {/* End of Security center files */}
        {/* Online and mobile files */}
        <Route
          path="/security-centre/online-and-mobile/how-mcb-protects-you"
          element={<HowMcbProtectsYou />}
        />
        <Route
          path="/security-centre/online-and-mobile/ways-to-keep-yourself-safe"
          element={<WaysToKeepYourselfSafe />}
        />
        {/* End of online and mobile files */}
        {/* Card and atms files */}
        <Route
          path="/security-centre/cards-and-atms/how-mcb-protects-you"
          element={<HowMcbProtectsYourCard />}
        />
        <Route
          path="/security-centre/cards-and-atms/what-you-can-do-to-protect-your-cards"
          element={<WhatYouCanDoToProtectYourCards />}
        />
        {/* End of Cards and atm files */}
        {/* FRAUD AND SCAMS */}
        <Route
          path="/security-centre/fraud-and-scams/card-fraud"
          element={<CardFraud />}
        />
        <Route
          path="/security-centre/fraud-and-scams/latest-scams"
          element={<LatestScams />}
        />
        <Route
          path="/security-centre/fraud-and-scams/mobile-fraud"
          element={<MobileFraud />}
        />
        <Route
          path="/security-centre/fraud-and-scams/online-fraud"
          element={<OnlineFraud />}
        />
        <Route
          path="/security-centre/fraud-and-scams/other-fraud"
          element={<OtherFraud />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
