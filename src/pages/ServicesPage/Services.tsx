import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import CardLG from "@/components/ServicesPage/Card";
import Heading from "@/components/ServicesPage/Heading";
import ServeOne from "@/resources/serveOne.jpg";
import ServeTwo from "@/resources/serveTwo.jpg";
import ServeThree from "@/resources/serveThree.jpg";
import ServeFour from "@/resources/serveFour.jpg";
import React from "react";
import CardSM from "@/components/ServicesPage/CardSM";

function Services() {
  let cardOne = {
    img: ServeOne,
    topic: "Work Permit Assistance",
    content:
      "Navigating the complexities of international work permits can be challenging, but with Randiv Work Force, you’re in safe hands. We specialize in securing work permits for a variety of countries, including the UK, Japan, New Zealand, and other European nations. Our team ensures that your application is complete, accurate, and submitted on time, giving you the best chance of approval.",
    facilityOne: "Country-Specific Expertise",
    facilityOneContent: "Tailored advice and support for each country’s visa requirements.",
    facilityTwo: "Document Preparation",
    facilityTwoContent: "Assistance with gathering, completing, and verifying all necessary documents.",
    facilityThree: "Application Submission",
    facilityThreeContent: "We handle the entire submission process on your behalf.",
  };

  let cardTwo = {
    img: ServeTwo,
    topic: "Financial Assistance for Applicants",
    content:
      "We understand that the cost of securing a job abroad can be a burden. That’s why we offer financial assistance in the form of loans to cover your expenses during the application process. Our loans are designed to be flexible and affordable, with repayment terms that are clearly outlined and fair.",
    facilityOne: "Loan Coverage",
    facilityOneContent: "Assistance with visa fees, travel costs, and other related expenses.",
    facilityTwo: "Flexible Repayment",
    facilityTwoContent: "Repay your loan under agreed conditions once you start earning abroad.",
    facilityThree: "Refundable Under Conditions",
    facilityThreeContent: "We handle the entire submission process on your behalf.",
  };

  let cardThree = {
    img: ServeThree,
    topic: "Career Counseling & Pre-Departure Support",
    content:
      "Starting a job in a new country is a big step, and we’re here to make the transition as smooth as possible. Our experts offer personalized career counseling to help you choose the best opportunity based on your skills and aspirations. Additionally, we provide guidance on what to expect in your new country, cultural orientation, and practical tips for settling in.",
    facilityOne: "Personalized Career Counseling",
    facilityOneContent: "Identify the best opportunities that match your skills and goals.",
    facilityTwo: "Pre-Departure Orientation",
    facilityTwoContent: "Learn about the culture, work environment, and living conditions in your new country.",
    facilityThree: "Ongoing Support",
    facilityThreeContent: "Continuous assistance until you are fully settled in your new role.",
  };

  let cardFour = {
    img: ServeFour,
    topic: "Job Placement in UK Care Homes",
    content:
      "Randiv Work Force specializes in placing skilled Nurses and Carers in UK Care Homes, where demand is high and opportunities are plentiful. We work closely with reputable care homes to ensure that our candidates are matched with roles that suit their experience and preferences.",
    facilityOne: "High-Demand Roles",
    facilityOneContent: "Opportunities for Nurses and Carers in various care homes across the UK.",
    facilityTwo: "Comprehensive Matching",
    facilityTwoContent: "We align your qualifications with the right position to ensure job satisfaction.",
    facilityThree: "Continuous Support",
    facilityThreeContent: "From job placement to contract negotiation and beyond.",
  };

  return (
    <>
      <NavBar />
      <Heading />
      <div className="h-[80px]"></div>

      <div className="flex items-center justify-center flex-col gap-10">

        <div className="w-[1200px] lg:block hidden">
        <CardLG {...cardOne} />
        <CardLG {...cardTwo} />
        <CardLG {...cardThree} />
        <CardLG {...cardFour} />
        </div>

        <div className="w-[1200px] lg:hidden">
        <CardSM {...cardOne} />
        <CardSM {...cardTwo} />
        <CardSM {...cardThree} />
        <CardSM {...cardFour} />
        </div>

      </div>
      

      <Footer />
    </>
  );
}

export default Services;
