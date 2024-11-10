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
// offer and promotions files
import OffersAndPromotions from "./Personal/OffersAndPromotions";
import HomeOffers from "./Personal/HomeOffers";
import Banking from "./Personal/Banking";
import AmericanExpressMembershipRewardsOffers from "./Personal/American-express-membership-rewards-offers";
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
// end of offer and promotions files
import GovernmentHomeLoanScheme from "./Personal/Loans/HomeLoans/GovernmentHomeLoanScheme";
import FirstTimeHomeBuyerTips from "./Personal/Loans/HomeLoans/FirstTimeHomeBuyerTips";
import ApplyingForAHomeLoanDocumentsYouWillNeed from "./Personal/Loans/HomeLoans/ApplyingForAHomeLoanDocumentsYouWillNeed";
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
// End of Security centre files

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
        {/* End of Security center files */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
