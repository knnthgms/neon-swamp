const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/projects"],
    exact: true,
    component: "projects",
  },
  {
    path: ["/blog"],
    exact: true,
    component: "Blog",
  },
  {
    path: ["/links"],
    exact: true,
    component: "Links",
  },
  {
    path: ["/lab"],
    exact: true,
    component: "Lab",
  },
];

export default routes;
