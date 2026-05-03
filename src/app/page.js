import Banner from "@/components/home/Banner";
import FeaturedBooks from "@/components/home/FeaturedBooks";
// import Categories from "@/components/Categories";
import MembershipCTA from "@/components/home/MembershipCTA";
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