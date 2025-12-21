module.exports = class {
  data() {
    return {
      pagination: {
        data: "tours",   // nimmt automatisch _data/tours.json
        size: 1,
        alias: "tour"
      },
      layout: "tour.njk",
      permalink: function(data) {
        return `/${data.tour.url}/`;  // URL: /tour-01/, /tour-02/ ...
      },
      eleventyExcludeFromCollections: false
    };
  }

  render(data) {
    return ""; // Layout übernimmt die Darstellung
  }
};
