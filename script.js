$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "I'm Mahadir Islam",
      "I'm an Entrepreneur",
      "I'm an Innovator",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-01", {
    strings: [
      "I am driven by an unwavering passion for the intersection of robotics, artificial intelligence (AI), and machine learning (ML), fields that promise to revolutionize how we live and interact with the world. For me, these disciplines are not merely areas of study, but dynamic forces that offer limitless potential for innovation. The fusion of algorithms and robotics excites me, as it opens doors to intelligent systems that can address real-world challenges and redefine industries" +
        "<br>" +
        "<br>" +
        "As an entrepreneur, I have founded a tech startup where I lead a team focused on groundbreaking advancements in AI and robotics. My entrepreneurial journey has deepened my understanding of the power of innovation and collaboration, allowing me to turn ambitious ideas into actionable solutions that challenge existing paradigms. I am committed to creating technologies that drive societal progress while fostering a culture of creative problem-solving."+"<br>"+"<br>"+"Leadership is central to my approach, whether in a startup environment, a research lab, or community initiatives. I believe true leadership is about inspiring others, creating opportunities, and steering technological developments toward positive societal impact. My experiences as both a leader and entrepreneur have reinforced my belief that technology can bridge divides, making the world smarter, more sustainable, and more equitable."+"<br>"+"<br>"+"In pursuing higher education, I aim to further hone my technical expertise, cultivate my leadership skills, and contribute to the evolution of robotics, AI, and ML. I am eager to be part of a transformative journey that not only reshapes industries but also has the power to create a more inclusive and sustainable future.",
    ],
    typeSpeed: 1,
    backSpeed: 50,
    loop: false,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Entrepreneur",
      "Innovator",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
