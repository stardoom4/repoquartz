import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/stardoom4", 
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  right: [Component.Graph(), Component.Backlinks()],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
Component.Explorer({
  title: "Explorer", // title of the explorer component
  folderClickBehavior: "collapse", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
  folderDefaultState: "collapsed", // default state of folders ("collapsed" or "open")
  useSavedState: true, // whether to use local storage to save "state" (which folders are opened) of explorer
  // Sort order: folders first, then files. Sort folders and files alphabetically
  sortFn: (a, b) => {
    ... // default implementation shown later
  },
  filterFn: filterFn: (node) => node.name !== "tags", // filters out 'tags' folder
  mapFn: undefined,
  // what order to apply functions in
  order: ["filter", "map", "sort"],
})
