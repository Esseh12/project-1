import { BrowserRouter, Routes, Route } from "react-router-dom";
// Main pages
import Personal from "./mainPages/Personal";
import Institutional from "./mainPages/Institutional";
import Sme from "./mainPages/Sme";
import Coperate from "./mainPages/Coperate";
import FileComplaintForm from "./mainPages/file-a-complaint";
import HomeLoan from "./Personal/Loans/Home-loan";
import TreasuryMarketUpdates from "./mainPages/Treasury-market-updates";
import SecurityCentre from "./mainPages/Security-centre";
import RatesFees from "./mainPages/Rates-fees";
import LocateUs from "./mainPages/Locate-us";
import CustomerForms from "./mainPages/Customer-forms";
// End of main pages
// Personal Files
import AboutUs from "./Personal/About-us";
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

// Institutional Folder files
import Events from "./Institutional/Events";
import McbAtAGlance from "./Institutional/Mcb-at-a-glance";
import OurGeographicalPresence from "./Institutional/Our-geographical-presence";
import OurSolutions from "./Institutional/Our-solutions";

// Our Solutions folder files
import BankOfBanks from "./Institutional/Our-solutions/Bank-of-banks";
import CorrespondentBanking from "./Institutional/Our-solutions/Correspondent-banking";
import RiskSharing from "./Institutional/Our-solutions/Risk-sharing";
import Syndications from "./Institutional/Our-solutions/Syndications";
// End of our solutions folder files
// Mcb at a glance folder files
import FactsFigures from "./Institutional/Mcb-at-a-glance/Facts-figures";
import RecognitionsAccolades from "./Institutional/Mcb-at-a-glance/Recognitions-accolades";
// End of Mcb at a glance folder files
// End of Institutional Folder files

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Personal />} />
        <Route path="/institutional" element={<Institutional />} />
        <Route path="/sme" element={<Sme />} />
        <Route path="/corporate" element={<Coperate />} />
        <Route path="/file-a-complaint" element={<FileComplaintForm />} />
        <Route path="/personal/loans/home-loan" element={<HomeLoan />} />
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
}

export default App;
