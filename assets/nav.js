/* The Pastor's Handbook — shared sidebar navigation.
   Injected into every page; edit the TOC here once and every page follows. */

(function () {
  var TOC = [
    { part: "Part I · The Pastor", chapters: [
      [1, "The Call and the Cost", "01-call-and-cost.html"],
      [2, "The Pastor's Triangle", "02-pastors-triangle.html"],
      [3, "Know Your Drift, Staff Your Gaps", "03-drift-and-gaps.html"],
      [4, "A Sustainable Inner Life", "04-sustainable-inner-life.html"],
      [5, "Your First 90 Days", "05-first-90-days.html"]
    ]},
    { part: "Part II · The Church", chapters: [
      [6, "The Church House", "06-church-house.html"],
      [7, "How a Church Is Organized", "07-how-a-church-is-organized.html"],
      [8, "Reading Your Context", "08-reading-your-context.html"],
      [9, "Ministry Lanes", "09-ministry-lanes.html"]
    ]},
    { part: "Part III · Worship and the Word", chapters: [
      [10, "Word, Table, Order, and Service", "10-word-table-order-service.html"],
      [11, "Planning the Worship Year", "11-planning-the-worship-year.html"],
      [12, "Preaching and the Preaching Calendar", "12-preaching-and-the-calendar.html"],
      [13, "The Sacraments", "13-the-sacraments.html"],
      [14, "Music and the Arts in Worship", "14-music-and-the-arts.html"],
      [15, "The Unglamorous Rooms", "15-the-unglamorous-rooms.html"]
    ]},
    { part: "Part IV · Caring for People", chapters: [
      [16, "A Congregational Care System", "16-congregational-care.html"],
      [17, "The Holy Moments", "17-the-holy-moments.html"],
      [18, "Welcoming and Keeping New People", "18-welcoming-new-people.html"],
      [19, "Safe Sanctuaries", "19-safe-sanctuaries.html"]
    ]},
    { part: "Part V · Forming Disciples", chapters: [
      [20, "The Christian Life", "20-the-christian-life.html"],
      [21, "Children and Youth", "21-children-and-youth.html"],
      [22, "Adult Discipleship and Small Groups", "22-adult-discipleship.html"],
      [23, "Confirmation and the Milestones of Faith", "23-confirmation-and-milestones.html"]
    ]},
    { part: "Part VI · Turning Outward", chapters: [
      [24, "Building a Missions Strategy", "24-missions-strategy.html"],
      [25, "Fundraisers, Events, and Outreach", "25-events-that-work.html"],
      [26, "Starting Something New", "26-starting-something-new.html"]
    ]},
    { part: "Part VII · Running the Church", chapters: [
      [27, "Money", "27-money.html"],
      [28, "People", "28-people.html"],
      [29, "Property, Safety, and Risk", "29-property-safety-risk.html"],
      [30, "Communications", "30-communications.html"]
    ]},
    { part: "Part VIII · Leading Change and the Long View", chapters: [
      [31, "Casting Vision and a Vision Process", "31-casting-vision.html"],
      [32, "Conflict, Decline, and Disaffiliation", "32-conflict-decline-disaffiliation.html"],
      [33, "A Two-Year Case Study", "33-two-year-case-study.html"],
      [34, "Playing the Long Game", "34-playing-the-long-game.html"]
    ]}
  ];

  var path = window.location.pathname;
  var here = path.substring(path.lastIndexOf("/") + 1) || "index.html";
  var inChapters = path.indexOf("/chapters/") !== -1;
  var root = inChapters ? "../" : "";
  var chDir = inChapters ? "" : "chapters/";

  var html = "";
  html += '<a class="side-title" href="' + root + 'index.html">The Pastor’s Handbook</a>';
  html += '<div class="side-sub">A field guide for leading a local church</div>';
  html += '<hr class="side-rule">';
  TOC.forEach(function (p) {
    html += '<div class="part-label">' + p.part + "</div><ol>";
    p.chapters.forEach(function (c) {
      var cur = here === c[2] ? ' class="current"' : "";
      html += '<li><a' + cur + ' href="' + chDir + c[2] + '"><span class="n">' + c[0] + "</span><span>" + c[1] + "</span></a></li>";
    });
    html += "</ol>";
  });

  var side = document.createElement("aside");
  side.className = "side";
  side.innerHTML = html;
  document.body.insertBefore(side, document.body.firstChild);

  var topbar = document.createElement("div");
  topbar.className = "topbar";
  topbar.innerHTML =
    '<a href="' + root + 'index.html">The Pastor’s Handbook</a>' +
    "<button type=\"button\">Contents</button>";
  var pane = document.querySelector(".pane");
  if (pane) { pane.insertBefore(topbar, pane.firstChild); }

  var scrim = document.createElement("div");
  scrim.className = "scrim";
  document.body.appendChild(scrim);

  function toggle() { document.body.classList.toggle("side-open"); }
  topbar.querySelector("button").addEventListener("click", toggle);
  scrim.addEventListener("click", toggle);

  var current = side.querySelector("a.current");
  if (current && current.scrollIntoView) {
    current.scrollIntoView({ block: "center" });
  }
})();
