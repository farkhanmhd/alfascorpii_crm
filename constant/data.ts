import { getRandomNumber } from "@/utils/numbers";

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
  {
    title: "Customers",
    icon: "heroicons-outline:users",
    link: "/customers",
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

const randomNames = [
  "Olivia",
  "Michael",
  "Daniel",
  "Jane",
  "Sarah",
  "Emily",
  "David",
  "Sophia",
  "Kim",
  "Taylor",
  "Garcia",
  "Brown",
  "Lee",
  "Patel",
  "Martin",
  "Johnson",
  "Smith",
  "Davis",
  "Clark",
  "Miller",
];

const randomSurnames = [
  "Miller",
  "Smith",
  "Williams",
  "Johnson",
  "Brown",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
];

const generateRandomName = () => {
  const firstName = randomNames[Math.floor(Math.random() * randomNames.length)];
  const lastName = randomSurnames[Math.floor(Math.random() * randomSurnames.length)];
  return `${firstName} ${lastName}`;
};

const generateRandomUsername = () => {
  const usernameLength = 10;
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let username = "";

  for (let i = 0; i < usernameLength; i++) {
    username += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return username;
};

const generateRandomNip = () => {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
};

const randomStafStatuses = ["Valid", "Suspend", "Resign"];

const generateRandomStaff = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    username: generateRandomUsername(),
    nama: generateRandomName(),
    nip: generateRandomNip(),
    status: randomStafStatuses[Math.floor(Math.random() * randomStafStatuses.length)],
  }));
};

// Exporting the generated staff data
export const staff = generateRandomStaff(50);

const relationships = [
  "AYAH-ANAK",
  "KONSUMEN LANGSUNG",
  "IBU-ANAK",
  "SUAMI-ISTRI",
  "KAKAK-ADIK",
  "SAUDARA",
  "TETANGGA",
  "PAMAN-PONAKAN",
  "TANTE-PONAKAN",
  "TEMAN",
  "LAINNYA",
];

const randomStatuses = ["SHOW", "HIDE"];

const generateKerabat = () => {
  return relationships.map((relationship, index) => ({
    id: index + 1,
    kerabat: relationship,
    status: randomStatuses[Math.floor(Math.random() * randomStatuses.length)],
  }));
};

// Exporting the generated kerabat data
export const kerabat = generateKerabat();

const dealerNames = [
  "ALFA MILLENIUM",
  "ANGGA MOTOR",
  "ANGKASA RAYA",
  "ANUGRAH MOTOR",
  "ASLI MOTOR",
  "ASLI MOTOR 1",
  "ASLI MOTOR 2",
  "ASLI MOTOR 3",
  "ASLI MOTOR 4",
  "ASPA 2",
  "DEALER A",
  "DEALER B",
  "DEALER C",
  "DEALER D",
  "DEALER E",
  "DEALER F",
  "DEALER G",
  "DEALER H",
  "DEALER I",
  "DEALER J",
];

const generateDealerCode = (index) => {
  return `FA${String(index + 1).padStart(5, "0")}`;
};

const generateDealer = () => {
  return dealerNames.map((dealerName, index) => ({
    id: index + 1,
    kode: generateDealerCode(index),
    dealer: dealerName,
    status: randomStatuses[Math.floor(Math.random() * randomStatuses.length)],
  }));
};

// Exporting the generated dealer data
export const dealer = generateDealer();

const leasingNames = [
  "BAF",
  "SOF",
  "ADIRA",
  "MAF",
  "CSF",
  "IMFI",
  "INDOMOBIL",
  "BANK SUMUT",
  "MANDALA",
  "MUF",
  "WOM",
  "MMF",
  "MCF",
  "OTHERS",
];

// Generate the leasing array
const generateLeasing = () => {
  return leasingNames.map((leasingName, index) => ({
    id: index + 1,
    leasing: leasingName,
  }));
};

// Exporting the generated leasing data
export const leasing = generateLeasing();

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

const randomBranches = [
  "AR HAKIM",
  "Jalan Merdeka",
  "Sudirman",
  "Brigjen Katamso",
  "Jalan Gatot Subroto",
  "MangunSarkoro",
  "Iskandar Muda",
  "Ahmad Yani",
  "Rasuna Said",
  "Cipto Mangunkusumo",
];

const generateRandomWewenang = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    kode: `FAFA${getRandomNumber()}`,
    nama: `PT. ALFA SCORPII - ${randomBranches[index % randomBranches.length]}`,
  }));
};

export const wewenangMedan = generateRandomWewenang(10);
export const wewenangAceh = generateRandomWewenang(10);
export const wewenangPekanBaru = generateRandomWewenang(10);
export const wewenangeKepRiau = generateRandomWewenang(10);

export const dpackModel = [
  {
    id: 1,
    kode: "KODE001",
    model: "SUV",
    catalog: "2024",
    category: "Electric",
    color: "RED",
  },
  {
    id: 2,
    kode: "KODE002",
    model: "Hatchback",
    catalog: "2026",
    category: "Economy",
    color: "BLUE",
  },
  {
    id: 3,
    kode: "KODE003",
    model: "Truck",
    catalog: "2025",
    category: "Diesel",
    color: "BLACK",
  },
  {
    id: 4,
    kode: "KODE004",
    model: "Sedan",
    catalog: "2023",
    category: "Luxury",
    color: "SILVER",
  },
  {
    id: 5,
    kode: "KODE005",
    model: "Convertible",
    catalog: "2024",
    category: "Hybrid",
    color: "YELLOW",
  },
  {
    id: 6,
    kode: "KODE006",
    model: "Wagon",
    catalog: "2026",
    category: "Electric",
    color: "BLUE",
  },
  {
    id: 7,
    kode: "KODE007",
    model: "Minivan",
    catalog: "2025",
    category: "Diesel",
    color: "RED",
  },
  {
    id: 8,
    kode: "KODE008",
    model: "Coupe",
    catalog: "2023",
    category: "Luxury",
    color: "BLACK",
  },
  {
    id: 9,
    kode: "KODE009",
    model: "Van",
    catalog: "2024",
    category: "Economy",
    color: "SILVER",
  },
  {
    id: 10,
    kode: "KODE010",
    model: "Sports Car",
    catalog: "2026",
    category: "Hybrid",
    color: "YELLOW",
  },
  {
    id: 11,
    kode: "KODE011",
    model: "SUV",
    catalog: "2023",
    category: "Luxury",
    color: "BLACK",
  },
  {
    id: 12,
    kode: "KODE012",
    model: "Truck",
    catalog: "2025",
    category: "Diesel",
    color: "RED",
  },
  {
    id: 13,
    kode: "KODE013",
    model: "Hatchback",
    catalog: "2026",
    category: "Economy",
    color: "YELLOW",
  },
  {
    id: 14,
    kode: "KODE014",
    model: "Wagon",
    catalog: "2024",
    category: "Electric",
    color: "SILVER",
  },
  {
    id: 15,
    kode: "KODE015",
    model: "Minivan",
    catalog: "2025",
    category: "Diesel",
    color: "BLUE",
  },
  {
    id: 16,
    kode: "KODE016",
    model: "Convertible",
    catalog: "2024",
    category: "Hybrid",
    color: "BLACK",
  },
  {
    id: 17,
    kode: "KODE017",
    model: "Sedan",
    catalog: "2023",
    category: "Luxury",
    color: "YELLOW",
  },
  {
    id: 18,
    kode: "KODE018",
    model: "Van",
    catalog: "2026",
    category: "Economy",
    color: "BLUE",
  },
  {
    id: 19,
    kode: "KODE019",
    model: "Coupe",
    catalog: "2024",
    category: "Electric",
    color: "RED",
  },
  {
    id: 20,
    kode: "KODE020",
    model: "Sports Car",
    catalog: "2025",
    category: "Hybrid",
    color: "SILVER",
  },
];

export const customers = [
  {
    id: 1,
    dealer: "PT Alfa Scorpii 2",
    customer: "Jonathan White",
    lokasi: "Kep. Riau",
    telepon: "+62 812-3456-7890",
    motor: "Yamaha Mio",
    fu: 1,
    status: "SHOW",
  },
  {
    id: 2,
    dealer: "PT Alfa Scorpii 1",
    customer: "Richard Gordon MD",
    lokasi: "Riau",
    telepon: "+62 813-4567-8901",
    motor: "Yamaha XSR",
    fu: 6,
    status: "SHOW",
  },
  {
    id: 3,
    dealer: "PT Alfa Scorpii 1",
    customer: "Susan Bridges",
    lokasi: "Medan",
    telepon: "+62 814-5678-9012",
    motor: "Yamaha Mio",
    fu: 8,
    status: "SHOW",
  },
  {
    id: 4,
    dealer: "PT Alfa Scorpii 3",
    customer: "Kurt Stokes",
    lokasi: "Pekanbaru",
    telepon: "+62 815-6789-0123",
    motor: "Yamaha Vixion",
    fu: 2,
    status: "HIDE",
  },
  {
    id: 5,
    dealer: "PT Alfa Scorpii 1",
    customer: "David Delgado",
    lokasi: "Riau",
    telepon: "+62 816-7890-1234",
    motor: "Yamaha Aerox",
    fu: 6,
    status: "HIDE",
  },
  {
    id: 6,
    dealer: "PT Alfa Scorpii 2",
    customer: "Amy Smith",
    lokasi: "Riau",
    telepon: "+62 817-8901-2345",
    motor: "Yamaha Aerox",
    fu: 6,
    status: "SHOW",
  },
  {
    id: 7,
    dealer: "PT Alfa Scorpii 3",
    customer: "Nancy Jones",
    lokasi: "Kep. Riau",
    telepon: "+62 818-9012-3456",
    motor: "Yamaha Aerox",
    fu: 8,
    status: "SHOW",
  },
  {
    id: 8,
    dealer: "PT Alfa Scorpii 3",
    customer: "Mariah Gamble",
    lokasi: "Riau",
    telepon: "+62 819-0123-4567",
    motor: "Yamaha R15",
    fu: 3,
    status: "SHOW",
  },
  {
    id: 9,
    dealer: "PT Alfa Scorpii 1",
    customer: "David Hamilton",
    lokasi: "Aceh",
    telepon: "+62 821-1234-5678",
    motor: "Yamaha Nmax",
    fu: 2,
    status: "HIDE",
  },
  {
    id: 10,
    dealer: "PT Alfa Scorpii 2",
    customer: "Cassandra Francis",
    lokasi: "Aceh",
    telepon: "+62 822-2345-6789",
    motor: "Yamaha Vixion",
    fu: 4,
    status: "HIDE",
  },
  {
    id: 11,
    dealer: "PT Alfa Scorpii 1",
    customer: "Michael Jordan",
    lokasi: "Medan",
    telepon: "+62 823-3456-7890",
    motor: "Yamaha XMax",
    fu: 5,
    status: "SHOW",
  },
  {
    id: 12,
    dealer: "PT Alfa Scorpii 2",
    customer: "Emma Watson",
    lokasi: "Pekanbaru",
    telepon: "+62 824-4567-8901",
    motor: "Yamaha R25",
    fu: 7,
    status: "SHOW",
  },
  {
    id: 13,
    dealer: "PT Alfa Scorpii 3",
    customer: "Chris Evans",
    lokasi: "Aceh",
    telepon: "+62 825-5678-9012",
    motor: "Yamaha Nmax",
    fu: 3,
    status: "HIDE",
  },
  {
    id: 14,
    dealer: "PT Alfa Scorpii 2",
    customer: "Natalie Portman",
    lokasi: "Kep. Riau",
    telepon: "+62 826-6789-0123",
    motor: "Yamaha Aerox",
    fu: 9,
    status: "SHOW",
  },
  {
    id: 15,
    dealer: "PT Alfa Scorpii 1",
    customer: "Robert Downey",
    lokasi: "Medan",
    telepon: "+62 827-7890-1234",
    motor: "Yamaha XSR",
    fu: 6,
    status: "HIDE",
  },
  {
    id: 16,
    dealer: "PT Alfa Scorpii 2",
    customer: "Scarlett Johansson",
    lokasi: "Pekanbaru",
    telepon: "+62 828-8901-2345",
    motor: "Yamaha Vixion",
    fu: 7,
    status: "SHOW",
  },
  {
    id: 17,
    dealer: "PT Alfa Scorpii 3",
    customer: "Mark Ruffalo",
    lokasi: "Riau",
    telepon: "+62 829-9012-3456",
    motor: "Yamaha R15",
    fu: 8,
    status: "HIDE",
  },
  {
    id: 18,
    dealer: "PT Alfa Scorpii 2",
    customer: "Tom Hiddleston",
    lokasi: "Riau",
    telepon: "+62 831-0123-4567",
    motor: "Yamaha XMax",
    fu: 5,
    status: "SHOW",
  },
  {
    id: 19,
    dealer: "PT Alfa Scorpii 1",
    customer: "Chris Hemsworth",
    lokasi: "Medan",
    telepon: "+62 832-1234-5678",
    motor: "Yamaha Nmax",
    fu: 4,
    status: "SHOW",
  },
  {
    id: 20,
    dealer: "PT Alfa Scorpii 3",
    customer: "Jeremy Renner",
    lokasi: "Aceh",
    telepon: "+62 833-2345-6789",
    motor: "Yamaha Aerox",
    fu: 9,
    status: "HIDE",
  },
];
