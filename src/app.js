import Vue from "vue";

var app = new Vue({
  el: "#container",
  data: {
    indexSelected: "",
    nav: [
      {
        name: "Solutions",
        dropdown: ["Feedback", "Surveys", "Reviews", "Praise"],
      },
      {
        name: "Pricing",
      },
      {
        name: "Blog",
      },
      {
        name: "Sign in",
      },
      {
        name: "Sign up",
      },
    ],
    footer: [
      {
        name: "Product",
        links: [
          "Feedback",
          "Surveys",
          "Reviews",
          "Praise",
          "Slack Integration",
          "Schedule a demo",
          "Pricing",
        ],
      },
      {
        name: "About",
        links: ["About", "Terms and privacy", "Help Center", "Blog", "Digest"],
      },
      {
        name: "Connect",
        links: ["Contact us", "Twitter", "Facebook", "Linkedin"],
      },
      {
        name: "Labs",
        links: ["Manager checklist", "Manager assessment", "Manager handbook"],
      },
      {
        name: "From the blog",
        links: [
          "How to change your company culture: a four-step framework",
          "How teams can be more productive by killing 8-hour workday",
          "How to build high performing teams inspired by nature",
          "View all",
        ],
      },
    ],
  },
  methods: {
    hoverDrop(voce, index) {
      this.indexSelected = index;
    },
    outDrop(voce, index) {
      this.indexSelected = "";
    },
  },
});
