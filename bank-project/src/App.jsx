import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personal from "./mainPages/Personal";
import Institutional from "./mainPages/Institutional";
import Sme from "./mainPages/Sme";
import Coperate from "./mainPages/Coperate";
import FileComplaintForm from "./mainPages/file-a-complaint";
import HomeLoan from "./Personal/Loans/Home-loan";
// offer and promotions files
import OffersAndPromotions from "./Personal/OffersAndPromotions";
import KairaliSpa from "./Personal/OffersAndPromotions/Lifestyle/KAIRALI-SPA";
import AlbertTradingLtd from "./Personal/OffersAndPromotions/Lifestyle/Albert-Trading-Ltd";
import ShoeConnection from "./Personal/OffersAndPromotions/Lifestyle/Shoe-Connection";
import Phydra from "./Personal/OffersAndPromotions/Lifestyle/Phydra";
import MysaHome from "./Personal/OffersAndPromotions/Lifestyle/Mysa-Home";
import Rv7Perfumery from "./Personal/OffersAndPromotions/Lifestyle/RV7-Perfumery";
import MyFitnessPal from "./Personal/OffersAndPromotions/Lifestyle/My-Fitness-Pal";
// end of offer and promotions files
import GovernmentHomeLoanScheme from "./Personal/Loans/HomeLoans/GovernmentHomeLoanScheme";
import FirstTimeHomeBuyerTips from "./Personal/Loans/HomeLoans/FirstTimeHomeBuyerTips";
import ApplyingForAHomeLoanDocumentsYouWillNeed from "./Personal/Loans/HomeLoans/ApplyingForAHomeLoanDocumentsYouWillNeed";

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
        {/* offer and promotion files */}
        <Route
          path="/personal/offers-and-promotions"
          element={<OffersAndPromotions />}
        />
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
        {/* end of offer and promotions file */}
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
