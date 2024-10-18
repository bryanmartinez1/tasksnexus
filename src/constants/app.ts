export const sitename = {
  longName: "Tasks Nexus",
  shortName: "TN",
};

export const routes = {
  home: {
    name: "Home",
    route: "/",
  },
  project: {
    name: "Project",
    route: "/project",
    routeParameter: "/project/:projectID",
  },

  work: {
    name: "Work",
    route: "/work",
    routeParameter: "/work/:workID",
  },

  groups: {
    name: "Groups",
    route: "/groups",
    routeParameter: "/groups/:groupID",
  },
  help: {
    name: "Help",
    route: "/help",
    routeParameter: "/help/:projectID",
  },
  profile: {
    name: "Profile",
    route: "/profile",
    routeParameter: "/profile/:profileID",
  },
  settings: {
    name: "Settings",
    route: "/settings",
  },
  signUp: {
    name: "Sign Up",
    route: "/signup",
  },
  logIn: {
    name: "Log In",
    route: "/login",
  },
};
