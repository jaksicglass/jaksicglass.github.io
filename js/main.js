let url = window.location.href;

// if (url.indexOf("index.html") != -1) {
// } else if (url.indexOf("news.html") != -1) {
// }
AOS.init({
  duration: 800,
  easing: "slide",
  once: true
});

window.onload = function() {
  //DINAMICKI UPIS INDEX.HTML
  var klase = ["filterBlokKupatila", "filterBlokKuhinje", "filterBlokZidova"];
  var naslovi = ["Stakla za Kupatila", "Stakla za Kuhinje", "Stakleni zidovi"];
  var paragrafi = [
    "Odaberite neku od nasih staklenih kabina po meri.",
    "Odlucite se za staklene kuhinjske elemente i police po meri.",
    "Staklene pregrade i zidovi po meri i po vasem ukusu."
  ];
  // var linkovi = ["", "", ""]
  let html = "";
  for (let i = 0; i < klase.length; i++) {
    html +=
      "<div class='col-lg-4 " +
      klase[i] +
      "'><div href='#' class='site-block-feature d-flex p-4 rounded mb-4'><div class='mr-3'><span class='icon flaticon-window font-weight-light h2'></span></div><div class='text'><h3>" +
      naslovi[i] +
      "</h3><p>" +
      paragrafi[i] +
      "</p></div></div></div>";
  }
  if (document.getElementById("perazikamikalaza")) {
    document.getElementById("perazikamikalaza").innerHTML = html;
  }

  function tajmer() {
    var brojacVremena = new Date("Feb 19, 2020 15:37:25").getTime();

    var sadasnje = new Date().getTime();

    var distanca = brojacVremena - sadasnje;

    var dani = Math.floor(distanca / (1000 * 60 * 60 * 24));
    var sati = Math.floor(
      (distanca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minuti = Math.floor((distanca % (1000 * 60 * 60)) / (1000 * 60));
    var sekunde = Math.floor((distanca % (1000 * 60)) / 1000);

    if (document.getElementById("tajmerDiv")) {
      document.getElementById("tajmerDiv").innerHTML =
        dani + "d " + sati + "h " + minuti + "m " + sekunde + "s ";
    }

    if (distanca < 0) {
      clearInterval(x);
      document.getElementById("tajmerDiv").innerHTML = "Isteklo";
    }
  }
  setInterval(tajmer, 1000);
};

$("document").ready(function() {
  var nizbtn = ["Stakla za kupatila", "Stakla za kuhinje", "Stakla za zidove"];
  var btnIspis = "";
  for (let i in nizbtn) {
    btnIspis += `<button class="brad3 btn btn-light filter-button filterklik" data-id="${i}" data-filter="hdpe">${nizbtn[i]}</button>`;
  }

  $("#triBatna").html(btnIspis);

  var nizbtn = ["Stakla za kupatila", "Stakla za kuhinje", "Stakla za zidove"];
  var btnIspis = "";
  for (let i in nizbtn) {
    btnIspis += `<button class="brad3 btn btn-light filter-button filterklik" data-id="${i}" data-filter="hdpe">${nizbtn[i]}</button>`;
  }

  $("#triBatna1").html(btnIspis);
  function hederLista() {
    var niz = [
      "index.html",
      "about.html",
      "projects.html",
      "news.html",
      "contact.html",
      "autor.html"
    ];
    var niz1 = [
      "Home",
      "O nama",
      "Proizvodi",
      "Galerija",
      "Kontakt",
      "O autoru"
    ];

    var divLista = document.getElementById("hederLista");
    var ispis = "";
    for (var i = 0; i < niz.length; i++) {
      ispis += "<li><a href='" + niz[i] + "'>" + niz1[i] + "</a></li>";
    }

    divLista.innerHTML = ispis;
  }
  hederLista();

  $("#indexPrikazi").hide();

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
      $("#indexPrikazi").fadeIn(2000);
    } else {
      $("#indexPrikazi").fadeOut();
    }
  });

  $("#indexPrikazi2").hide();

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
      $("#indexPrikazi2").fadeIn(2000);
    } else {
      $("#indexPrikazi2").fadeOut();
    }
  });

  $("#posalji").hide();
  $("#ime").focus(function() {
    $("#spanIme").html(
      `<p>Unesite Ime sa početnim velikim slovom i minimalno 3 slova</p>`
    );
  });
  $("#ime").blur(function() {
    $("#spanIme").html(``);
    var vrednostIme = $("#ime").val();
    var proveraIme = /^[A-Z][a-z]{2,}$/;

    if (!proveraIme.test(vrednostIme)) {
      alert(
        "Unesite Ime u ispravnom formatu i onda ce vam slanje biti omoguceno!"
      );
      $("#posalji").hide();
    } else {
      $("#posalji").show();
    }
  });

  $("#prezime").focus(function() {
    $("#spanPrezime").html(
      `<p>Unesite Prezime sa početnim velikim slovom i minimalno 3 slova</p>`
    );
  });
  $("#prezime").blur(function() {
    $("#Prezime").html(``);
    var vrednostPrezime = $("#prezime").val();
    var proveraPrezime = /^([A-Z][a-z]{2,})(\s[A-Z][a-z]{2,})?$/;

    if (!proveraPrezime.test(vrednostPrezime)) {
      $("#spanPrezime").html(
        `<p>Unesite Prezime sa početnim velikim slovom i minimalno 3 slova</p>`
      );
      $("#posalji").hide();
    } else {
      $("#posalji").show();
    }
  });

  iconLista();

  function iconLista() {
    var niz = [
      "https://www.facebook.com/",
      "https://twitter.com/?lang=sr",
      "https://www.linkedin.com/",
      "https://www.instagram.com/?hl=sr",
      "Dokumentacija.pdf"
    ];
    var niz1 = [
      "icon-facebook",
      "icon-twitter",
      "icon-linkedin",
      "icon-instagram",
      "icon-file"
    ];

    var divLista = document.getElementById("iconLista");
    var ispis = "";
    for (var i = 0; i < niz.length; i++) {
      ispis += `<a href="${niz[i]}" class="p-2 pl-0"  ><span class="${niz1[i]}"> </span></a>`;
    }

    divLista.innerHTML = ispis;
  }

  iconLista2();

  function iconLista2() {
    var niz = [
      "https://www.facebook.com/",
      "https://twitter.com/?lang=sr",
      "https://www.linkedin.com/",
      "https://www.instagram.com/?hl=sr"
    ];
    var niz1 = [
      "icon-facebook",
      "icon-twitter",
      "icon-linkedin",
      "icon-instagram"
    ];

    var divLista = document.getElementById("iconLista2");
    var ispis = "";
    for (var i = 0; i < niz.length; i++) {
      ispis += `<a href="${niz[i]}" class="pl-3 pr-3"  ><span class="${niz1[i]}"> </span></a>`;
    }

    divLista.innerHTML = ispis;
  }

  var siteMenuClone = function() {
    $(".js-clone-nav").each(function() {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function() {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function() {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter
        });

        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function(e) {
      var $this = $(this);
      if (
        $this
          .closest("li")
          .find(".collapse")
          .hasClass("show")
      ) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function() {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function(e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function(e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();

  $(".filterklik").click(function() {
    let id = $(this).data("id");

    if (id == 0) {
      $(".kuhinja").fadeOut();
      $(".zidovi").fadeOut();
      $(".kupatilo").fadeIn();
    }
    if (id == 1) {
      $(".kupatilo").fadeOut();
      $(".zidovi").fadeOut();
      $(".kuhinja").fadeIn();
    }
    if (id == 2) {
      $(".kupatilo").fadeOut();
      $(".kuhinja").fadeOut();
      $(".zidovi").fadeIn();
    }
  });

  if (document.querySelector(".stKupatilo")) {
    let blokStaklo = document.querySelector(".stKupatilo");
    blokStaklo.addEventListener("mouseover", prikazZaKupatilo);
  }
  function prikazZaKupatilo() {
    document
      .querySelector(".menjaSeSlika")
      .setAttribute("src", "images/staklo_za_kupatilo_tus_kabina_2.JPG");
  }
  if (document.querySelector(".stKuhinja")) {
    let stKuhinja = document.querySelector(".stKuhinja");
    stKuhinja.addEventListener("mouseover", prikazZaKuhinje);
  }
  function prikazZaKuhinje() {
    document
      .querySelector(".menjaSeSlika")
      .setAttribute("src", "images/staklo_za_kuhinju_1.JPG");
  }
  if (document.querySelector(".stZidovi")) {
    let stZidovi = document.querySelector(".stZidovi");
    stZidovi.addEventListener("mouseover", prikazZaZidove);
  }
  function prikazZaZidove() {
    document
      .querySelector(".menjaSeSlika")
      .setAttribute("src", "images/stakleni_zidovi_1.JPG");
  }

  if (document.querySelector(".filterBlokKupatila")) {
    let filterBlokKupatila = document.querySelector(".filterBlokKupatila");
    filterBlokKupatila.addEventListener("click", filterStakla);
  }

  function filterStakla(e) {
    localStorage.setItem("filterProizvoda", "kupatila");
    window.location.href = "projects.html";
  }

  if (document.querySelector(".filterBlokKuhinje")) {
    let filterBlokKuhinje = document.querySelector(".filterBlokKuhinje");
    filterBlokKuhinje.addEventListener("click", filterStaklaKuhinje);
  }

  function filterStaklaKuhinje(e) {
    localStorage.setItem("filterProizvoda", "kuhinje");
    window.location.href = "projects.html";
  }

  if (document.querySelector(".filterBlokZidova")) {
    let filterBlokZidova = document.querySelector(".filterBlokZidova");
    filterBlokZidova.addEventListener("click", filterStaklaZidova);
  }

  function filterStaklaZidova(e) {
    localStorage.setItem("filterProizvoda", "zidovi");
    window.location.href = "projects.html";
  }
  if (localStorage.getItem("filterProizvoda")) {
    // alert("a")
    var filterParam = localStorage.getItem("filterProizvoda");

    if (filterParam == "kupatila") {
      $(".kuhinja").fadeOut();
      $(".zidovi").fadeOut();
      $(".kupatilo").fadeIn();
      localStorage.removeItem("filterProizvoda");
    }
    if (filterParam == "kuhinje") {
      $(".kuhinja").fadeIn();
      $(".zidovi").fadeOut();
      $(".kupatilo").fadeOut();
      localStorage.removeItem("filterProizvoda");
    }
    if (filterParam == "zidovi") {
      $(".kuhinja").fadeOut();
      $(".zidovi").fadeIn();
      $(".kupatilo").fadeOut();
      localStorage.removeItem("filterProizvoda");
    }
  }
  $(".galleryFilter").click(klik);
  function klik(e) {
    e.preventDefault();
    var x = $(this).attr("data-id");
    localStorage.setItem("galerijaFilter", x);
    window.location.href = "news.html";
  }
  if (localStorage.getItem("galerijaFilter")) {
    sortirajGaleriju();
  }
  function sortirajGaleriju() {
    let storage = localStorage.getItem("galerijaFilter");
    if (storage == 1) {
      $(".kupatilo").fadeIn();
      $(".kuhinja").fadeOut();
      $(".zidovi").fadeOut();
      localStorage.removeItem("galerijaFilter");
    }
    if (storage == 2) {
      $(".kupatilo").fadeOut();
      $(".kuhinja").fadeIn();
      $(".zidovi").fadeOut();
      localStorage.removeItem("galerijaFilter");
    }
    if (storage == 3) {
      $(".kupatilo").fadeOut();
      $(".kuhinja").fadeOut();
      $(".zidovi").fadeIn();
      localStorage.removeItem("galerijaFilter");
    }
  }
  //DINAMICKE SLIKE NEWS.HTML

  var slike = [
    "staklo_za_kupatilo_tus_kabina_1.JPG",
    "staklo_za_kupatilo_tus_kabina_2.JPG",
    "staklo_za_kupatilo_tus_kabina_3.JPG",
    "staklo_za_kupatilo_tus_kabina_4.JPG",
    "staklo_za_kupatilo_tus_kabina_5.JPG",
    "staklo_za_kupatilo_tus_kabina_6.JPG",
    "staklo_za_kupatilo_tus_kabina_7.JPG",
    "staklo_za_kupatilo_tus_kabina_8.JPG",
    "staklo_za_kupatilo_tus_kabina_9.JPG",
    "staklo_za_kupatilo_tus_kabina_10.JPG",
    "staklo_za_kupatilo_tus_kabina_11.JPG",
    "staklo_za_kupatilo_tus_kabina_12.JPG",
    "staklo_za_kupatilo_ogledalo_1.JPG",
    "staklo_za_kupatilo_ogledalo_2.JPG",
    "staklo_za_kupatilo_ogledalo_3.JPG",
    "staklo_za_kupatilo_ogledalo_4.JPG",
    "staklo_za_kupatilo_staklena_vrata_1.JPG",
    "staklo_za_kupatilo_staklena_vrata_2.JPG",
    "staklo_za_kupatilo_staklena_vrata_3.JPG",
    "staklo_za_kupatilo_staklena_vrata_4.JPG",
    "staklo_za_kupatilo_staklena_vrata_5.JPG",
    "staklo_za_kupatilo_staklena_vrata_6.JPG",
    "staklo_za_kuhinju_1.JPG",
    "staklo_za_kuhinju_2.JPG",
    "staklo_za_kuhinju_2.JPG",
    "staklo_za_kuhinju_2.JPG",
    "stakleni_zidovi_1.JPG",
    "stakleni_zidovi_2.JPG",
    "stakleni_zidovi_3.JPG",
    "stakleni_zidovi_4.JPG",
    "stakleni_zidovi_5.JPG",
    "stakleni_zidovi_6.JPG",
    "stakleni_zidovi_7.JPG"
  ];
  var slikeKlasa = [
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kupatilo",
    "kuhinja",
    "kuhinja",
    "kuhinja",
    "kuhinja",
    "zidovi",
    "zidovi",
    "zidovi",
    "zidovi",
    "zidovi",
    "zidovi",
    "zidovi"
  ];
  var slikeAlt = [
    "slika1",
    "slika2",
    "slika3",
    "slika4",
    "slika5",
    "slika6",
    "slika7",
    "slika8",
    "slika9",
    "slika10",
    "slika11",
    "slika12",
    "slika13",
    "slika14",
    "slika15",
    "slika16",
    "slika17",
    "slika18",
    "slika19",
    "slika20",
    "slika21",
    "slika22",
    "slika23",
    "slika24",
    "slika25",
    "slika26",
    "slika27",
    "slika28",
    "slika29",
    "slika30",
    "slika31",
    "slika32"
  ];
  let html2 = "";
  for (let i = 0; i < slike.length; i++) {
    html2 +=
      "<a href='images/" +
      slike[i] +
      "' class='" +
      slikeKlasa[i] +
      "' data-lightbox='mygallery'><img src='images/" +
      slike[i] +
      "'alt='" +
      slikeAlt[i] +
      "'></a>";
  }

  if (document.getElementById("slikedinamicno")) {
    document.getElementById("slikedinamicno").innerHTML = html2;
  }
});

/*

window.onload(function() {
  var nizSlajder = [
    "url('images/hero_bg_1.jpg')",
    "url('images/stakleni_zidovi_3.jpg')",
    "url('images/stakleni_zidovi_5.jpg')"
  ];
  var slajderBrojac = 0;
  function slajder() {
    document.getElementById("pocetnaslika").style.backgroundImage =
      nizSlajder[slajderBrojac];
    slajderBrojac++;
    if (slajderBrojac == 3) {
      slajderBrojac = 0;
    }
    setTimeout("slajder()", 1000);
  }
});*/
