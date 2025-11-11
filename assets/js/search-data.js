// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Authorship in many of the papers is alphabetical.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-service",
          title: "service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-veritas-leiden",
          title: "Veritas@Leiden",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-will-be-attending-cav-25-this-summer-see-you-in-croatia",
          title: 'I will be attending CAV’25 this summer. See you in Croatia!',
          description: "",
          section: "News",},{id: "news-i-got-the-fwf-esprit-fellowship-from-the-austrian-science-fund-sparkles",
          title: 'I got the FWF Esprit fellowship from the Austrian Science Fund. :sparkles:',
          description: "",
          section: "News",},{id: "news-our-paper-titled-logic-gate-neural-networks-are-good-for-verification-received-the-darpa-award-at-neus",
          title: 'Our paper, titled “Logic Gate Neural Networks are Good for Verification”, received the...',
          description: "",
          section: "News",},{id: "news-our-paper-formal-verification-of-neural-certificates-done-dynamically-was-accepted-to-rv-2025-hope-to-see-you-in-graz",
          title: 'Our paper, “Formal Verification of Neural Certificates Done Dynamically”, was accepted to RV...',
          description: "",
          section: "News",},{id: "news-our-paper-introducing-certificates-to-the-hardware-model-checking-competition-received-the-distinguished-paper-award-at-cav",
          title: 'Our paper, “Introducing Certificates to the Hardware Model Checking Competition”, received the Distinguished...',
          description: "",
          section: "News",},{id: "news-looking-forward-to-give-an-invited-talk-at-tu-delft-on-19-november-2025",
          title: 'Looking forward to give an invited talk at TU Delft, on 19 November...',
          description: "",
          section: "News",},{id: "news-looking-forward-to-give-an-invited-talk-at-ieee-women-in-circuits-and-systems-young-professionals-wicas-yp-symposium-which-will-be-held-on-26-november-2025-in-leiden",
          title: 'Looking forward to give an invited talk at IEEE Women in Circuits and...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A.%79%75@%6C%69%61%63%73.%6C%65%69%64%65%6E%75%6E%69%76.%6E%6C", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4993-773X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=SGaveVMAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
