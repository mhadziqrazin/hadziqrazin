export interface ClickEvent {
  category: ClickCategory
  label: string
}

export enum ClickCategory {
  LINK = 'link_click',
  MODAL = 'modal_click',
  SHOWMORE = 'showmore_click',
  SHOWLESS = 'showless_click'
}
