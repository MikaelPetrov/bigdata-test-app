export enum Page {
  HOME = 'HOME',
  MOVIES = 'MOVIES',
  MOVIES_ROUTING = 'MOVIES_ROUTING',
}

export const paths = {
  [Page.HOME]: '/',
  [Page.MOVIES]: '/movies',
  [Page.MOVIES_ROUTING]: '/movies/:id',
};
