import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// home screen
import Welcome from "./home/welcome/Welcome";
import JobListing from "./home/joblisting/JobListing";
import JobListingCard from "./common/cards/joblisting/JobListingCard";
import CandidateCard from "./common/cards/candidates/CandidateCard";
import Candidates from "./home/candidates/candidates";

// job details screen
import Company from "./jobdetails/company/Company";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";
import { default as JobAbout } from "./jobdetails/about/About";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";
import PostJobButton from './button/button'

// common


export {
  ScreenHeaderBtn,
  Welcome,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  JobListingCard,
  JobListing,
  Candidates,
  CandidateCard,
  PostJobButton,
};
