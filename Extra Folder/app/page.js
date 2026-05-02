import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
// import Categories from "@/components/Categories";
import MembershipCTA from "@/components/MembershipCTA";
import AboutPage from "@/components/About";

export default function Page() {
  return (
    <div>

      {/* 🔥 Banner */}
      <Banner />

      {/* 📚 Featured Books */}
      <FeaturedBooks />

      {/* 📂 Categories */}
      {/* <Categories /> */}

      {/* ℹ️ About Section */}
      <AboutPage />
      
      {/* 🚀 Membership CTA */}
      <MembershipCTA />

      

    </div>
  );
}