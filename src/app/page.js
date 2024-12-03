"use client";

import Card from "@/components/ui/Card";
import HeroSlider from "@/components/ui/HeroSlider";
import FabricHeader from "@/components/ui/FabricHeader";

import React, { useEffect, useState } from "react";
import Section from "@/components/ui/Section";
import VerticalCard from "@/components/ui/VerticalCard";
import content from "@/lib/service/content.json";
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HeroSlider
        slidelist={content.slidelist}
        containerClass={"h-[500px] w-full"}
      />
      <FabricHeader className="mx-auto container header reveal" />
      {showButton && (
        <FaArrowUp
          onClick={scrollToTop}
          size={46}
          className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-full z-40 cursor-pointer"
        />
      )}

      {/* Akdulum Kum Ocağı ve Çimento */}
      <Section className="mt-32 py-24 laptop:mt-8 laptop:py-12 mobile:mt-24 mobile:py-4  mobile:p-8 ">
        <div className="flex flex-nowrap mobile:flex-col items-center justify-center align-center py-5 gap-10 : ">
          <div className="h-[700px] flex flew-col items-end relative w-auto gap-2 mobile:h-auto laptop:w-1/2">
            <div className="w-[300px] h-full flex items-center pb-40 mobile:pb-20 relative fade-down late-load mobile:w-full">
              <img
                className="w-full h-auto object-cover rounded-md"
                src="/images/image3.jpeg"
              />
            </div>
            <div className="w-[300px] h-full flex items-center pt-40 mobile:pt-20 relative fade-up late-load mobile:w-full">
              <img
                className="w-full h-auto object-cover rounded-md"
                src="/images/image6.jpeg"
              />
            </div>

            {/* <div className="w-[300px] h-max bg-[#1E3E62] p-10 mb-8 -ml-32 z-10 text-white">
              Akdulum Kum Ocağı: Güvenli, Hızlı ve Zamanında Teslimat. Yüksek Tesis kapasitemizle her projeye en kaliteli malzemeyi, zamanında ulaştırıyoruz!
            </div> */}
          </div>

          <div className="py-12 px-4 gap-10 w-1/2 fade-right late-load mobile:w-full mobile:px-0 mobile:py-0">
            <div className="p-8 mobile:p-4 border border-primary rounded-md ">
              <h2 className="text-3xl font-bold text-left mb-3 text-secondary mobile:text-xl mobile:text-center">
                Akdulum Kum Ocağı ve Çimento
              </h2>
              <p className="text-md mobile:text-sm  mobile:text-start">
                İnşaat sektörü, doğru malzeme seçimiyle sağlam ve uzun ömürlü
                yapılar inşa etmenin temelini atar. Bu noktada Akdulum Kum Ocağı
                ve Akdulum Çimento olarak, 2005 yılından bu yana kaliteli ve
                yüksek Tesis kapasitemizle sektörün güvenilir adresi olmanın
                gururunu yaşıyoruz. Akdulum Kum Ocağı ve Akdulum Çimento,
                inşaatın her aşamasında ihtiyaç duyduğunuz kum ve çimento
                ürünlerini en yüksek standartlarda sunar. Şap kumu, sıva kumu ve
                mucur çeşitleriyle sağladığımız geniş ürün yelpazesi,
                projelerinizi her yönüyle destekler ve başarıya ulaşmanızı
                sağlar.
              </p>
              <h3 className="text-xl font-bold text-left text-white mt-10 mb-3 mobile:text-xl ">
                Siz de Akdulum Kalitesiyle Tanışın!
              </h3>
              <p className="text-md mobile:text-sm  mobile:text-start">
                Akdulum Kum Ocağı, sektördeki deneyimi ve müşteri odaklı hizmet
                anlayışıyla daima yanınızdadır. İnşaat projelerinizi hayata
                geçirirken, yalnızca kaliteli ve güvenilir malzemelerle
                çalışmanın önemini biliyoruz. Akdulum Kum Ocağı'nın her
                büyüklükteki projeye uygun ürün seçenekleriyle, başarıya giden
                yolu birlikte inşa edelim. Akdulum Kum Ocağı, güvenilirliği ve
                kalitesiyle projelerinizdeki en önemli iş ortağınız olacaktır.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Yüksek Tesis Kapasitesi ve Güvenilirlik */}
      <Section
        backgroundImage="/images/bg-texture.svg"
        backgroundClassname="w-full absolute left-0 top-0 mix-blend-overlay opacity-20"
        className="w-full max-w-full bg-darker-secondary mobile:mt-0 mobile:py-0  mobile:p-8   "
      >
        <div className="flex py-20 mobile:py-10 container mx-auto gap-16 mobile:gap-4 text-white relative fade-up late-load mobile:flex-col items-center ">
          <div className="w-full text-lg flex-1 items-center">
            <h2 className="text-3xl font-bold mb-3 p  mobile:text-2xl ">
              Yüksek Tesis Kapasitesi ve Güvenilirlik
            </h2>
            <p className="text-md mobile:text-sm  mobile:text-start">
              {" "}
              2005 yılından itibaren sürekli gelişen altyapımız ve Tesis
              kapasitemiz ile Akdulum Kum Ocağı olarak inşaat sektörünün
              ihtiyaçlarına tam zamanında ve eksiksiz cevap vermekteyiz.
              Firmamız, sektördeki deneyimi ve müşteri odaklı hizmet anlayışıyla
              güvenilirliğini pekiştirmiştir.Yüksek kalite standartlarımız
              sayesinde, sunduğumuz ürünlerin her biri, projelerinizi daha
              dayanıklı, uzun ömürlü ve sağlam kılar. Tesis süreçlerimizde
              kaliteyi ve müşteri memnuniyetini her zaman ön planda tutarak,
              inşaatın her aşamasında en iyi malzeme çözümünü sunuyoruz.
            </p>
          </div>
          <div className="w-1/3 mobile:w-full ">
            <img
              src="/images/image1.jpeg"
              className="w-full h-auto object-cover rounded-lg drop-shadow-2xl border-2 border-secondary mobile:w-full"
            />
          </div>
        </div>
      </Section>

      {/* Sunmuş Olduğumuz Ürünler */}
      <Section className="py-48 mobile:p-8 ">
        <div className="flex flex-col justify-center items-center gap-10 mobile:">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-secondary mb-6 mobile:text-2xl mobile:text-center ">
              Sunmuş Olduğumuz Ürünler
            </h3>
            <p className=" w-1/2 mx-auto mobile:w-full">
              Akdulum Kum Ocağı, inşaatın en önemli bileşenlerinden biri olan
              kum ve çimentoyu doğru kullanarak yapıları uzun yıllar ayakta
              tutma konusunda uzmanlaşmıştır. Akdulum Kum Ocağı, kaliteli
              malzemeleriyle sadece yerel ölçekte değil, ulusal ölçekte de
              tanınan bir marka haline gelmiştir. Akdulum Kum Ocağı'nın geniş
              ürün yelpazesi sayesinde, inşaat projeleriniz için ihtiyaç
              duyduğunuz uygun çözümleri kolayca bulabilirsiniz. Akdulum Kum
              Ocağı, kalitesi ve güvenilirliği ile sektördeki önemli
              oyunculardan biri olmayı başarmıştır.
            </p>
          </div>
          <div className=" flex flex-nowrap mobile:flex-wrap justify-center align-center gap-1 mobile:flex-row mobile:gap-2">
            {content.products.map((product, index) => (
              <VerticalCard
                key={index}
                imageLink={product.img}
                className="w-full fade late-load"
                title={product.title}
                desc={product.desc}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* En Güvenilir Malzeme Tedariği */}
      <Section
        className="bg-primary-darkest py-48  w-full mobile:p-8"
        fullWidth
      >
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-secondary text-center mb-6 mobile:text-xl mobile:text-center">
            En Güvenilir Malzeme Tedariği
          </h2>
          <p className=" w-1/2 mx-auto text-center mobile:w-full mobile:text-sm">
            Akdulum Kum Ocağı, inşaatın en önemli bileşenlerinden biri olan kum
            ve çimentoyu en yüksek kalitede sunarak yapıların uzun yıllar ayakta
            kalmasına katkıda bulunur. Akdulum Kum Ocağı, sadece yerel pazarda
            değil, ulusal ölçekte de kaliteli malzemeleriyle tanınan bir marka
            haline gelmiştir. Akdulum Kum Ocağı'nın sunduğu geniş ürün yelpazesi
            sayesinde, projeleriniz için ihtiyacınıza uygun çözümleri kolaylıkla
            bulabilirsiniz. Akdulum Kum Ocağı, kaliteli ürünleri ve güvenilir
            hizmet anlayışıyla inşaat sektöründeki yerini sağlamlaştırmıştır.
          </p>
        </div>
        <div className="container mx-auto flex  justify-center  laptop:gap-5 mobile:flex-col ">
          <div className="w-1/2  mobile:w-full relative fade-left late-load rounded-md mx-auto">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-auto shadow-lg rounded-md object-cover mobile:h-[250px] mobile:w-full"
            >
              <source src="/videos/record-video.mp4" type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
          </div>

          <div className="w-1/2 relative fade  text-white bg-opacity-90 flex flex-wrap gap-5 mobile:flex-col mobile:w-full mobile:mt-5">
            {content.services.map((service, index) => (
              <div
                key={index}
                className="w-2/5 laptop:w-full p-5 border bg-primary-dark border-primary rounded-md flex flex-col mobile:w-full items-center"
              >
                <h4 className="text-xl text-secondary mb-2 laptop:text-lg mobile:text-lg">
                  {service.title}
                </h4>
                <p className="text-[15px] mobile:text-sm">{service.content}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* En İyi Hizmet burada */}
      <Section className="py-20 mobile:p-8" backgroundClassname="opacity-80">
        <h2 className="text-5xl font-bold text-center text-white mb-10 mobile:text-xl mobile:text-center">
          En İyi Hizmet burada
        </h2>
        <div className="flex flex-nowrap justify-center align-center gap-10 fade-up mobile:flex-col">
          {content.procurement.map((procurement, index) => (
            <Card
              key={index}
              url={procurement.img}
              title={procurement.title}
              description={procurement.desc}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default App;
