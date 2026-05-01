import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import Categories from "@/components/Categories";
import MembershipCTA from "@/components/MembershipCTA";

export default function Page() {
  return (
    <div>

      {/* 🔥 Banner */}
      <Banner />

      {/* 📚 Featured Books */}
      <FeaturedBooks />

      {/* 📂 Categories */}
      <Categories />

      {/* 🚀 Membership CTA */}
      <MembershipCTA />

    </div>
  );
}