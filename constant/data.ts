export const menuItems = [
  {
    title: "Dashboard",
    isHide: true,
    icon: "heroicons-outline:home",
    link: "/",
  },
  {
    title: "Master Data",
    isHide: false,
    isOpen: true,
    icon: "heroicons:circle-stack",
    child: [
      {
        childtitle: "Staff",
        childlink: "staff",
        childicon: "heroicons:user",
      },
      {
        childtitle: "Kerabat",
        childlink: "kerabat",
        childicon: "heroicons:user-group",
      },
      {
        childtitle: "Dealer",
        childlink: "dealer",
        childicon: "heroicons:building-office",
      },
      {
        childtitle: "Leasing",
        childlink: "leasing",
        childicon: "heroicons:currency-dollar",
      },
      {
        childtitle: "Model",
        childlink: "dpack_model",
        childicon: "heroicons:document-text",
      },
      {
        childtitle: "Hari Besar",
        childlink: "hari_besar",
        childicon: "heroicons:calendar",
      },
      {
        childtitle: "Metode FU",
        childlink: "metode_fu",
        childicon: "heroicons:chat-bubble-left",
      },
      {
        childtitle: "Keterangan FU",
        childlink: "keterangan_fu",
        childicon: "heroicons:table-cells",
      },
      {
        childtitle: "Keterangan Hasil",
        childlink: "keterangan_hasil",
        childicon: "heroicons:table-cells-solid",
      },
      {
        childtitle: "Hasil FU",
        childlink: "hasil_fu",
        childicon: "heroicons:presentation-chart-bar",
      },
      {
        childtitle: "Pekerjaan",
        childlink: "pekerjaan",
        childicon: "heroicons:briefcase",
      },
      {
        childtitle: "Pendidikan",
        childlink: "pendidikan",
        childicon: "heroicons:academic-cap",
      },
      {
        childtitle: "Pengeluaran",
        childlink: "pengeluaran",
        childicon: "heroicons:credit-card",
      },
      {
        childtitle: "Penghasilan",
        childlink: "penghasilan",
        childicon: "heroicons:document-currency-dollar",
      },
      {
        childtitle: "Hobi",
        childlink: "hobi",
        childicon: "heroicons:camera",
      },
      {
        childtitle: "Status Rumah",
        childlink: "status_rumah",
        childicon: "heroicons:home-modern",
      },
    ],
  },
];

export const topMenu = [
  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    link: "/app/home",
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "dashboard",
        childicon: "heroicons:presentation-chart-line",
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
        childicon: "heroicons:shopping-cart",
      },
      {
        childtitle: "Project  Dashboard",
        childlink: "project",
        childicon: "heroicons:briefcase",
      },
      {
        childtitle: "CRM Dashboard",
        childlink: "crm",
        childicon: "ri:customer-service-2-fill",
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
        childicon: "heroicons:wrench-screwdriver",
      },
    ],
  },
  {
    title: "App",
    icon: "heroicons-outline:chip",
    link: "/app/home",
    child: [
      {
        childtitle: "Calendar",
        childlink: "calender",
        childicon: "heroicons-outline:calendar",
      },
      {
        childtitle: "Kanban",
        childlink: "kanban",
        childicon: "heroicons-outline:view-boards",
      },
      {
        childtitle: "Todo",
        childlink: "todo",
        childicon: "heroicons-outline:clipboard-check",
      },
      {
        childtitle: "Projects",
        childlink: "projects",
        childicon: "heroicons-outline:document",
      },
    ],
  },
  {
    title: "Pages",
    icon: "heroicons-outline:view-boards",
    link: "/app/home",
    megamenu: [
      {
        megamenutitle: "Authentication",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Signin One",
            m_childlink: "/",
          },
          {
            m_childtitle: "Signin Two",
            m_childlink: "/login2",
          },
          {
            m_childtitle: "Signin Three",
            m_childlink: "/login3",
          },
          {
            m_childtitle: "Signup One",
            m_childlink: "/register",
          },
          {
            m_childtitle: "Signup Two",
            m_childlink: "/register/register2",
          },
          {
            m_childtitle: "Signup Three",
            m_childlink: "/register/register3",
          },
          {
            m_childtitle: "Forget Password One",
            m_childlink: "/forgot-password",
          },
          {
            m_childtitle: "Forget Password Two",
            m_childlink: "/forgot-password2",
          },
          {
            m_childtitle: "Forget Password Three",
            m_childlink: "/forgot-password3",
          },
          {
            m_childtitle: "Lock Screen One",
            m_childlink: "/lock-screen",
          },
          {
            m_childtitle: "Lock Screen Two",
            m_childlink: "/lock-screen2",
          },
          {
            m_childtitle: "Lock Screen Three",
            m_childlink: "/lock-screen3",
          },
        ],
      },

      {
        megamenutitle: "Components",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "typography",
            m_childlink: "typography",
          },
          {
            m_childtitle: "colors",
            m_childlink: "colors",
          },
          {
            m_childtitle: "alert",
            m_childlink: "alert",
          },
          {
            m_childtitle: "button",
            m_childlink: "button",
          },
          {
            m_childtitle: "card",
            m_childlink: "card",
          },
          {
            m_childtitle: "carousel",
            m_childlink: "carousel",
          },
          {
            m_childtitle: "dropdown",
            m_childlink: "dropdown",
          },
          {
            m_childtitle: "image",
            m_childlink: "image",
          },
          {
            m_childtitle: "modal",
            m_childlink: "modal",
          },
          {
            m_childtitle: "Progress bar",
            m_childlink: "progress-bar",
          },
          {
            m_childtitle: "Placeholder",
            m_childlink: "placeholder",
          },

          {
            m_childtitle: "Tab & Accordion",
            m_childlink: "tab-accordion",
          },
        ],
      },
      {
        megamenutitle: "Forms",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Input",
            m_childlink: "input",
          },
          {
            m_childtitle: "Input group",
            m_childlink: "input-group",
          },
          {
            m_childtitle: "Input layout",
            m_childlink: "input-layout",
          },
          {
            m_childtitle: "Form validation",
            m_childlink: "form-validation",
          },
          {
            m_childtitle: "Wizard",
            m_childlink: "form-wizard",
          },
          {
            m_childtitle: "Input mask",
            m_childlink: "input-mask",
          },
          {
            m_childtitle: "File input",
            m_childlink: "file-input",
          },
          {
            m_childtitle: "Form repeater",
            m_childlink: "form-repeater",
          },
          {
            m_childtitle: "Textarea",
            m_childlink: "textarea",
          },
          {
            m_childtitle: "Checkbox",
            m_childlink: "checkbox",
          },
          {
            m_childtitle: "Radio button",
            m_childlink: "radio-button",
          },
          {
            m_childtitle: "Switch",
            m_childlink: "switch",
          },
        ],
      },
      {
        megamenutitle: "Utility",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Invoice",
            m_childlink: "invoice",
          },
          {
            m_childtitle: "Pricing",
            m_childlink: "pricing",
          },

          // {
          //   m_childtitle: "Testimonial",
          //   m_childlink: "testimonial",
          // },
          {
            m_childtitle: "FAQ",
            m_childlink: "faq",
          },
          {
            m_childtitle: "Blank page",
            m_childlink: "blank-page",
          },
          {
            m_childtitle: "Blog",
            m_childlink: "blog",
          },
          {
            m_childtitle: "404 page",
            m_childlink: "error-page",
          },
          {
            m_childtitle: "Coming Soon",
            m_childlink: "coming-soon",
          },
          {
            m_childtitle: "Under Maintanance page",
            m_childlink: "under-construction",
          },
        ],
      },
    ],
  },

  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    link: "form-elements",
    child: [
      {
        childtitle: "Basic",
        childlink: "basic",
        childicon: "heroicons-outline:document-text",
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
        childicon: "heroicons-outline:document-text",
      },
    ],
  },

  {
    title: "Extra",
    icon: "heroicons-outline:template",

    child: [
      {
        childtitle: "Basic Table",
        childlink: "table-basic",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Advanced table",
        childlink: "table-advanced",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Apex chart",
        childlink: "appex-chart",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Map",
        childlink: "map",
        childicon: "heroicons-outline:map",
      },
    ],
  },
];

export const notifications = [
  {
    title: "Your order is placed",
    desc: "Amet minim mollit non deser unt ullamco est sit aliqua.",

    image: "/assets/images/all-img/user.png",
    link: "#",
  },
  {
    title: "Congratulations Darlene  🎉",
    desc: "Won the monthly best seller badge",
    unread: true,
    image: "/assets/images/all-img/user2.png",
    link: "#",
  },
  {
    title: "Revised Order 👋",
    desc: "Won the monthly best seller badge",

    image: "/assets/images/all-img/user3.png",
    link: "#",
  },
  {
    title: "Brooklyn Simmons",
    desc: "Added you to Top Secret Project group...",

    image: "/assets/images/all-img/user4.png",
    link: "#",
  },
];

export const message = [
  {
    title: "Wade Warren",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: true,
    notification_count: 1,
    image: "/assets/images/all-img/user1.png",
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: "/assets/images/all-img/user2.png",
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: "/assets/images/all-img/user3.png",
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: "/assets/images/all-img/user4.png",
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: "/assets/images/all-img/user2.png",
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: "/assets/images/all-img/user3.png",
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: "/assets/images/all-img/user4.png",
    link: "#",
  },
];

export const colors = {
  primary: "#4669FA",
  secondary: "#A0AEC0",
  danger: "#F1595C",
  black: "#111112",
  warning: "#FA916B",
  info: "#0CE7FA",
  light: "#425466",
  success: "#50C793",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
};

export const hexToRGB = (hex: string, alpha: number) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

export const topFilterLists = [
  {
    name: "Inbox",
    value: "all",
    icon: "uil:image-v",
  },
  {
    name: "Starred",
    value: "fav",
    icon: "heroicons:star",
  },
  {
    name: "Sent",
    value: "sent",
    icon: "heroicons-outline:paper-airplane",
  },

  {
    name: "Drafts",
    value: "drafts",
    icon: "heroicons-outline:pencil-alt",
  },
  {
    name: "Spam",
    value: "spam",
    icon: "heroicons:information-circle",
  },
  {
    name: "Trash",
    value: "trash",
    icon: "heroicons:trash",
  },
];

export const bottomFilterLists = [
  {
    name: "personal",
    value: "personal",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Social",
    value: "social",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Promotions",
    value: "promotions",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Business",
    value: "business",
    icon: "heroicons:chevron-double-right",
  },
];

export const meets = [
  {
    img: "/assets/images/svg/sk.svg",
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
  {
    img: "/assets/images/svg/path.svg",
    title: "Design meeting (team)",
    date: "01 Nov 2021",
    meet: "Skyp meeting",
  },
  {
    img: "/assets/images/svg/dc.svg",
    title: "Background research",
    date: "01 Nov 2021",
    meet: "Google meeting",
  },
  {
    img: "/assets/images/svg/sk.svg",
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
];

export const files = [
  {
    img: "/assets/images/icon/file-1.svg",
    title: "Dashboard.fig",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/pdf-1.svg",
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/zip-1.svg",
    title: "Job portal_app.zip",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/pdf-2.svg",
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/scr-1.svg",
    title: "Screenshot.jpg",
    date: "06 June 2021 / 155MB",
  },
];

export const staff = [
  {
    id: 1,
    username: "vxghvboqah",
    nama: "Olivia Miller",
    nip: "13132150",
    status: "Valid",
  },
  {
    id: 2,
    username: "bwgdinarrc",
    nama: "Michael Smith",
    nip: "09900425",
    status: "Suspend",
  },
  {
    id: 3,
    username: "doocorrjyt",
    nama: "Daniel Williams",
    nip: "48797323",
    status: "Resign",
  },
  {
    id: 4,
    username: "tirafosyoo",
    nama: "Olivia Miller",
    nip: "67248756",
    status: "Valid",
  },
  {
    id: 5,
    username: "yiuwbecbzm",
    nama: "Michael Miller",
    nip: "10088375",
    status: "Suspend",
  },
  {
    id: 6,
    username: "xanykcfjet",
    nama: "David Brown",
    nip: "49481180",
    status: "Resign",
  },
  {
    id: 7,
    username: "ixaqvkrytr",
    nama: "Jane Garcia",
    nip: "71814072",
    status: "Valid",
  },
  {
    id: 8,
    username: "akwazzxvdg",
    nama: "Daniel Clark",
    nip: "92273316",
    status: "Suspend",
  },
  {
    id: 9,
    username: "dplljechod",
    nama: "Olivia Johnson",
    nip: "76546910",
    status: "Resign",
  },
  {
    id: 10,
    username: "axwsokojfj",
    nama: "Sarah Davis",
    nip: "55464116",
    status: "Valid",
  },
  {
    id: 11,
    username: "jhgfcxzasd",
    nama: "Emily Chen",
    nip: "84213579",
    status: "Suspend",
  },
  {
    id: 12,
    username: "poiuytrewq",
    nama: "David Lee",
    nip: "35198246",
    status: "Resign",
  },
  {
    id: 13,
    username: "asdfghjkl",
    nama: "Sophia Patel",
    nip: "21987432",
    status: "Valid",
  },
  {
    id: 14,
    username: "zxcvbnmko",
    nama: "Michael Kim",
    nip: "46782319",
    status: "Suspend",
  },
  {
    id: 15,
    username: "qwertyuiop",
    nama: "Olivia Brown",
    nip: "98563214",
    status: "Resign",
  },
  {
    id: 16,
    username: "mnbvcxzlk",
    nama: "Emily Taylor",
    nip: "75321984",
    status: "Valid",
  },
  {
    id: 17,
    username: "jhgfdsaqw",
    nama: "David White",
    nip: "42198537",
    status: "Suspend",
  },
  {
    id: 18,
    username: "poiuytrew",
    nama: "Sophia Martin",
    nip: "96385214",
    status: "Resign",
  },
  {
    id: 19,
    username: "asdfghjkl",
    nama: "Michael Davis",
    nip: "13579246",
    status: "Valid",
  },
  {
    id: 20,
    username: "zxcvbnmko",
    nama: "Emily Garcia",
    nip: "98765432",
    status: "Suspend",
  },
  {
    id: 21,
    username: "lkjhgfdsa",
    nama: "David Brooks",
    nip: "65432198",
    status: "Resign",
  },
  {
    id: 22,
    username: "poiuytrew",
    nama: "Sophia Rodriguez",
    nip: "98213574",
    status: "Valid",
  },
  {
    id: 23,
    username: "mnbvcxza",
    nama: "Emily Chen",
    nip: "75321985",
    status: "Suspend",
  },
  {
    id: 24,
    username: "jhgfdsaq",
    nama: "Michael Brown",
    nip: "42198532",
    status: "Resign",
  },
  {
    id: 25,
    username: "asdfghjk",
    nama: "Olivia Taylor",
    nip: "13579243",
    status: "Valid",
  },
  {
    id: 26,
    username: "zxcvbnml",
    nama: "David White",
    nip: "98765421",
    status: "Suspend",
  },
  {
    id: 27,
    username: "qwertyui",
    nama: "Sophia Martin",
    nip: "96385213",
    status: "Resign",
  },
  {
    id: 28,
    username: "lkjhgfds",
    nama: "Emily Garcia",
    nip: "65432197",
    status: "Valid",
  },
  {
    id: 29,
    username: "poiuytrew",
    nama: "Michael Davis",
    nip: "98213573",
    status: "Suspend",
  },
  {
    id: 30,
    username: "mnbvcxza",
    nama: "Olivia Brooks",
    nip: "75321984",
    status: "Resign",
  },
  {
    id: 31,
    username: "asdfghjkl",
    nama: "David Lee",
    nip: "21987432",
    status: "Valid",
  },
  {
    id: 32,
    username: "zxcvbnmko",
    nama: "Emily Patel",
    nip: "46782319",
    status: "Suspend",
  },
  {
    id: 33,
    username: "qwertyuiop",
    nama: "Sophia Kim",
    nip: "98563214",
    status: "Resign",
  },
  {
    id: 34,
    username: "mnbvcxzlk",
    nama: "Michael Brown",
    nip: "75321984",
    status: "Valid",
  },
  {
    id: 35,
    username: "jhgfdsaqw",
    nama: "Olivia Taylor",
    nip: "42198537",
    status: "Suspend",
  },
  {
    id: 36,
    username: "poiuytrew",
    nama: "Emily Chen",
    nip: "96385214",
    status: "Resign",
  },
  {
    id: 37,
    username: "lkjhgfdsa",
    nama: "David White",
    nip: "65432198",
    status: "Valid",
  },
  {
    id: 38,
    username: "asdfghjkl",
    nama: "Sophia Martin",
    nip: "13579246",
    status: "Suspend",
  },
  {
    id: 39,
    username: "zxcvbnmko",
    nama: "Michael Davis",
    nip: "98765432",
    status: "Resign",
  },
  {
    id: 40,
    username: "qwertyuiop",
    nama: "Olivia Garcia",
    nip: "98213574",
    status: "Valid",
  },
  {
    id: 41,
    username: "mnbvcxzlk",
    nama: "Emily Lee",
    nip: "75321985",
    status: "Suspend",
  },
  {
    id: 42,
    username: "jhgfdsaqw",
    nama: "David Patel",
    nip: "42198532",
    status: "Resign",
  },
  {
    id: 43,
    username: "poiuytrew",
    nama: "Sophia Kim",
    nip: "96385213",
    status: "Valid",
  },
  {
    id: 44,
    username: "lkjhgfdsa",
    nama: "Michael Taylor",
    nip: "65432197",
    status: "Suspend",
  },
  {
    id: 45,
    username: "asdfghjkl",
    nama: "Olivia White",
    nip: "13579243",
    status: "Resign",
  },
  {
    id: 46,
    username: "zxcvbnmko",
    nama: "Emily Martin",
    nip: "98765421",
    status: "Valid",
  },
  {
    id: 47,
    username: "qwertyuiop",
    nama: "David Davis",
    nip: "98563214",
    status: "Suspend",
  },
  {
    id: 48,
    username: "mnbvcxzlk",
    nama: "Sophia Garcia",
    nip: "75321984",
    status: "Resign",
  },
  {
    id: 49,
    username: "jhgfdsaqw",
    nama: "Michael Brown",
    nip: "42198537",
    status: "Valid",
  },
  {
    id: 50,
    username: "poiuytrew",
    nama: "Olivia Chen",
    nip: "96385214",
    status: "Suspend",
  },
];

export const kerabat = [
  {
    id: 1,
    kerabat: "AYAH-ANAK",
    status: "SHOW",
  },
  {
    id: 2,
    kerabat: "KONSUMEN LANGSUNG",
    status: "HIDE",
  },
  {
    id: 3,
    kerabat: "IBU-ANAK",
    status: "SHOW",
  },
  {
    id: 4,
    kerabat: "SUAMI-ISTRI",
    status: "HIDE",
  },
  {
    id: 5,
    kerabat: "KAKAK-ADIK",
    status: "SHOW",
  },
  {
    id: 6,
    kerabat: "SAUDARA",
    status: "HIDE",
  },
  {
    id: 7,
    kerabat: "TETANGGA",
    status: "SHOW",
  },
  {
    id: 8,
    kerabat: "PAMAN-PONAKAN",
    status: "HIDE",
  },
  {
    id: 9,
    kerabat: "TANTE-PONAKAN",
    status: "SHOW",
  },
  {
    id: 10,
    kerabat: "TEMAN",
    status: "HIDE",
  },
  {
    id: 11,
    kerabat: "LAINNYA",
    status: "SHOW",
  },
];

export const dealer = [
  { id: 1, kode: "FA00001", dealer: "ALFA MILLENIUM", status: "SHOW" },
  { id: 2, kode: "FA00002", dealer: "ANGGA MOTOR", status: "HIDE" },
  { id: 3, kode: "FD00012", dealer: "ANGKASA RAYA", status: "SHOW" },
  { id: 4, kode: "FD00021", dealer: "ANUGRAH MOTOR", status: "HIDE" },
  { id: 5, kode: "FB00385", dealer: "ASLI MOTOR", status: "SHOW" },
  { id: 6, kode: "FEFB001", dealer: "ASLI MOTOR 1", status: "HIDE" },
  { id: 7, kode: "FEFB002", dealer: "ASLI MOTOR 2", status: "SHOW" },
  { id: 8, kode: "FEFB003", dealer: "ASLI MOTOR 3", status: "HIDE" },
  { id: 9, kode: "FEFB004", dealer: "ASLI MOTOR 4", status: "SHOW" },
  { id: 10, kode: "FDFA002", dealer: "ASPA 2", status: "HIDE" },
  { id: 11, kode: "FA00003", dealer: "DEALER A", status: "SHOW" },
  { id: 12, kode: "FA00004", dealer: "DEALER B", status: "HIDE" },
  { id: 13, kode: "FA00005", dealer: "DEALER C", status: "SHOW" },
  { id: 14, kode: "FA00006", dealer: "DEALER D", status: "HIDE" },
  { id: 15, kode: "FA00007", dealer: "DEALER E", status: "SHOW" },
  { id: 16, kode: "FA00008", dealer: "DEALER F", status: "HIDE" },
  { id: 17, kode: "FA00009", dealer: "DEALER G", status: "SHOW" },
  { id: 18, kode: "FA00010", dealer: "DEALER H", status: "HIDE" },
  { id: 19, kode: "FA00011", dealer: "DEALER I", status: "SHOW" },
  { id: 20, kode: "FA00012", dealer: "DEALER J", status: "HIDE" },
];

export const leasing = [
  { id: 1, leasing: "BAF" },
  { id: 2, leasing: "SOF" },
  { id: 3, leasing: "ADIRA" },
  { id: 4, leasing: "MAF" },
  { id: 5, leasing: "CSF" },
  { id: 6, leasing: "IMFI" },
  { id: 7, leasing: "INDOMOBIL" },
  { id: 8, leasing: "BANK SUMUT" },
  { id: 9, leasing: "MANDALA" },
  { id: 10, leasing: "MUF" },
  { id: 11, leasing: "WOM" },
  { id: 12, leasing: "MMF" },
  { id: 13, leasing: "MCF" },
  { id: 14, leasing: "OTHERS" },
];

export const hariBesar = [
  {
    id: 1,
    hariBesar: "WAISAK",
    tanggal: "16-05-2022",
    agama: "BUDDHA",
    ucapan: "Selamat Hari Raya Waisak",
    status: "AKTIF",
  },
  {
    id: 2,
    hariBesar: "NYEPI",
    tanggal: "03-03-2022",
    agama: "HINDU",
    ucapan: "SELAMAT HARI RAYA NYEPI",
    status: "AKTIF",
  },
  {
    id: 3,
    hariBesar: "LEBARAN",
    tanggal: "02-05-2022",
    agama: "ISLAM",
    ucapan: "Selamat Hari Lebaran",
    status: "AKTIF",
  },
  {
    id: 4,
    hariBesar: "NATAL/TAHUN BARU",
    tanggal: "25-12-2022",
    agama: "KRISTEN PR",
    ucapan: "Selamat Hari Natal dan Tahun Baru",
    status: "HOLD",
  },
  {
    id: 5,
    hariBesar: "NATAL/TAHUN BARU",
    tanggal: "25-12-2022",
    agama: "KATOLIK",
    ucapan: "Selamat Hari Natal dan Tahun Baru",
    status: "HOLD",
  },
  {
    id: 6,
    hariBesar: "IMLEK",
    tanggal: "01-02-2022",
    agama: "KONGHUCU",
    ucapan: "GONG XI FAT CAI",
    status: "HOLD",
  },
];

export const metodeFollowUp = [
  {
    id: 1,
    metode: "CALL",
    status: "SHOW",
  },
  {
    id: 2,
    metode: "SMS",
    status: "SHOW",
  },
  {
    id: 3,
    metode: "VISIT",
    status: "SHOW",
  },
  {
    id: 4,
    metode: "WHATSAPP",
    status: "SHOW",
  },
];

export const keteranganFU = [
  {
    id: 1,
    keterangan: "NOMOR TELEPON SALAH SAMBUNG",
    status: "NOT CONTACTED",
    kategori_hasil: "NOT CONTACTED",
    tampil: "SHOW",
  },
  {
    id: 2,
    keterangan: "BELUM BERMINAT",
    status: "CONTACTED",
    kategori_hasil: "PROSPECT",
    tampil: "SHOW",
  },
  {
    id: 3,
    keterangan: "NOMOR TELEPON TIDAK DIANGKAT",
    status: "NOT CONTACTED",
    kategori_hasil: "NOT CONTACTED",
    tampil: "SHOW",
  },
  {
    id: 4,
    keterangan: "NOMOR TELEPON TIDAK TERDAFTAR",
    status: "NOT CONTACTED",
    kategori_hasil: "NOT CONTACTED",
    tampil: "SHOW",
  },
  {
    id: 5,
    keterangan: "BERMINAT KREDIT MOTOR",
    status: "CONTACTED",
    kategori_hasil: "PROSPECT",
    tampil: "SHOW",
  },
  {
    id: 6,
    keterangan: "TIDAK BERMINAT",
    status: "CONTACTED",
    kategori_hasil: "TIDAK BERMINAT",
    tampil: "SHOW",
  },
  {
    id: 7,
    keterangan: "BERMINAT CASH",
    status: "CONTACTED",
    kategori_hasil: "PROSPECT",
    tampil: "SHOW",
  },
  {
    id: 8,
    keterangan: "BERMINAT PRODUK LAIN",
    status: "CONTACTED",
    kategori_hasil: "TIDAK BERMINAT",
    tampil: "SHOW",
  },
  {
    id: 9,
    keterangan: "PIKIR PIKIR",
    status: "CONTACTED",
    kategori_hasil: "PROSPECT",
    tampil: "SHOW",
  },
  {
    id: 10,
    keterangan: "MENUNGGU KEPUTUSAN PASANGAN/PENJAMIN",
    status: "CONTACTED",
    kategori_hasil: "PROSPECT",
    tampil: "SHOW",
  },
  {
    id: 11,
    keterangan: "PASANGAN/PENJAMIN TIDAK SETUJU",
    status: "CONTACTED",
    kategori_hasil: "TIDAK BERMINAT",
    tampil: "SHOW",
  },
  {
    id: 12,
    keterangan: "MOTOR SUDAH DIJUAL",
    status: "CONTACTED",
    kategori_hasil: "PROSPECT",
    tampil: "SHOW",
  },
  {
    id: 13,
    keterangan: "MOTOR TIDAK LAYAK",
    status: "CONTACTED",
    kategori_hasil: "TIDAK BERMINAT",
    tampil: "SHOW",
  },
  {
    id: 14,
    keterangan: "ANGSURAN MAHAL",
    status: "CONTACTED",
    kategori_hasil: "TIDAK BERMINAT",
    tampil: "SHOW",
  },
  {
    id: 15,
    keterangan: "PLAFOND TIDAK COCOK",
    status: "CONTACTED",
    kategori_hasil: "TIDAK BERMINAT",
    tampil: "SHOW",
  },
  {
    id: 16,
    keterangan: "BERUBAH PIKIRAN",
    status: "CONTACTED",
    kategori_hasil: "TIDAK BERMINAT",
    tampil: "SHOW",
  },
  {
    id: 17,
    keterangan: "DOKUMEN TIDAK LENGKAP",
    status: "CONTACTED",
    kategori_hasil: "PROSPECT",
    tampil: "SHOW",
  },
  {
    id: 18,
    keterangan: "CUSTOMER MEMBATALKAN JANJI",
    status: "CONTACTED",
    kategori_hasil: "PROSPECT",
    tampil: "SHOW",
  },
  {
    id: 19,
    keterangan: "CUSTOMER RESCHEDULE",
    status: "CONTACTED",
    kategori_hasil: "PROSPECT",
    tampil: "SHOW",
  },
  {
    id: 20,
    keterangan: "CUSTOMER MEMBUTUHKAN DANA CEPAT",
    status: "CONTACTED",
    kategori_hasil: "PROSPECT",
    tampil: "SHOW",
  },
  {
    id: 21,
    keterangan: "BPKB SUDAH DIJAMINKAN DI TEMPAT LAIN",
    status: "CONTACTED",
    kategori_hasil: "TIDAK BERMINAT",
    tampil: "SHOW",
  },
  {
    id: 22,
    keterangan: "ESTIMASI DANA SEDIKIT",
    status: "CONTACTED",
    kategori_hasil: "PROSPECT",
    tampil: "SHOW",
  },
  {
    id: 23,
    keterangan: "NOMOR TELEPON TIDAK BISA DIHUBUNGI",
    status: "NOT CONTACTED",
    kategori_hasil: "NOT CONTACTED",
    tampil: "SHOW",
  },
  {
    id: 24,
    keterangan: "NOMOR TELEPON YANG DIPUTAR SALAH",
    status: "NOT CONTACTED",
    kategori_hasil: "NOT CONTACTED",
    tampil: "SHOW",
  },
  {
    id: 25,
    keterangan: "NOMOR TELEPON TIDAK AKTIF",
    status: "NOT CONTACTED",
    kategori_hasil: "NOT CONTACTED",
    tampil: "SHOW",
  },
  {
    id: 26,
    keterangan: "PINDAH RUMAH",
    status: "NOT CONTACTED",
    kategori_hasil: "NOT CONTACTED",
    tampil: "SHOW",
  },
  {
    id: 27,
    keterangan: "TIDAK BERTEMU DENGAN KONSUMEN",
    status: "NOT CONTACTED",
    kategori_hasil: "NOT CONTACTED",
    tampil: "SHOW",
  },
];

export const keteranganHasil = [
  { id: 1, keterangan_hasil: "NOT CONTACTED", status_fu: "NOT CONTACTED", status: "SHOW" },
  { id: 2, keterangan_hasil: "MINAT", status_fu: "CONTACTED", status: "SHOW" },
  { id: 3, keterangan_hasil: "PROSPECT", status_fu: "CONTACTED", status: "SHOW" },
  { id: 4, keterangan_hasil: "TIDAK BERMINAT", status_fu: "CONTACTED", status: "SHOW" },
  { id: 5, keterangan_hasil: "TIDAK BERTEMU", status_fu: "CONTACTED", status: "SHOW" },
];

export const hasilFU = [
  { id: 1, minat: "DEAL", warna: "BLUE", hari: 0, status: "SHOW" },
  { id: 2, minat: "HOT", warna: "RED", hari: 7, status: "SHOW" },
  { id: 3, minat: "WARM", warna: "YELLOW", hari: 14, status: "SHOW" },
  { id: 4, minat: "COLD", warna: "SILVER", hari: 30, status: "SHOW" },
  { id: 5, minat: "REJECT", warna: "BLACK", hari: 0, status: "SHOW" },
];

export const pekerjaan = [
  { id: 1, pekerjaan: "Pegawai Negeri", kode: "N", status: "SHOW" },
  { id: 2, pekerjaan: "Karyawan Swasta", kode: "S", status: "SHOW" },
  { id: 3, pekerjaan: "Ibu Rumah Tangga", kode: "I", status: "SHOW" },
  { id: 4, pekerjaan: "Profesional", kode: "G", status: "SHOW" },
  { id: 5, pekerjaan: "Lain-lain", kode: "L", status: "SHOW" },
  { id: 6, pekerjaan: "Pelajar", kode: "P", status: "SHOW" },
  { id: 7, pekerjaan: "TNI / Polri", kode: "T", status: "SHOW" },
  { id: 8, pekerjaan: "Wiraswasta", kode: "W", status: "SHOW" },
  { id: 9, pekerjaan: "Petani/Nelayan", kode: "F", status: "SHOW" },
  { id: 10, pekerjaan: "Buruh", kode: "B", status: "SHOW" },
];

export const pendidikan = [
  { id: 1, pendidikan: "Tidak Sekolah", kode: "A", status: "SHOW" },
  { id: 2, pendidikan: "SD / Sederajat", kode: "B", status: "SHOW" },
  { id: 3, pendidikan: "SMP / Sederajat", kode: "C", status: "SHOW" },
  { id: 4, pendidikan: "SMA / Sederajat", kode: "D", status: "SHOW" },
  { id: 5, pendidikan: "Diploma 1 (D1)", kode: "E", status: "SHOW" },
  { id: 6, pendidikan: "Diploma 2 (D2)", kode: "F", status: "SHOW" },
  { id: 7, pendidikan: "Diploma 3 (D3)", kode: "G", status: "SHOW" },
  { id: 8, pendidikan: "Sarjana (S1)", kode: "H", status: "SHOW" },
  { id: 9, pendidikan: "Magister (S2)", kode: "I", status: "SHOW" },
  { id: 10, pendidikan: "Doktoral (S3)", kode: "J", status: "SHOW" },
  { id: 11, pendidikan: "Lainnya", kode: "K", status: "HIDE" },
];

export const pengeluaran = [
  {
    id: 1,
    batas_bawah: 7000001,
    batas_atas: 50000000,
    detail: "7jt - 8jt",
    kode: "7D",
    status: "SHOW",
  },
  {
    id: 2,
    batas_bawah: 6000001,
    batas_atas: 7000000,
    detail: "6jt - 7jt",
    kode: "6D",
    status: "SHOW",
  },
  {
    id: 3,
    batas_bawah: 5000001,
    batas_atas: 6000000,
    detail: "5jt - 6jt",
    kode: "5D",
    status: "SHOW",
  },
  {
    id: 4,
    batas_bawah: 4000001,
    batas_atas: 5000000,
    detail: "4jt - 5jt",
    kode: "4D",
    status: "SHOW",
  },
  {
    id: 5,
    batas_bawah: 3000001,
    batas_atas: 4000000,
    detail: "3jt - 4jt",
    kode: "3D",
    status: "SHOW",
  },
  {
    id: 6,
    batas_bawah: 2000001,
    batas_atas: 3000000,
    detail: "2jt - 3jt",
    kode: "2D",
    status: "SHOW",
  },
  {
    id: 7,
    batas_bawah: 1000001,
    batas_atas: 2000000,
    detail: "1jt - 2jt",
    kode: "1D",
    status: "SHOW",
  },
  {
    id: 8,
    batas_bawah: 1,
    batas_atas: 1000000,
    detail: "1 - 1jt",
    kode: "0D",
    status: "SHOW",
  },
];

export const penghasilan = [
  {
    id: 1,
    batas_bawah: 1,
    batas_atas: 1000000,
    detail: "1 - 1jt",
    kode: "0D",
    status: "SHOW",
  },
  {
    id: 2,
    batas_bawah: 1000001,
    batas_atas: 2000000,
    detail: "1jt - 2jt",
    kode: "1D",
    status: "SHOW",
  },
  {
    id: 3,
    batas_bawah: 2000001,
    batas_atas: 3000000,
    detail: "2jt - 3jt",
    kode: "2D",
    status: "SHOW",
  },
  {
    id: 4,
    batas_bawah: 3000001,
    batas_atas: 4000000,
    detail: "3jt - 4jt",
    kode: "3D",
    status: "SHOW",
  },
  {
    id: 5,
    batas_bawah: 4000001,
    batas_atas: 5000000,
    detail: "4jt - 5jt",
    kode: "4D",
    status: "SHOW",
  },
  {
    id: 6,
    batas_bawah: 5000001,
    batas_atas: 6000000,
    detail: "5jt - 6jt",
    kode: "5D",
    status: "SHOW",
  },
  {
    id: 7,
    batas_bawah: 6000001,
    batas_atas: 7000000,
    detail: "6jt - 7jt",
    kode: "6D",
    status: "SHOW",
  },
  {
    id: 8,
    batas_bawah: 7000001,
    batas_atas: 50000000,
    detail: "7jt - 8jt",
    kode: "7D",
    status: "SHOW",
  },
];

export const hobi = [
  {
    id: 1,
    hobi: "OLAHRAGA",
    status: "SHOW",
  },
  {
    id: 2,
    hobi: "MEMBACA",
    status: "SHOW",
  },
  {
    id: 3,
    hobi: "MAIN GAME",
    status: "SHOW",
  },
  {
    id: 4,
    hobi: "BERKEBUN",
    status: "SHOW",
  },
  {
    id: 5,
    hobi: "BERMAIN MUSIK",
    status: "SHOW",
  },
  {
    id: 6,
    hobi: "FOTOGRAFI",
    status: "SHOW",
  },
  {
    id: 7,
    hobi: "KULINER",
    status: "SHOW",
  },
  {
    id: 8,
    hobi: "MEMASAK",
    status: "SHOW",
  },
  {
    id: 9,
    hobi: "MENULIS",
    status: "SHOW",
  },
  {
    id: 10,
    hobi: "NONTON",
    status: "SHOW",
  },
  {
    id: 11,
    hobi: "SENI",
    status: "SHOW",
  },
  {
    id: 12,
    hobi: "TOURING",
    status: "SHOW",
  },
  {
    id: 13,
    hobi: "OTOMOTIF",
    status: "SHOW",
  },
  {
    id: 14,
    hobi: "TRAVELLING",
    status: "SHOW",
  },
  {
    id: 15,
    hobi: "LAINNYA",
    status: "SHOW",
  },
];

export const statusRumah = [
  {
    id: 1,
    status_rumah: "MILIK SENDIRI",
    status: "SHOW",
  },
  {
    id: 2,
    status_rumah: "ORANG TUA",
    status: "SHOW",
  },
  {
    id: 3,
    status_rumah: "KOST",
    status: "SHOW",
  },
  {
    id: 4,
    status_rumah: "KONTRAK/SEWA",
    status: "SHOW",
  },
  {
    id: 5,
    status_rumah: "RUMAH DINAS",
    status: "SHOW",
  },
  {
    id: 6,
    status_rumah: "PINDAH",
    status: "SHOW",
  },
];
