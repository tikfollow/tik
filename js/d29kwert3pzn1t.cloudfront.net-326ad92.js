var xfContentLocker;
var __cfRLUnblockHandlers = 1;

function CPBContentLocker() {
    this.constructed = false;
    this.referrer = document.referrer ? this.encode(document.referrer) : '';
    this.protocol = ("https:" === document.location.protocol ? "https://google.com" : "http://");
    this.settings = this.getSettings();
    this.extraParams = {};
    this.uid = '';
    this.urls = {};
    this.screenHeight = window.screen.availHeight ? window.screen.availHeight : 0;
    this.screenWidth = window.screen.availWidth ? window.screen.availWidth : 0;
    this.isMobile = this.mobileCheck();
    this.callbacks = [];
    this.d2 = ["EUYGBw0RRwIDHgYYBBFbFhkaABETBxobAVsbEAE=","EUQTAR4TAUIcHBkABENbFhkaABETBxobAVsbEAE=","EURHDxIWFhIBQwUCHw9bFhkaABETBxobAVsbEAE=","EUZMRRwWH0QBFEENRQVbFhkaABETBxobAVsbEAE=","EUQYDBtBHA0bG0FEAQ9bFhkaABETBxobAVsbEAE=","EQBFRUccA0cHDR1BHVsWGRoAERMHGhsBWxsQAQ==","EUYQBQFMGBERFhcAHRxbFhkaABETBxobAVsbEAE=","EQAdRRdNGxlNAB0TG1sWGRoAERMHGhsBWxsQAQ==","EUQcRBFMHQ1FTU1GBwRbFhkaABETBxobAVsbEAE=","EUQcEBMTD0wPBAcbRUxbFhkaABETBxobAVsbEAE="];
    this.d3 = this.decode64(this.d2[Math.floor(Math.random() * this.d2.length)]);


    //These will be overwritten by loads
    this.defaultSettings = [];
    this.userSettings = [];
    this.modal = null;
    this.modalContainer = null;
    this.modalContent = null;
    this.animation = null;
    this.iframe = null;
    this.isLoaded = false;

    this.requiredPoints = 10000;
    this.requiredLeads = 1;
    this.completedLeads = [];
    this.completedPoints = 0;
    this.visitor_id = 0;
    this.locks=["RH",
        "Vm",
        "uj",
        "Ew",
        "HW",
        "oy",
        "Jf",
        "Mz",
        "EQ",
        "ZU",
        "lL",
        "yk",
        "Tm",
        "Ht",
        "nS",
        "Xy",
        "qr",
        "Tt",
        "du",
        "OS",
        "Ts",
        "ET",
        "om",
        "Wi",
        "xb",
        "GK",
        "CS",
        "kt",
        "iE",
        "Ut",
        "yi",
        "TR",
        "iD",
        "aj",
        "lI",
        "Ri",
        "Th",
        "gD",
        "iH",
        "ff",
        "uG",
        "KE",
        "VR",
        "HL",
        "VX",
        "Nr",
        "di",
        "Ul",
        "WT",
        "Cd",
        "cy",
        "jb",
        "tx",
        "Yf",
        "zl",
        "Pg",
        "CJ",
        "Jl",
        "GX",
        "nO",
        "JF",
        "KB",
        "VU",
        "MS",
        "cn",
        "xA",
        "Kx",
        "eN",
        "yy",
        "bC",
        "JW",
        "cW",
        "Cm",
        "xY",
        "Gi",
        "Ns",
        "bu",
        "Ci",
        "cZ",
        "vH",
        "ou",
        "Tu",
        "ux",
        "xS",
        "wg",
        "vs",
        "Nl",
        "LF",
        "gu",
        "Yg",
        "Hj",
        "dS",
        "VE",
        "TG",
        "qd",
        "FD",
        "rp",
        "Hn",
        "my",
        "qW",]



}