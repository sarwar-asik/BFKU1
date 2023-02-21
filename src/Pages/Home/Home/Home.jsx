import React from "react";
import UpComing from "../UpComing/UpComing";
import LiveMatch from "../LiveMetch/LiveMatch/LiveMatch";
import SecondHeader from "../SecondHeader/SecondHeader";

const Home = () => {
  return (
    <main>
      {/* ***************** Secon Header ****************** */}
      <header>
        <SecondHeader></SecondHeader>
      </header>

      {/* ***************** Secon Header ****************** */}
      {/* ***************** UpComming And Live ****************** */}
      <section className="grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4 lg:gap-8 px-4 py-8 lg:py-16">
        <LiveMatch></LiveMatch>
        <UpComing></UpComing>
      </section>
      {/* ***************** UpComming And Live ****************** */}

      <div></div>
    </main>
  );
};

export default Home;
