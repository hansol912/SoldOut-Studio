import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        if (id) {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="top"
        className="relative w-full min-h-[600px] lg:min-h-[700px] flex flex-col items-center justify-between px-4 sm:px-8 lg:px-[75px] py-6 lg:py-[29px]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4794ebaaaac915b215b43fda3c701dd1d03cddce?width=2880"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12 mt-auto">
          {/* Logo and Title */}
          <div className="flex flex-col items-start gap-4 lg:gap-0 w-full lg:w-auto">
            <div className="w-full max-w-[748px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d198f5799f067c3dec2f5592f9faff994d1e90e7?width=1496"
                alt="Sold Out Studio Logo"
                className="w-full h-auto max-h-[250px] lg:max-h-[319px] object-contain"
              />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-[96px] font-bold text-[#191919] leading-none font-['Roboto']">
              SOLDOUT
              <br />
              STUDIO
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 lg:gap-[50px] w-full sm:w-auto">
            <a
              href="#intro"
              className="text-base sm:text-lg lg:text-xl text-black hover:opacity-70 transition-opacity whitespace-nowrap font-['Roboto']"
            >
              Sold Out Studio 소개
            </a>
            <a
              href="#portfolio"
              className="text-base sm:text-lg lg:text-xl text-black hover:opacity-70 transition-opacity font-['Roboto']"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-base sm:text-lg lg:text-xl text-black hover:opacity-70 transition-opacity font-['Roboto']"
            >
              Contact
            </a>
          </nav>
        </div>
      </section>

      {/* Introduction Section */}
      <section
        id="intro"
        className="relative w-full min-h-[600px] lg:min-h-[700px] bg-white px-4 sm:px-8 lg:px-[75px] py-12 lg:py-[91px]"
      >
        <div className="max-w-[1440px] mx-auto relative">
          {/* Illustration */}
          <div className="lg:absolute lg:left-0 lg:top-[120px] w-full lg:w-[684px] mb-8 lg:mb-0 flex justify-center lg:justify-start">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8f41c8e4844379d3e57ae3def410fb5472ced8c4?width=1402"
              alt="Illustration"
              className="w-full max-w-[400px] lg:max-w-[701px] h-auto"
            />
          </div>

          {/* Decorative element */}
          <div className="hidden lg:block absolute right-0 top-0 w-[684px] h-[510px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ea4fe889d434d1fee682236cfd285781b221f5da?width=1368"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:ml-auto lg:max-w-[911px] flex flex-col gap-8 lg:gap-[102px]">
            {/* Main heading */}
            <h2 className="text-xl sm:text-2xl lg:text-[24px] text-[#191919] leading-normal font-noto-kr">
              <span className="text-3xl sm:text-4xl lg:text-[48px] font-continuous">
                Sold Out Studio
              </span>
              <span className="text-xl sm:text-2xl lg:text-[24px]">는 </span>
              <span className="text-xl sm:text-2xl lg:text-[26px] font-semibold">
                합리적인 비용
              </span>
              <span className="text-xl sm:text-2xl lg:text-[24px]">으로 </span>
              <span className="text-xl sm:text-2xl lg:text-[26px] font-semibold">
                최고의 결과물
              </span>
              <span className="text-xl sm:text-2xl lg:text-[24px]">
                을 만드는 영상 편집 스튜디오입니다.
              </span>
            </h2>

            {/* Feature list */}
            <div className="flex flex-col gap-8 lg:gap-[60px]">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 lg:gap-[28px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/86822f618e876bca5e2f110496451e8194383aa2?width=100"
                  alt=""
                  className="w-10 h-10 lg:w-[50px] lg:h-[50px] flex-shrink-0"
                />
                <p className="text-lg sm:text-xl lg:text-2xl text-[#191919] leading-normal font-noto-kr">
                  불필요한 요소는 줄이고, 필요한 디테일에 집중해 가격 이상의
                  퀄리티를 제공합니다.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 lg:gap-[28px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7bee4ea1ab0922a6c645e0d97478efb0e3eeb6af?width=100"
                  alt=""
                  className="w-10 h-10 lg:w-[50px] lg:h-[50px] flex-shrink-0"
                />
                <p className="text-lg sm:text-xl lg:text-2xl text-[#191919] leading-normal font-noto-kr">
                  예산이 제한된 프로젝트라도 완성도는 타협하지 않습니다.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 lg:gap-[28px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f323bd072fe6a9825e403c498b25f35580512da5?width=100"
                  alt=""
                  className="w-10 h-10 lg:w-[50px] lg:h-[50px] flex-shrink-0"
                />
                <p className="text-lg sm:text-xl lg:text-2xl text-[#191919] leading-normal font-noto-kr">
                  균형 잡힌 견적과 높은 완성도, 그게 우리가 지키는 기준입니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="relative w-full min-h-[1000px] lg:min-h-[1569px] bg-cover bg-center px-4 sm:px-8 lg:px-[75px] py-12 lg:py-24"
        style={{
          backgroundImage:
            "url('https://api.builder.io/api/v1/image/assets/TEMP/2a703e35987c2edce654ee0142011ca51b74635f?width=2880')",
        }}
      >
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="mb-8 lg:mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] text-[#191919] font-continuous mb-4 lg:mb-8">
              Portfolio
            </h2>
            <p className="text-xl sm:text-2xl lg:text-[32px] text-[#191919] leading-normal font-noto-kr">
              유튜브, 기업, 관공서, 홍보, 광고 영상 등 클라이언트{" "}
              <span className="text-2xl sm:text-3xl lg:text-[36px] font-semibold">
                맞춤형
              </span>{" "}
              영상 제작{" "}
              <span className="text-xl sm:text-2xl lg:text-[32px]">가능</span>
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[68px]">
            {/* Video 1 */}
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Portfolio Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/df4094e06c2458cbc30324f59142b96f1f67ab1d?width=760"
                alt=""
                className="w-full h-auto mt-[-10px]"
              />
            </div>

            {/* Video 2 */}
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Portfolio Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/df4094e06c2458cbc30324f59142b96f1f67ab1d?width=760"
                alt=""
                className="w-full h-auto mt-[-10px]"
              />
            </div>

            {/* Video 3 */}
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Portfolio Video 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/df4094e06c2458cbc30324f59142b96f1f67ab1d?width=760"
                alt=""
                className="w-full h-auto mt-[-10px]"
              />
            </div>

            {/* Video 4 */}
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Portfolio Video 4"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/df4094e06c2458cbc30324f59142b96f1f67ab1d?width=760"
                alt=""
                className="w-full h-auto mt-[-10px]"
              />
            </div>

            {/* Video 5 */}
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Portfolio Video 5"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/df4094e06c2458cbc30324f59142b96f1f67ab1d?width=760"
                alt=""
                className="w-full h-auto mt-[-10px]"
              />
            </div>

            {/* Video 6 */}
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Portfolio Video 6"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/df4094e06c2458cbc30324f59142b96f1f67ab1d?width=760"
                alt=""
                className="w-full h-auto mt-[-10px]"
              />
            </div>

            {/* Video 7 */}
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Portfolio Video 7"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/df4094e06c2458cbc30324f59142b96f1f67ab1d?width=760"
                alt=""
                className="w-full h-auto mt-[-10px]"
              />
            </div>

            {/* Video 8 */}
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Portfolio Video 8"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/df4094e06c2458cbc30324f59142b96f1f67ab1d?width=760"
                alt=""
                className="w-full h-auto mt-[-10px]"
              />
            </div>

            {/* Video 9 */}
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Portfolio Video 9"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/45222bd08891168f32b28c7533502df673ad24e0?width=760"
                alt=""
                className="w-full h-auto mt-[-10px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative w-full min-h-[800px] lg:min-h-[1061px] bg-white px-4 sm:px-8 lg:px-[98px] py-12 lg:py-[96px]"
      >
        <div className="max-w-[1440px] mx-auto relative">
          {/* Decorative background */}
          <div className="hidden lg:block absolute right-0 top-[-100px] w-[900px] h-[800px] opacity-30 rotate-[13deg]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/734d8c7f2307d220d9619adcf7e116424172f017?width=2212"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] text-black font-continuous mb-12 lg:mb-[130px]">
              Contact
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px]">
              {/* Contact Info */}
              <div className="space-y-8 lg:space-y-[90px]">
                {/* Email */}
                <div className="flex items-center gap-4 lg:gap-[37px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/35998a43d4defe08998fa424b62b9c50e66a7dd4?width=180"
                    alt="Email"
                    className="w-12 h-12 lg:w-[50px] lg:h-[50px]"
                  />
                  <p className="text-2xl sm:text-3xl lg:text-[40px] text-[#191919] font-['Roboto']">
                    sa5347sa@naver.com
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 lg:gap-[37px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7c1b362a26621107bd8331ff631d24534b056db2?width=150"
                    alt="Phone"
                    className="w-12 h-12 lg:w-[75px] lg:h-[75px]"
                  />
                  <p className="text-2xl sm:text-3xl lg:text-[40px] text-[#191919] font-['Roboto']">
                    010-3967-2344
                  </p>
                </div>

                {/* KakaoTalk */}
                <div className="flex items-center gap-4 lg:gap-[37px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b031fb82f5a879b87a7e5ee2175554eb83b1d9cf?width=160"
                    alt="KakaoTalk"
                    className="w-12 h-12 lg:w-[80px] lg:h-[80px]"
                  />
                  <p className="text-2xl sm:text-3xl lg:text-[40px] text-[#191919] font-['Roboto']">
                    KAKAO ID: sa020
                  </p>
                </div>
              </div>

              {/* Notice */}
              <div className="relative">
                <div className="hidden lg:block absolute -left-[100px] top-0 rotate-[38deg]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/c66e9c3373dee64757129791ee60cb64dfa508b0?width=180"
                    alt=""
                    className="w-[90px] h-[90px]"
                  />
                </div>

                <div className="space-y-4 lg:space-y-6">
                  <p className="text-lg sm:text-xl lg:text-2xl text-black font-['Roboto']">
                    상담 시간: 평일 10:00~17:00
                  </p>
                  <p className="text-lg sm:text-xl lg:text-2xl text-black font-['Roboto'] leading-normal">
                    ※ 문자로 연락처, 성함 및 상담 내용을 간단하게 남겨주시면
                    바로 연락드리겠습니다.
                  </p>
                  <p className="text-lg sm:text-xl lg:text-2xl text-black font-['Roboto']">
                    ※ 공휴일 및 주말 상담 요청 시 문자로 연락처를 남겨주세요.
                  </p>
                </div>

                {/* Divider */}
                <svg
                  className="hidden lg:block absolute -left-[180px] top-[70px]"
                  width="7"
                  height="346"
                  viewBox="0 0 7 346"
                  fill="none"
                >
                  <path
                    d="M1.5 0.0175781L5.5 345.018"
                    stroke="#191919"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
